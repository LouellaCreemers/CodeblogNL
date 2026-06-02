import { brotliCompressSync, constants, gzipSync } from 'node:zlib'

const TEXT_TYPES = [
  'text/',
  'application/json',
  'application/javascript',
  'application/x-javascript',
  'application/xml',
  'application/rss+xml',
  'image/svg+xml'
]

const MIN_COMPRESS_SIZE = 1024

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', (response, { event }) => {
    if (!response || !response.body || typeof response.body !== 'string') {
      return
    }

    const statusCode = event.node.res.statusCode
    if (statusCode < 200 || statusCode >= 300) {
      return
    }

    if (getResponseHeader(event, 'Content-Encoding')) {
      return
    }

    const contentType = String(response.headers?.['content-type'] || '')
    if (!TEXT_TYPES.some(type => contentType.includes(type))) {
      return
    }

    const raw = Buffer.from(response.body)
    if (raw.byteLength < MIN_COMPRESS_SIZE) {
      return
    }

    const acceptEncoding = getHeader(event, 'accept-encoding') || ''
    const useBrotli = acceptEncoding.includes('br')
    const useGzip = acceptEncoding.includes('gzip')

    let compressed: Buffer | null = null
    let encoding: 'br' | 'gzip' | null = null

    if (useBrotli) {
      compressed = brotliCompressSync(raw, {
        params: {
          [constants.BROTLI_PARAM_QUALITY]: 5
        }
      })
      encoding = 'br'
    }
    else if (useGzip) {
      compressed = gzipSync(raw, {
        level: 6
      })
      encoding = 'gzip'
    }

    if (!compressed || !encoding || compressed.byteLength >= raw.byteLength) {
      return
    }

    response.body = compressed
    response.headers = {
      ...(response.headers || {}),
      'content-encoding': encoding,
      'content-length': String(compressed.byteLength),
      vary: 'Accept-Encoding'
    }
  })
})
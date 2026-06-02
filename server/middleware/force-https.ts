export default defineEventHandler((event) => {
  const forwardedProto = getHeader(event, 'x-forwarded-proto')
  const host = getHeader(event, 'host')

  if (forwardedProto === 'http' && host) {
    const location = `https://${host}${event.node.req.url || '/'}`
    return sendRedirect(event, location, 301)
  }
})

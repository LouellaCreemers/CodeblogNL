export const calculateReadingTime = (body: any) => {
  if (!body) return '1 min'
  
  let wordCount = 0
  
  const nodes = body?.value || (Array.isArray(body) ? body : null)
  
  if (!nodes) return '1 min'

  const walk = (nodes: any[]) => {
    for (const node of nodes) {
      if (!node) continue

      if (node.type === 'text' && typeof node.value === 'string') {
        wordCount += node.value.split(/\s+/).filter(Boolean).length
      } else if (Array.isArray(node)) {
        walk(node)
      } else if (node.children && Array.isArray(node.children)) {
        walk(node.children)
      } else if (node.value && Array.isArray(node.value)) {
        walk(node.value)
      } else if (typeof node === 'string') {
        wordCount += node.split(/\s+/).filter(Boolean).length
      } else if (node.value && typeof node.value === 'string') {
        wordCount += node.value.split(/\s+/).filter(Boolean).length
      }
    }
  }
  
  walk(Array.isArray(nodes) ? nodes : [nodes])

  const wordsPerMinute = 200
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute))
  return `${minutes} min`
}

import { queryCollection } from '@nuxt/content/server'
import { parseBlogDate } from '~~/app/utils/date'

export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'blog')
    .order('date', 'DESC')
    .all()

  const escapeXml = (unsafe: string) => {
    return unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
        default: return c;
      }
    });
  }

  const feedItems = posts.map((post) => {
    return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>https://codeblog.nl${post.path}</link>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${parseBlogDate(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">https://codeblog.nl${post.path}</guid>
    </item>`
  }).join('')

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>CodeBlog.nl</title>
    <link>https://codeblog.nl</link>
    <description>Technische inzichten voor Nederlandstalige developers. Verdiep je in .NET, C#, Azure en VueJS.</description>
    <language>nl-nl</language>
    <atom:link href="https://codeblog.nl/rss.xml" rel="self" type="application/rss+xml" />
    ${feedItems}
  </channel>
</rss>`

  event.node.res.setHeader('Content-Type', 'text/xml')
  return feed
})

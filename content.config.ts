import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: {
        include: 'blog/*.md',
        prefix: '/blog'
      },
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        readingTime: z.string().optional(),
        tags: z.array(z.string()),
        author: z.string().default('redactie')
      })
    }),
    authors: defineCollection({
      source: 'authors/*.json',
      type: 'data',
      schema: z.object({
        name: z.string(),
        image: z.string(),
        description: z.string(),
        link: z.string().optional()
      })
    })
  }
})

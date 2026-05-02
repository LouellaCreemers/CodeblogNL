export interface BlogPost {
  title: string
  description: string
  date: string
  readingTime?: string
  tags: string[]
  body: any
  path: string
}

export const useBlogPosts = () => {
  const asyncData = useAsyncData('blog-posts', () => 
    queryCollection('blog')
      .select('title', 'description', 'date', 'readingTime', 'tags', 'path', 'body')
      .order('date', 'DESC')
      .all()
  )
  const posts = asyncData?.data || ref([])
  const postsWithReadingTime = computed(() => {
    if (!posts.value) return []
    return posts.value.map(post => ({
      ...post,
      readingTime: (post as any).readingTime || ((post as any).body ? calculateReadingTime((post as any).body) : '1 min')
    }))
  })

  const recentPosts = computed(() => {
    return postsWithReadingTime.value.slice(0, 2)
  })

  return {
    posts: postsWithReadingTime,
    recentPosts
  }
}

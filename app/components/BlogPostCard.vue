<template>
  <UCard class="group hover:ring-2 hover:ring-primary-600 dark:hover:ring-primary-400 transition-all duration-300 flex flex-col h-full overflow-hidden">
    <div class="space-y-4 flex flex-col h-full">
      <div class="flex flex-wrap gap-2">
        <UBadge v-for="tag in post.tags" :key="tag" size="xs" variant="soft" :label="tag" />
      </div>

      <div class="space-y-2 flex-grow">
        <NuxtLink :to="post.path" class="block group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <h2 class="text-xl font-bold leading-tight">{{ post.post_title || post.title }}</h2>
        </NuxtLink>
        <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed">
          {{ post.description }}
        </p>
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
        <div class="flex items-center gap-1">
          <UIcon name="i-heroicons-calendar" />
          <time :datetime="post.date">{{ formatBlogDate(post.date) }}</time>
        </div>
        <div class="flex items-center gap-1">
          <UIcon name="i-heroicons-clock" />
          <span>{{ post.readingTime }} leestijd</span>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
interface Post {
  title: string
  post_title?: string
  description: string
  date: string
  readingTime?: string
  tags: string[]
  path: string
  body: any
}

defineProps<{
  post: Post
}>()
</script>

<template>
  <main class="max-w-3xl mx-auto space-y-12">
    <div v-if="doc">
      <!-- Post Header -->
      <header class="space-y-6">
        <div class="flex flex-wrap gap-2">
          <UBadge v-for="tag in doc.tags" :key="tag" variant="soft">{{ tag }}</UBadge>
        </div>

        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          {{ doc.title }}
        </h1>

        <p class="text-xl text-gray-500 dark:text-gray-400 leading-relaxed italic">
          {{ doc.description }}
        </p>

        <div class="flex items-center gap-6 text-sm text-gray-500 border-y border-gray-100 dark:border-gray-800 py-4">
          <div v-if="doc.author" class="flex items-center gap-2">
            <span class="font-medium uppercase text-xs tracking-widest text-primary-500">Auteur: {{ doc.author }}</span>
          </div>
          <div class="flex items-center gap-1">
            <UIcon name="i-heroicons-calendar" />
            <time :datetime="doc.date">{{ formatDate(doc.date) }}</time>
          </div>
          <div class="flex items-center gap-1">
            <UIcon name="i-heroicons-clock" />
            <span>{{ doc.readingTime || (doc.body ? calculateReadingTime(doc.body) : '1 min') }} leestijd</span>
          </div>
        </div>
      </header>

      <!-- Post Content -->
      <article class="prose prose-primary dark:prose-invert max-w-none prose-lg leading-relaxed">
        <ContentRenderer :value="doc" />
      </article>

      <!-- Author Box -->
      <AuthorBox :author-name="doc.author" />

      <footer class="pt-12 border-t border-gray-100 dark:border-gray-800">
        <UButton to="/blog" variant="ghost" icon="i-heroicons-arrow-left" label="Terug naar het overzicht" />
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()

const asyncData = await useAsyncData(`blog-post-${route.path}`, () => 
  queryCollection('blog').path(route.path).first()
)
const doc = asyncData?.data || ref(null)

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post niet gevonden', fatal: true })
}

if (doc.value) {
  useSeoMeta({
    title: `${doc.value.title} - CodeBlog.nl`,
    description: doc.value.description
  })
}

const formatDate = (dateString: string) => {
  return formatBlogDate(dateString)
}
</script>

<style scoped>
/* Ensure code blocks look good even without full tailwind typography config */
pre {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
}
</style>

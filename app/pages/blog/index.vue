<template>
  <div class="space-y-12">
    <header class="space-y-4">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Blog Artikelen</h1>
    </header>

    <div v-if="posts.length" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="post in posts" :key="post.path">
        <BlogPostCard :post="post" />
      </div>
    </div>

    <div v-else class="text-center py-20 bg-gray-50 dark:bg-gray-950/50 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 space-y-4">
      <UIcon name="i-heroicons-document-minus" class="w-12 h-12 text-gray-400 mx-auto" />
      <div class="space-y-2">
        <h2 class="text-xl font-semibold">Nog geen artikelen</h2>
        <p class="text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
          We werken hard aan nieuwe content. Kom binnenkort terug voor de eerste publicaties!
        </p>
      </div>
      <UButton to="/" color="gray" variant="ghost" label="Terug naar home" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { posts } = useBlogPosts()

useSeoMeta({
  title: 'Blog - CodeBlog.nl',
  description: 'Lees de nieuwste artikelen over .NET, Azure, VueJS en moderne software ontwikkeling.'
})

defineOgImage({
  component: 'OgImageGeneral',
  title: 'Blog Artikelen',
  description: 'Ontdek onze laatste technische artikelen en tutorials.',
  alt: 'Blog overzicht - CodeBlog.nl'
})
</script>

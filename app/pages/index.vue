<template>
  <div class="space-y-16">
    <!-- Hero Section -->
    <section class="py-12 md:py-20 text-center space-y-8">
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        CodeBlog.nl
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Technische inzichten voor Nederlandstalige developers. Verdiep je in .NET, C#, Azure en TypeScript.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <UButton to="/blog" size="xl" label="Bekijk Artikelen" icon="i-heroicons-document-text" />
        <UButton to="https://github.com/LouellaCreemers/CodeblogNL" target="_blank" size="xl" color="gray" variant="ghost" label="Zelf bijdragen?" icon="i-heroicons-pencil-square" />
      </div>
    </section>

    <!-- Topics Grid -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <UCard class="transition-all duration-300">
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-command-line" class="w-8 h-8 text-primary-500" />
            <h2 class="text-xl font-bold">.NET & C#</h2>
          </div>
        </template>
        <p class="text-gray-600 dark:text-gray-400">
          Van de nieuwste C# features tot diepe duiken in de .NET runtime en software architectuur.
        </p>
      </UCard>

      <UCard class="transition-all duration-300">
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-cloud" class="w-8 h-8 text-primary-500" />
            <h2 class="text-xl font-bold">Azure</h2>
          </div>
        </template>
        <p class="text-gray-600 dark:text-gray-400">
          Cloud-native bouwen op Azure. Serverless, containers en infrastructure as code.
        </p>
      </UCard>

      <UCard class="transition-all duration-300">
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-code-bracket" class="w-8 h-8 text-primary-500" />
            <h2 class="text-xl font-bold">TypeScript</h2>
          </div>
        </template>
        <p class="text-gray-600 dark:text-gray-400">
          Moderne webontwikkeling met type-safe JavaScript, frameworks, tooling en frontend architectuur.
        </p>
      </UCard>
    </section>

    <!-- Recent Posts Section -->
    <section class="space-y-8 py-12">
      <div class="flex justify-between items-end">
        <h2 class="text-2xl font-bold">Recente Artikelen</h2>
        <NuxtLink to="/blog" class="text-primary-500 hover:underline text-sm font-medium">Alle artikelen &rarr;</NuxtLink>
      </div>

      <div v-if="recentPosts.length" class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="post in recentPosts" :key="post.path">
          <BlogPostCard :post="post" />
        </div>
      </div>

      <div v-else class="bg-gray-50 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-12 text-center space-y-4">
        <p class="text-gray-500 dark:text-gray-400">Er zijn op dit moment nog geen artikelen gepubliceerd.</p>
        <UButton to="/blog" color="gray" variant="solid" label="Houd de blog in de gaten" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { recentPosts } = useBlogPosts()

useSeoMeta({
  title: 'CodeBlog.nl - .NET, C#, Azure en TypeScript voor Nederlandstalige Developers',
  description: 'CodeBlog.nl is hét platform voor Nederlandstalige developers over .NET, C#, Azure, en TypeScript.',

  ogTitle: 'CodeBlog.nl - .NET, C#, Azure en TypeScript voor Nederlandstalige Developers',
  ogDescription: 'CodeBlog.nl is hét platform voor Nederlandstalige developers over .NET, C#, Azure, en TypeScript.',
  ogType: 'website',
  ogUrl: 'https://codeblog.nl/',
  ogSiteName: 'CodeBlog.nl',
  ogLocale: 'nl_NL',
  ogImage: 'https://codeblog.nl/og/home.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'CodeBlog.nl - Nederlandstalige blog over .NET, C#, Azure en TypeScript',

  twitterCard: 'summary_large_image',
  twitterTitle: 'CodeBlog.nl - .NET, C#, Azure en TypeScript voor Nederlandstalige Developers',
  twitterDescription: 'CodeBlog.nl is hét platform voor Nederlandstalige developers over .NET, C#, Azure,en TypeScript.',
  twitterImage: 'https://codeblog.nl/og/home.png',
  twitterImageAlt: 'CodeBlog.nl - Nederlandstalige blog over .NET, C#, Azure en TypeScript',
})

defineOgImageComponent('General', {
  title: 'CodeBlog.nl',
  description: 'Technische inzichten voor Nederlandstalige developers over .NET, C#, Azure en TypeScript.',
  alt: 'CodeBlog.nl - Nederlandstalige blog over .NET, C#, Azure en TypeScript'
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-20 text-center space-y-8 bg-white dark:bg-gray-900">
    <div class="space-y-4">
      <h1 class="text-6xl md:text-8xl font-black text-primary-500">{{ error?.statusCode || '404' }}</h1>
      <h2 class="text-2xl md:text-3xl font-bold">{{ error?.statusCode === 404 ? 'Oeps! Pagina niet gevonden.' : 'Er is iets misgegaan.' }}</h2>
      <p class="text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
        {{ error?.statusCode === 404 ? 'De pagina die je zoekt lijkt niet te bestaan of is verhuisd. Geen zorgen, we helpen je graag terug op weg.' : error?.statusMessage || 'Onze excuses voor het ongemak.' }}
      </p>
    </div>

    <div class="flex gap-4">
      <UButton label="Terug naar Home" icon="i-heroicons-home" size="xl" @click="handleError" />
      <UButton to="/blog" size="xl" color="gray" variant="ghost" label="Bekijk onze Blog" icon="i-heroicons-document-text" />
    </div>

    <div class="pt-12 text-gray-400 dark:text-gray-600 italic">
      <p>"Niet alle dwalenden zijn verdwaald, maar deze link is dat wel."</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    default: () => ({})
  }
})

const handleError = () => clearError({ redirect: '/' })

useSeoMeta({
  title: `${props.error?.statusCode || 'Fout'} - CodeBlog.nl`,
  robots: 'noindex, nofollow'
})
</script>

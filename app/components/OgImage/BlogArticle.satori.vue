<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  authorName?: string
  authorImage?: string
  alt?: string
}>()
</script>

<template>
  <div class="w-full h-full flex flex-col justify-between bg-slate-900 p-16 text-white border-b-8 border-primary-500">
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <div class="w-12 h-1 bg-primary-500" />
        <span class="text-2xl font-bold tracking-wider uppercase text-primary-400">CodeBlog.nl</span>
      </div>
      <h1 class="text-6xl font-black leading-tight">
        {{ title }}
      </h1>
      <p v-if="description" class="text-2xl text-slate-400 line-clamp-2 mt-4 max-w-[90%]">
        {{ description }}
      </p>
    </div>

    <div class="flex items-center justify-between">
      <div v-if="authorName" class="flex items-center gap-6">
        <img
          v-if="authorImage"
          :src="authorImage"
          class="w-24 h-24 rounded-full border-4 border-slate-800 object-cover"
        >
        <div class="flex flex-col">
          <span class="text-slate-400 text-lg uppercase tracking-widest font-semibold">Auteur</span>
          <span class="text-3xl font-bold">{{ authorName }}</span>
        </div>
      </div>

      <div class="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-2xl border border-slate-700">
        <span class="text-xl font-medium text-slate-300 italic">Technische inzichten voor developers</span>
      </div>
    </div>
  </div>
</template>

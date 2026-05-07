<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  alt?: string
}>()
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center bg-slate-900 p-16 text-white border-b-8 border-primary-500 text-center">
    <div class="flex items-center gap-3 mb-8">
      <div class="w-12 h-1 bg-primary-500" />
      <span class="text-3xl font-bold tracking-wider uppercase text-primary-400">CodeBlog.nl</span>
      <div class="w-12 h-1 bg-primary-500" />
    </div>
    
    <h1 class="text-7xl font-black leading-tight mb-6">
      {{ title }}
    </h1>
    
    <p v-if="description" class="text-3xl text-slate-400 max-w-[80%] leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

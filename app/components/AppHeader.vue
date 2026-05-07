<template>
  <header class="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
    <UContainer class="flex items-center justify-between h-16">
      <div class="flex items-center gap-4">
        <NuxtLink to="/" class="text-xl font-bold text-primary-500 flex items-center gap-2" aria-label="CodeBlog.nl">
          <span class="hidden sm:inline">CodeBlog.nl</span>
          <span class="sm:hidden text-2xl font-black">CB</span>
        </NuxtLink>
      </div>

      <nav class="hidden md:flex items-center gap-6" aria-label="Hoofdnavigatie">
        <ULink to="/" active-class="text-primary-500" class="hover:text-primary-400 transition-colors">Home</ULink>
        <ULink to="/blog" active-class="text-primary-500" class="hover:text-primary-400 transition-colors">Blog</ULink>
        <ULink to="/over" active-class="text-primary-500" class="hover:text-primary-400 transition-colors">Over</ULink>
      </nav>

      <div class="flex items-center gap-2">
        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            aria-label="Thema wisselen"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
        <USlideover v-model:open="isOpen" title="Menu" side="right" class="md:hidden">
          <UButton
            icon="i-heroicons-bars-3"
            color="gray"
            variant="ghost"
            aria-label="Menu openen"
          />
          <template #body>
            <nav class="flex flex-col gap-4 text-lg">
              <NuxtLink to="/" class="hover:text-primary-500 py-2" @click="isOpen = false">Home</NuxtLink>
              <NuxtLink to="/blog" class="hover:text-primary-500 py-2" @click="isOpen = false">Blog</NuxtLink>
              <NuxtLink to="/over" class="hover:text-primary-500 py-2" @click="isOpen = false">Over</NuxtLink>
            </nav>
          </template>
        </USlideover>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const isOpen = ref(false)

const route = useRoute()
watch(() => route.fullPath, () => {
  isOpen.value = false
})
</script>

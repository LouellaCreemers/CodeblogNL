<template>
  <div v-if="author" class="mt-16 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
    <UAvatar
      :src="author.image"
      :alt="author.name"
      size="xl"
      class="ring-4 ring-white dark:ring-gray-800"
    />
    <div class="space-y-3">
      <div class="space-y-1">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ author.name }}</h3>
        <p class="text-sm font-medium text-primary-500 uppercase tracking-wider">Auteur</p>
      </div>
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
        {{ author.description }}
      </p>
      <div class="flex justify-center md:justify-start gap-4 pt-2">
        <UButton
          :to="author.link || '/over'"
          variant="link"
          color="gray"
          size="sm"
          :label="`Lees meer over ${author.name} &rarr;`"
          :padded="false"
          class="md:-ml-2.5"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  authorName?: string
}>()

const { data: author } = await useAsyncData(() => `author-${props.authorName}`, async () => {
  if (!props.authorName) return null
  
  // Try to find author by name
  return await queryCollection('authors').where('name', '=', props.authorName).first()
}, {
  watch: [() => props.authorName]
})
</script>

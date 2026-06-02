<script setup lang="ts">
useSeoMeta({
  ogSiteName: 'CodeBlogNL',
  ogLocale: 'nl_NL',
  twitterCard: 'summary_large_image',
})

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CodeBlog.nl',
  url: 'https://codeblog.nl',
  logo: 'https://codeblog.nl/favicon.ico',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CodeBlog.nl',
  url: 'https://codeblog.nl',
  publisher: {
    '@type': 'Organization',
    name: 'CodeBlog.nl',
  },
}

useHead({
  script: [
    {
      id: 'schema-organization',
      type: 'application/ld+json',
      children: JSON.stringify(organizationSchema),
    },
    {
      id: 'schema-website',
      type: 'application/ld+json',
      children: JSON.stringify(websiteSchema),
    },
  ],
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

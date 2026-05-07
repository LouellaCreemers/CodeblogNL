// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  },
  site: {
    url: 'https://codeblog.nl',
    name: 'CodeBlogNL'
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/a11y',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-gtag',
    'nuxt-og-image'
  ],
  ogImage: {
    defaults: {
      component: 'General'
    }
  },
  content: {
    database: {
      type: 'sqlite',
      filename: ':memory:'
    },
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['csharp', 'javascript', 'typescript', 'vue']
        }
      }
    }
  },
  gtag:{
    id: 'G-PNS4XCPRQM',

  },
  future: {
    compatibilityVersion: 4,
  }
})
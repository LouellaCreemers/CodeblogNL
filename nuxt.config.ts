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
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/hints', '@nuxt/a11y', '@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-gtag'],
  content: {
    highlight: {
      theme: 'github-dark',
      preload: ['csharp', 'dotnet', 'javascript', 'typescript', 'vue']
    }
  },
  gtag:{
    id: 'G-PNS4XCPRQM',

  },
  future: {
    compatibilityVersion: 4,
  }
})
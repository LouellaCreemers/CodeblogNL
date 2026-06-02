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
    name: 'CodeBlog.nl'
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
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'CodeBlog.nl' },
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
    'nuxt-og-image',
    '@nuxt/fonts'
  ],
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
  },
  hooks: {
    'build:manifest': (manifest) => {
      const css = Object.values(manifest).find(options => options.isEntry)?.css
      if (css) {
        for (let i = css.length - 1; i >= 0; i--) {
          if (css[i].startsWith('entry')) {
            css.splice(i, 1)
          }
        }
      }
    },
  },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true
    },
    routeRules: {
      '/**': {
        headers: {
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
          'Content-Security-Policy': "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; upgrade-insecure-requests",
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      }
    }
  }
})
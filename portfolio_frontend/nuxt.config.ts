export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Ocean Professional Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'A modern, minimalist portfolio with ocean-blue and amber accents.' },
        { name: 'theme-color', content: '#2563EB' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Ocean Professional Portfolio' },
        { property: 'og:description', content: 'Showcasing projects, skills, and contact with a modern aesthetic.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  nitro: {
    routeRules: {
      "/**": {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    },
  },

  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: true,
      port: 3000,
    },
    css: {
      preprocessorOptions: {
        css: {
          // No preprocessors used; kept for future extension
        }
      }
    }
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "shadcn-nuxt",
    "nuxt-icon",
    ['@nuxtjs/google-fonts', {
      families: {
        Lato: {
          wght: [300, 400, 700]
        },
      }
    }],
    "@nuxtjs/i18n",
    '@nuxtjs/color-mode',
    "nuxt-graphql-client"
  ],
  nitro: {
    baseURL: "http://localhost:3000",
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },
  routeRules: {
    "/**": { ssr: false }
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://asrp.media/public-graphql'
    }
  },
  css: ["@/assets/css/tailwind.css"],
  shadcn: {
    prefix: "Ui",
    componentDir: './components/ui'
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ru', iso: 'ru-RU', name: 'Русский', file: 'ru.json' },
      { code: 'ua', iso: 'uk-UA', name: 'Українська', file: 'ua.json' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de.json' },
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'kk', iso: 'kk-KZ', name: 'Қазақша', file: 'kk.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts'
  },
  generate:{
    routes: [
      '/',
      '/blog',
      '/contact',
      '/login'
    ]
  },
  colorMode: {
    preference: 'dark',
    classSuffix: '',
  }
})

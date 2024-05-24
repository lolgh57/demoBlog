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
  ],
  css: ["@/assets/css/tailwind.css"],
  shadcn: {
    prefix: "Ui",
    componentDir: './components/ui'
  }
})

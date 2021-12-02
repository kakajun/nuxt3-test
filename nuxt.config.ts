import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Vitesse Nuxt 3',
  },
  buildModules: [

    '@pinia/nuxt',
  ],
})

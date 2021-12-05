import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Nuxt 3',
  },
  buildDir: '/fff/',
  srcDir: "/client/",
  buildModules: [
    '@vueuse/core/nuxt',
    '@pinia/nuxt',
  ],
 app: {
    "basePath": "./",
    "assetsPath": "./_nuxt/",
    "cdnURL": null
  },
  vite: {
    logLevel: 'info',
  },
})
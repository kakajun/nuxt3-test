import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Nuxt 3',
  },
  buildDir:'',
  buildModules: [
    '@vueuse/core/nuxt',
    '@pinia/nuxt',
  ],
 app: {
    "basePath": "/nuxt3-test/",
    "assetsPath": "/nuxt3-test/_nuxt/",
    "cdnURL": null
  },
  vite: {
    logLevel: 'info',
  },
})
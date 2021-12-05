import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Nuxt 3',
  },
 router: {
    base: process.env.NUXT_ROUTER_BASE || '/'
  },
  buildModules: [
    '@vueuse/core/nuxt',
    '@pinia/nuxt',
  ],
//  app: {
//     "basePath": "/fff/",
//     "assetsPath": "./_nuxt/",
//     "cdnURL": null
//   },
  vite: {
    logLevel: 'info',
  },
})
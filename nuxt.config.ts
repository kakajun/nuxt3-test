import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Nuxt 3',
  },
    // buildDir: 'nuxt-build',
  // rootDir:"/project",
 router: {
    base: process.env.NUXT_ROUTER_BASE || '/'
  },
  buildModules: [
    '@vueuse/core/nuxt',
    '@pinia/nuxt',
  ],
 "app": {
    "basePath": "./",
    "assetsPath": "./_nuxt/",
    "cdnURL": null
  },
  vite: {
    logLevel: 'info',
  },
})
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Nuxt 3',
  },
    // buildDir: 'nuxt-build',
  // rootDir:"./project/",
 router: {
    base: process.env.NUXT_ROUTER_BASE || '/'
  },
  // nitro: {
  //   preset: '/nuxt3-test/'
  // },
  buildModules: [
    '@vueuse/core/nuxt',
    '@pinia/nuxt',
  ],
//  "app": {
//     // "basePath":  process.env.NUXT_ROUTER_BASE || '/',
//     // "assetsPath": process.env.NUXT_ROUTER_BASE || '/'+"./_nuxt/",
//     "cdnURL": null
//   },
  vite: {
    logLevel: 'info',
  },
})
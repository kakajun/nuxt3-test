import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus/dist/index.full'
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ElementPlus)
})
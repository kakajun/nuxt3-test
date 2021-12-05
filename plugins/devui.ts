import { defineNuxtPlugin } from "#app"
import { Button } from 'vue-devui';
import 'vue-devui/button/style.css'
export default defineNuxtPlugin((nuxtApp) => {
 nuxtApp.vueApp.use(Button)
})
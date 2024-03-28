import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import {VitePWA} from "vite-plugin-pwa"

export default defineConfig({
  base: "/typescript-vue3/",
  plugins: [
    vue(),
    VitePWA(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

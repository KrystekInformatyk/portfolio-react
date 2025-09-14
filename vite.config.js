// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ważne: nazwa repozytorium!
  base: '/portfolio-react/',
})

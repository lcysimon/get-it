import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  build: {
    minify: false,
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  plugins: [react()],
})

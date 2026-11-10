import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  build: {
    target: 'es2015',
    minify: 'esbuild',
  },
  plugins: [react()],
})

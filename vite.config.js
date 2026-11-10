import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Don't split into chunks - single file
        manualChunks: undefined,
        inlineDynamicImports: true,
      },
    },
    // Inline CSS and small assets
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
  },
})

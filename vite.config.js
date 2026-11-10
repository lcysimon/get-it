import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update this to match your GitHub repository name
// e.g., if your repo is username/get-it, use: base: '/get-it/'
// For user.github.io repo (no subpath), use: base: '/'
const repoName = process.env.GITHUB_REPOSITORY 
  ? process.env.GITHUB_REPOSITORY.split('/')[1] 
  : 'get-it'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  plugins: [react()],
})

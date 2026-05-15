import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Lab-work-7/',  // ← заміни на назву твого репозиторію
})

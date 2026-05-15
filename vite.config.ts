import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Відносний шлях — це правильно
  server: {
    port: 3000, // Необов'язково: фіксований порт для локальної розробки
    open: true, // Необов'язково: автоматично відкривати браузер
  }
})

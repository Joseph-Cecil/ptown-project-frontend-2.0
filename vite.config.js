import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
        proxy: {
      '/api': {
        target: 'https://ptbuy-api.onrender.com/',
        changeOrigin: true
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Cuando en el frontend hagas fetch('/api/message')...
      '/api': {
        target: 'http://localhost:3000', // ...Vite lo redirigirá aquí
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

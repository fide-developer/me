import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, '/src/assets/scss'),
      '@component': path.resolve(__dirname, '/src/components'),
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@layout': path.resolve(__dirname, '/src/layout'),
      '@utils': path.resolve(__dirname, '/src/utils')
    }
  }
})

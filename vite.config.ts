import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5000, // specify the desired port number here
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Set the '/@' alias to the 'src' directory
    },
  },
})

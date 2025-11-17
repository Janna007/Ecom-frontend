import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This is crucial for Docker
    port: 5173,      // Or your desired development port
    watch: {
      usePolling: true, // For HMR to work reliably in some Docker environments
    },
  },
})

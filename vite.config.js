import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
<<<<<<< HEAD
    host:
      '0.0.0.0'
  },
  port: 5173
=======
    host: '0.0.0.0',
    port: 5173,
  },
>>>>>>> 4ffb37b71f1de98be7aabc3cf5b9786238a8b418
})


import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
   build: {
    chunkSizeWarningLimit: 1000
  }
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
//     react(),        
//     tailwindcss(),
//   ],
//   build: {
//     chunkSizeWarningLimit: 1000
//   }
// })
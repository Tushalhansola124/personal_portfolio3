
// import React from 'react'
// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
//    build: {
//     chunkSizeWarningLimit: 1000
//   }
// })



import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],


  optimizeDeps: {
    include: ["framer-motion"]
  },
  ssr: {
    noExternal: ["framer-motion"]
  },

  build: {
    chunkSizeWarningLimit: 1000
  }
})
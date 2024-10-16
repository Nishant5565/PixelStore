import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { site_name } from './src/Functions/Constants'

export default defineConfig({
  plugins: [react()],
  base: `/${site_name}`,
  
})

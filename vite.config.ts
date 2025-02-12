import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Rwilson2855.github.io",
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    // hey! 👋 over here
    globals: true,
    setupFiles: './tests/setup.ts',
}})

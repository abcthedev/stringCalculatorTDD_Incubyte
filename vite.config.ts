import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/stringCalculatorTDD_Incubyte/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTestCases.ts"
  }
})

import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['buffer'],
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      }
    }
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true
  },
  // 静态资源处理
  assetsInclude: ['**/*.md']
})
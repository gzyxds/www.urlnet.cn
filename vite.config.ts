import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs'

// 自定义插件：复制图片文件到dist目录
function copyPicturesPlugin() {
  return {
    name: 'copy-pictures',
    writeBundle() {
      const srcDir = path.resolve(__dirname, 'src/app/new/picture')
      const destDir = path.resolve(__dirname, 'dist/picture')
      
      // 确保目标目录存在
      if (!existsSync(destDir)) {
        mkdirSync(destDir, { recursive: true })
      }
      
      // 复制所有图片文件
      if (existsSync(srcDir)) {
        const files = readdirSync(srcDir)
        files.forEach(file => {
          if (file.match(/\.(jpg|jpeg|png|webp|svg)$/i)) {
            const srcFile = path.join(srcDir, file)
            const destFile = path.join(destDir, file)
            copyFileSync(srcFile, destFile)
            console.log(`✅ 复制图片文件: ${file} -> /picture/${file}`)
          }
        })
      }
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    copyPicturesPlugin()
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
    chunkSizeWarningLimit: 1000, // 将警告限制调整为1000KB
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) {
              return 'three';
            }
            if (id.includes('react-dom')) {
              return 'react-dom';
            }
            if (id.includes('framer-motion')) {
                return 'framer-motion';
            }
            // 添加更多的chunk分割策略
            if (id.includes('lucide-react')) {
              return 'lucide-icons';
            }
            if (id.includes('@radix-ui')) {
              return 'radix-ui';
            }
            // 将其他大型库分组到vendor chunk
            return 'vendor';
          }
        }
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
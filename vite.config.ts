import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

import { crx } from '@crxjs/vite-plugin'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import manifest from './src/manifest.json' with { type: 'json' }

const IS_DEV = process.env.NODE_ENV === "development"
const PORT = Number(process.env.PORT) || 3303

// https://vite.dev/config/
export default defineConfig({
  base: IS_DEV ? `/` : "",
  server: {
    port: PORT,
    hmr: {
      host: "localhost",
    },
    origin: `http://localhost:${PORT}`,
  },
  plugins: [
    vue(),
    tailwindcss(),
    crx({ manifest }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    }
  },
  build: {
    watch: IS_DEV ? {} : undefined,
    sourcemap: IS_DEV ? "inline" : false,
    rollupOptions: {
      input: {
        popup: 'src/popup/index.html',
        views: 'src/views/index.html'
      }
    }
  },
  legacy: {
    // ⚠️ SECURITY RISK: Allows WebSockets to connect to the vite server without a token check ⚠️
    // See https://github.com/crxjs/chrome-extension-tools/issues/971 for more info
    // The linked issue gives a potential fix that @crxjs/vite-plugin could implement
    skipWebSocketTokenCheck: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

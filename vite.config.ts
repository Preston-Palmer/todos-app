/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), UnoCSS()],
    test: {
        globals: true,
        environment: 'jsdom'
    },
    server: {
        proxy: {
            '/localhost': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/localhost/, '')
            }
        }
    }
})

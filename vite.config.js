import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'node:fs'

const keepRootTxtFile = () => ({
  name: 'keep-root-txt-file',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: '1d7410b885c7b9323fb2d282d6f2bf71.txt',
      source: readFileSync('1d7410b885c7b9323fb2d282d6f2bf71.txt')
    })
  }
})

export default defineConfig({
  plugins: [vue(), keepRootTxtFile()],
  server: {
    host: true,
    port: 5173
  }
})

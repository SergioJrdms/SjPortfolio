import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup' // Importa o plugin MDX

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx(/* opções do mdx aqui, se necessário */) // Adiciona o plugin MDX
  ],
  // Permite importar arquivos .md ou .mdx
  optimizeDeps: {
      include: ['react/jsx-runtime']
  }
})
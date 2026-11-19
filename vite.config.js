import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

const r = (p) => fileURLToPath(new URL(p, import.meta.url))

// Sitio multipágina: inicio, listado del blog y plantilla de artículo
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        inicio: r('./index.html'),
        blog: r('./blog/index.html'),
        articulo: r('./blog/articulo.html'),
      },
    },
  },
})

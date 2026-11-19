# THEO'S Barbería

Sitio web (Vite, multipágina) de THEO'S Barbería, La Planicie, La Molina.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Despliegue en Vercel

1. Sube el proyecto a GitHub (o usa `npx vercel`).
2. En Vercel: **Add New → Project**, importa el repo. Detecta Vite solo
   (build `npm run build`, salida `dist`); `vercel.json` ya lo deja fijado.

## Dónde se edita el contenido

| Qué | Archivo |
| --- | --- |
| Teléfono, WhatsApp, dirección, horario, redes, aviso de vista previa | `src/data/config.js` |
| Carta de servicios y precios | `src/data/carta.js` |
| Artículos del Diario (blog) | `src/data/posts.js` |
| Textos de las secciones de inicio | `index.html` |
| Estilos | `src/styles/main.css` |

- **Vista previa:** `vistaPrevia.activa: false` en `config.js` quita el aviso (no tiene caducidad).
- **Indexación:** las páginas llevan `noindex` (meta en cada HTML y cabecera `X-Robots-Tag` en `vercel.json`). Hay que quitar ambas cosas al publicar el sitio oficial.
- **Imágenes:** son referenciales de Unsplash (`FOTOS` en `config.js` y las URLs de `index.html`); hay que reemplazarlas por fotos reales.

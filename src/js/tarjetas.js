import { img } from '../data/config.js'
import { fechaLarga, urlPost } from '../data/posts.js'

export const tarjetaPost = (p, i = 0, dest = false) => `
  <a class="post rv${dest ? ' dest' : ''}" data-rv style="--i:${i}" href="${urlPost(p)}" data-cat="${p.cat}">
    <div class="im"><img src="${img(p.foto, dest ? 1400 : 800)}" alt="" loading="lazy"></div>
    <div class="cuerpo">
      <div class="meta"><span>${p.cat}</span><span>${fechaLarga(p.fecha)}</span><span>${p.lectura}</span></div>
      <h3>${p.titulo}</h3>
      <p>${p.extracto}</p>
      <span class="leer">Leer artículo <i>→</i></span>
    </div>
  </a>`

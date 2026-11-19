import './styles/main.css'
import { img } from './data/config.js'
import { POSTS, fechaLarga } from './data/posts.js'
import { tarjetaPost } from './js/tarjetas.js'
import { $, iniciar, revelar, registrarParallax, enlazarWa } from './js/core.js'

const slug = new URLSearchParams(location.search).get('p')
const i = POSTS.findIndex((p) => p.slug === slug)
const post = POSTS[i]
const main = $('#articulo')

if (!post) {
  main.innerHTML = `
    <section class="sec">
      <div class="card blog-hero rv">
        <span class="etiqueta">Diario</span>
        <h1 class="tp"><span class="lm"><span>No</span></span><span class="lm" style="--l:1"><span><i>encontrado</i></span></span></h1>
        <div class="fila"><p>Este artículo no existe o cambió de dirección.</p><a class="pill pill-oro" href="/blog/">Volver al diario <span class="fl">→</span></a></div>
      </div>
    </section>`
} else {
  document.title = `${post.titulo} · THEO'S Barbería`
  document.querySelector('meta[name="description"]').content = post.extracto
  const otros = [...POSTS.slice(i + 1), ...POSTS.slice(0, i)].filter((p) => p.cat === post.cat)
  const relacionados = [...otros, ...POSTS.filter((p) => p !== post && !otros.includes(p))].slice(0, 3)
  const url = location.href

  main.innerHTML = `
    <section class="sec">
      <div class="card art-cab rv">
        <a class="miga" href="/blog/">← Diario</a>
        <h1>${post.titulo}</h1>
        <div class="art-meta"><span>${post.cat}</span><span>${fechaLarga(post.fecha)}</span><span>${post.lectura} de lectura</span></div>
      </div>
      <div class="card art-portada rv" style="--i:1">
        <img class="px" src="${img(post.foto, 2000)}" alt="">
        <span class="ref">Imagen referencial</span>
      </div>
      <div class="art-cuerpo">
        <article class="prosa rv" style="--i:2">${post.html}</article>
        <aside class="lado rv" style="--i:3">
          <div class="card c-reserva">
            <div><span class="etiqueta">Reservas</span><h3 style="margin-top:12px">Llévalo a la silla</h3></div>
            <a class="pill pill-oro" href="#" data-wa="Hola Theo's, leí «${post.titulo}» y quisiera separar un turno.">Reservar turno <span class="fl">→</span></a>
          </div>
          <div class="compartir">
            <span>Compartir</span>
            <div>
              <a class="pill" href="https://wa.me/?text=${encodeURIComponent(post.titulo + ' ' + url)}" target="_blank" rel="noopener">WhatsApp</a>
              <a class="pill" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank" rel="noopener">Facebook</a>
              <button class="pill" type="button" id="copiar">Copiar enlace</button>
            </div>
          </div>
        </aside>
      </div>
    </section>
    <section class="sec" style="padding-bottom:0">
      <div class="card cab-fila rv">
        <div><span class="etiqueta">Sigue leyendo</span><h2 style="margin-top:14px"><span class="lm"><span>Más del</span></span><span class="lm" style="--l:1"><span><i>diario</i></span></span></h2></div>
        <a class="pill" href="/blog/">Ver todos <span class="fl">→</span></a>
      </div>
      <div class="posts">${relacionados.map((p, k) => tarjetaPost(p, k + 1)).join('')}</div>
    </section>`
}

iniciar()
enlazarWa(main)
$('#copiar')?.addEventListener('click', async (e) => {
  try { await navigator.clipboard.writeText(location.href); e.target.textContent = '¡Copiado!' } catch { e.target.textContent = location.href }
})
registrarParallax()
revelar()

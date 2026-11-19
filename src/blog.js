import './styles/main.css'
import { POSTS } from './data/posts.js'
import { tarjetaPost } from './js/tarjetas.js'
import { $, $$, iniciar, revelar } from './js/core.js'

iniciar()

const grid = $('#posts'), filtros = $('#filtros')
const cats = ['Todos', ...new Set(POSTS.map((p) => p.cat))]

filtros.innerHTML = cats.map((c, i) =>
  `<button class="tab${i ? '' : ' on'}" type="button" role="tab" aria-selected="${!i}" data-cat="${c}">${c}</button>`).join('')
grid.innerHTML = POSTS.map((p, i) => tarjetaPost(p, (i % 3) + 1, i === 0)).join('')

filtros.addEventListener('click', (e) => {
  const b = e.target.closest('.tab')
  if (!b || b.classList.contains('on')) return
  $$('.tab', filtros).forEach((t) => { t.classList.toggle('on', t === b); t.setAttribute('aria-selected', String(t === b)) })
  const cat = b.dataset.cat
  let k = 0
  $$('.post', grid).forEach((p) => {
    const ver = cat === 'Todos' || p.dataset.cat === cat
    p.classList.toggle('oculto', !ver)
    p.classList.remove('entra')
    if (ver) { void p.offsetWidth; p.style.setProperty('--k', k++); p.classList.add('entra') }
  })
})

revelar()

import './styles/main.css'
import { CONFIG, FOTOS, img } from './data/config.js'
import { CARTA } from './data/carta.js'
import { POSTS } from './data/posts.js'
import { tarjetaPost } from './js/tarjetas.js'
import {
  $, $$, reducido, ss, iniciar, enlazarWa, revelar, alScroll, bloquear,
  registrarParallax, anclaInicial,
} from './js/core.js'

iniciar()

/* ---------- cinta ---------- */
function cinta() {
  const items = ['Cortes clásicos', 'Fades', 'Diseño de barba', 'Toalla caliente', 'Corte para niños', 'La Planicie']
  const html = items.map((t) => `<span>${t}</span>`).join('')
  $('#pista').innerHTML = html + html
}

/* ---------- mosaico: cada tarjeta muestra su "ventana" de la misma foto ---------- */
function mosaico(sec) {
  const foto = new Image(), cards = $$('.card.foto', sec)
  foto.onload = () => {
    const pintar = () => {
      const r = sec.getBoundingClientRect(), sw = r.width, sh = r.height
      const fx = parseFloat(innerWidth < 768 ? sec.dataset.fxM : sec.dataset.fx)
      const esc = Math.max(sw / foto.naturalWidth, sh / foto.naturalHeight)
      const bw = foto.naturalWidth * esc, bh = foto.naturalHeight * esc
      const ox = (bw - sw) * fx, oy = (bh - sh) * 0.5
      // offsetLeft/Top ignoran el transform de la animación de entrada
      const pos = (el) => { let x = 0, y = 0; for (let n = el; n; n = n.offsetParent) { x += n.offsetLeft; y += n.offsetTop } return [x, y] }
      const [sx, sy] = pos(sec)
      cards.forEach((c) => {
        const [cx, cy] = pos(c), x = cx - sx, y = cy - sy
        c.style.backgroundImage = `url(${foto.src})`
        c.style.backgroundSize = `${bw}px ${bh}px`
        c.style.backgroundPosition = `${-(x + ox)}px ${-(y + oy)}px`
      })
    }
    pintar()
    new ResizeObserver(pintar).observe(sec)
  }
  foto.src = sec.dataset.img
}

/* ---------- servicios: la tarjeta clara rota sola ---------- */
function servicios() {
  const svs = $$('.sv')
  let act = 0, toco = false
  const activar = (i) => { svs.forEach((s, j) => s.classList.toggle('on', i === j)); act = i }
  svs.forEach((s, i) => {
    s.addEventListener('mouseenter', () => { toco = true; activar(i) })
    s.addEventListener('click', () => { toco = true; activar(i) })
  })
  if (!reducido) setInterval(() => { if (!toco) activar((act + 1) % svs.length) }, 2600)
}

/* ---------- manifiesto: las palabras se encienden al avanzar ---------- */
function partir(el) {
  const recorrer = (nodo) => [...nodo.childNodes].forEach((n) => {
    if (n.nodeType !== 3) return recorrer(n)
    const frag = document.createDocumentFragment()
    n.textContent.split(/(\s+)/).forEach((p) => {
      if (!p) return
      if (/^\s+$/.test(p)) return frag.append(p)
      const s = document.createElement('span')
      s.className = 'w'
      s.textContent = p
      frag.append(s)
    })
    n.replaceWith(frag)
  })
  recorrer(el)
  return $$('.w', el)
}

function manifiesto() {
  const el = $('#manifTxt'), ws = partir(el)
  if (reducido) { ws.forEach((w) => w.classList.add('on')); return }
  alScroll(() => {
    const r = el.getBoundingClientRect(), h = innerHeight
    const p = Math.min(1, Math.max(0, (h * 0.85 - r.top) / (r.height + h * 0.25)))
    const n = Math.round(p * ws.length)
    ws.forEach((w, i) => w.classList.toggle('on', i < n))
  })
}

/* ---------- carta ---------- */
function carta() {
  const tabs = $('#tabs'), lista = $('#cartaLista')
  tabs.innerHTML = CARTA.map((c, i) =>
    `<button class="tab${i ? '' : ' on'}" type="button" role="tab" aria-selected="${!i}" data-i="${i}">${c.nombre}</button>`).join('')
  const pintar = (i) => {
    lista.innerHTML = CARTA[i].items.map((it) => `
      <li class="it"><a href="#" data-wa="Hola Theo's, quisiera reservar: ${it.n}.">
        <div class="ct"><h4>${it.n}${it.firma ? '<span class="firma">Firma</span>' : ''}</h4><span class="pts"></span><b>${it.p == null ? 'Consultar' : 'S/ ' + it.p}</b></div>
        <div class="det"><p>${it.d}</p><span class="dur">${it.t}</span></div>
        <span class="rsv">Reservar este servicio →</span>
      </a></li>`).join('')
    enlazarWa(lista)
  }
  pintar(0)
  tabs.addEventListener('click', (e) => {
    const b = e.target.closest('.tab')
    if (!b || b.classList.contains('on')) return
    $$('.tab', tabs).forEach((t) => { t.classList.toggle('on', t === b); t.setAttribute('aria-selected', String(t === b)) })
    lista.classList.add('cambia')
    setTimeout(() => { pintar(+b.dataset.i); lista.classList.remove('cambia') }, reducido ? 0 : 320)
  })
}

/* ---------- el ritual: desplazamiento horizontal fijado en escritorio ---------- */
function ritual() {
  const sec = $('#ritual'), pista = $('#ritPista'), vista = pista.parentElement
  const num = $('#ritNum'), barra = $('#ritBarra'), pasos = [...pista.children]
  let dist = 0, fijo = false

  const actualizar = () => {
    let p
    if (fijo) {
      const r = sec.getBoundingClientRect()
      p = dist ? Math.min(1, Math.max(0, -r.top / dist)) : 0
      pista.style.transform = `translate3d(${(-p * dist).toFixed(1)}px,0,0)`
    } else {
      p = pista.scrollLeft / Math.max(1, pista.scrollWidth - pista.clientWidth)
    }
    const i = Math.min(pasos.length - 1, Math.round(p * (pasos.length - 1)))
    num.textContent = String(i + 1).padStart(2, '0')
    barra.style.transform = `scaleX(${(0.25 + p * 0.75).toFixed(3)})`
    pasos.forEach((s, j) => s.classList.toggle('on', i === j))
  }
  const medir = () => {
    fijo = innerWidth >= 1024 && !reducido
    sec.classList.toggle('pin', fijo)
    if (!fijo) { sec.style.height = ''; pista.style.transform = ''; actualizar(); return }
    dist = Math.max(0, pista.scrollWidth - vista.clientWidth)
    sec.style.height = `${innerHeight + dist}px`
    actualizar()
  }
  medir()
  addEventListener('resize', medir)
  document.fonts?.ready.then(medir)
  pista.addEventListener('scroll', actualizar, { passive: true })
  alScroll(actualizar)
}

/* ---------- galería + visor ---------- */
const GALERIA = [
  [FOTOS.tijera, 'Tijera y peine', 'alta'],
  [FOTOS.fade, 'Fade', ''],
  [FOTOS.barba, 'Barba', ''],
  [FOTOS.hero, 'El local', 'ancha'],
  [FOTOS.disenoBarba, 'Diseño de barba', 'alta'],
  [FOTOS.maquina, 'Máquina', ''],
  [FOTOS.clasico, 'Clásico', ''],
  [FOTOS.ninos, 'Niños', 'ancha'],
]

function galeria() {
  $('#gal').insertAdjacentHTML('beforeend', GALERIA.map(([id, cap, cl], i) =>
    `<figure class="rv ${cl}" style="--i:${(i % 4) + 1}" data-i="${i}" tabindex="0" role="button" aria-label="Ampliar: ${cap}">
       <img src="${img(id, 900)}" alt="${cap} (imagen referencial)" loading="lazy"><figcaption>${cap}</figcaption>
     </figure>`).join(''))

  const lb = $('#lb'), im = $('img', lb), cap = $('.cap', lb)
  let act = 0, abierto = false
  const total = GALERIA.length
  const mostrar = (i) => {
    act = (i + total) % total
    const [id, texto] = GALERIA[act], src = img(id, 1800)
    im.classList.add('cambia')
    const pre = new Image()
    pre.onload = pre.onerror = () => {
      im.src = src
      im.alt = texto
      cap.textContent = `${String(act + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')} · ${texto}`
      im.classList.remove('cambia')
    }
    pre.src = src
  }
  const abrir = (i) => { mostrar(i); abierto = true; lb.classList.add('on'); lb.setAttribute('aria-hidden', 'false'); bloquear(true); $('.cerrar', lb).focus() }
  const cerrar = () => { abierto = false; lb.classList.remove('on'); lb.setAttribute('aria-hidden', 'true'); bloquear(false) }

  $('#gal').addEventListener('click', (e) => { const f = e.target.closest('figure'); if (f) abrir(+f.dataset.i) })
  $('#gal').addEventListener('keydown', (e) => { const f = e.target.closest('figure'); if (f && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); abrir(+f.dataset.i) } })
  $('.cerrar', lb).onclick = cerrar
  $('.ant', lb).onclick = () => mostrar(act - 1)
  $('.sig', lb).onclick = () => mostrar(act + 1)
  lb.addEventListener('click', (e) => { if (e.target === lb) cerrar() })
  addEventListener('keydown', (e) => {
    if (!abierto) return
    if (e.key === 'Escape') cerrar()
    if (e.key === 'ArrowLeft') mostrar(act - 1)
    if (e.key === 'ArrowRight') mostrar(act + 1)
  })
  // deslizar con el dedo
  let x0 = null
  lb.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX }, { passive: true })
  lb.addEventListener('touchend', (e) => {
    if (x0 == null) return
    const dx = e.changedTouches[0].clientX - x0
    if (Math.abs(dx) > 50) mostrar(act + (dx < 0 ? 1 : -1))
    x0 = null
  })
}

/* ---------- diario: últimos artículos ---------- */
function diario() {
  $('#postsInicio').innerHTML = POSTS.slice(0, 3).map((p, i) => tarjetaPost(p, i + 1)).join('')
}

/* ---------- preguntas frecuentes ---------- */
function faq() {
  $('#faqLista').addEventListener('click', (e) => {
    const b = e.target.closest('button')
    if (!b) return
    const q = b.parentElement, abrir = !q.classList.contains('on')
    $$('.q', $('#faqLista')).forEach((x) => { x.classList.remove('on'); $('button', x).setAttribute('aria-expanded', 'false') })
    q.classList.toggle('on', abrir)
    b.setAttribute('aria-expanded', String(abrir))
  })
}

/* ---------- horario: hoy y abierto/cerrado (hora de Lima) ---------- */
function ahoraLima() {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: CONFIG.zonaHoraria, weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false,
  }).formatToParts(new Date())
  const v = (t) => partes.find((x) => x.type === t).value
  const dias = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
  return { d: dias[v('weekday')], h: (+v('hour') % 24) + +v('minute') / 60 }
}

function horario() {
  const { d, h } = ahoraLima()
  $(`.horas tr[data-d="${d}"]`)?.classList.add('hoy')
  const [abre, cierra] = CONFIG.horario[d]
  const est = $('#estado'), txt = $('span', est)
  if (h >= abre && h < cierra) {
    est.classList.add('abierto-ya')
    txt.textContent = `Abierto ahora · cierra a las ${cierra}:00`
  } else if (h < abre) {
    txt.textContent = `Cerrado · abre hoy a las ${abre}:00`
  } else {
    txt.textContent = `Cerrado · abre mañana a las ${CONFIG.horario[(d + 1) % 7][0]}:00`
  }
}

/* ---------- brillo dorado de "Theo's" al deslizar ---------- */
function brillo() {
  const h1 = $('.hero h1')
  alScroll((y) => h1.style.setProperty('--sc', Math.min(y / 4, 250)))
}

/* ---------- pantalla de carga ---------- */
function splash(listo) {
  const s = $('#splash')
  if (document.documentElement.classList.contains('sin-splash') || reducido) { s.remove(); listo(); return }
  ss.set('theos-visto', '1')
  bloquear(true)
  const num = $('#num'), barra = $('#barra'), t0 = performance.now(), dur = 1700
  const paso = (t) => {
    const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3), n = Math.round(e * 100)
    num.textContent = n
    barra.style.width = n + '%'
    if (p < 1) return requestAnimationFrame(paso)
    setTimeout(() => {
      s.classList.add('sale')
      bloquear(false)
      setTimeout(listo, 250)
      setTimeout(() => s.remove(), 1000)
    }, 180)
  }
  requestAnimationFrame(paso)
}

cinta()
$$('.mosaico').forEach(mosaico)
servicios()
carta()
galeria()
diario()
faq()
horario()
manifiesto()
ritual()
brillo()
registrarParallax()
splash(() => { revelar(); anclaInicial() })

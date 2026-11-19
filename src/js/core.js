import Lenis from 'lenis'
import { CONFIG } from '../data/config.js'

export const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches
export const $ = (s, r = document) => r.querySelector(s)
export const $$ = (s, r = document) => [...r.querySelectorAll(s)]

export const ss = {
  get: (k) => { try { return sessionStorage.getItem(k) } catch { return null } },
  set: (k, v) => { try { sessionStorage.setItem(k, v) } catch { /* sin almacenamiento */ } },
  del: (k) => { try { sessionStorage.removeItem(k) } catch { /* sin almacenamiento */ } },
}

export const waLink = (msg) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || CONFIG.waMensaje)}`

/** Convierte todo [data-wa] en enlace a WhatsApp. data-wa="mensaje" personaliza el texto. */
export function enlazarWa(root = document) {
  $$('[data-wa]', root).forEach((a) => {
    a.href = waLink(a.dataset.wa)
    a.target = '_blank'
    a.rel = 'noopener'
  })
}

/* ---------------- maquetación compartida ---------------- */
const TRAZO = '<svg class="trazo" viewBox="0 0 100 5" preserveAspectRatio="none" aria-hidden="true"><path d="M1 3.6C30 1.2 60 .9 99 2.8" stroke="#c39a5f" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>'
const LOGO = `<a class="logo" href="/" aria-label="THEO'S Barbería, inicio"><span class="t">T</span><span class="txt"><b>THEO'S</b>${TRAZO}<small>Barbería</small></span></a>`
const WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2z"/></svg>'

const LINKS = [
  ['Inicio', '/#inicio'],
  ['Servicios', '/#carta'],
  ['El ritual', '/#ritual'],
  ['Galería', '/#galeria'],
  ['Club', '/#club'],
  ['Diario', '/blog/'],
  ['Visítanos', '/#visitanos'],
]

function maquetar() {
  const vp = CONFIG.vistaPrevia
  const cuerpo = document.body

  const progreso = Object.assign(document.createElement('div'), { className: 'progreso' })

  const nav = document.createElement('nav')
  nav.id = 'nav'
  nav.innerHTML = `${LOGO}
    ${vp.activa ? `<div class="aviso" title="Propuesta de diseño de ${vp.autor} para THEO'S. No es el sitio oficial."><b>Vista previa</b><span class="largo"> · ${vp.autor}</span></div>` : ''}
    <div class="nav-der">
      <button class="pill" id="btnMenu" type="button">Menú</button>
      <a class="pill pill-oro" href="#" data-wa>Reservar turno</a>
    </div>
    <button class="ham" id="ham" type="button" aria-label="Abrir menú" aria-expanded="false"><i></i><i></i><i></i></button>`

  const menu = document.createElement('div')
  menu.className = 'menu'
  menu.id = 'menu'
  menu.innerHTML = `<div class="fondo" id="fondoMenu"></div>
    <div class="panel" role="dialog" aria-label="Menú">
      ${LINKS.map(([t, h], i) => `<a class="l" href="${h}" style="transition-delay:${90 + i * 55}ms"><small>0${i + 1}</small>${t}</a>`).join('')}
      <div class="pie">
        <p>${CONFIG.direccion}, ${CONFIG.zona}<br>${CONFIG.telefonoVisible}</p>
        <a class="pill pill-oro" href="#" data-wa>Reservar por WhatsApp</a>
        <div class="redes"><a href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram</a><a href="${CONFIG.facebook}" target="_blank" rel="noopener">Facebook</a><a href="tel:${CONFIG.telefono}">Llamar</a></div>
      </div>
    </div>`

  const pie = document.createElement('footer')
  pie.className = 'pie'
  pie.innerHTML = `
    <div class="pie-top">
      <div>${LOGO}<p>Barbería de autor en La Planicie. Más de veinte años perfeccionando el oficio, un cliente a la vez.</p></div>
      <div class="pie-cols">
        <div><h5>Visítanos</h5><p>${CONFIG.direccion}<br>${CONFIG.zona}</p><a href="${CONFIG.maps}" target="_blank" rel="noopener">Cómo llegar →</a></div>
        <div><h5>Horario</h5><p>Lun – Sáb · 9:00 – 21:00<br>Dom · 9:00 – 19:00</p></div>
        <div><h5>Contacto</h5><p><a href="tel:${CONFIG.telefono}">${CONFIG.telefonoVisible}</a><br><a href="#" data-wa>WhatsApp</a></p></div>
        <div><h5>Explora</h5><p><a href="/#carta">Servicios</a><br><a href="/blog/">Diario</a><br><a href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram</a> · <a href="${CONFIG.facebook}" target="_blank" rel="noopener">Facebook</a></p></div>
      </div>
    </div>
    <div class="pie-marca" aria-hidden="true">THEO'S</div>
    <div class="pie-base">
      <p>© ${new Date().getFullYear()} THEO'S Barbería · ${CONFIG.direccion}, ${CONFIG.zona}.${vp.activa ? ` Vista previa de diseño preparada por ${vp.autor}. No es el sitio oficial.` : ''} Imágenes referenciales de Unsplash: se reemplazan por fotos reales de la barbería.</p>
      <a href="#" data-arriba>Volver arriba ↑</a>
    </div>`

  const wa = document.createElement('a')
  wa.className = 'wa'
  wa.href = '#'
  wa.setAttribute('data-wa', '')
  wa.setAttribute('aria-label', 'Escribir por WhatsApp')
  wa.innerHTML = WA_SVG

  const telon = document.createElement('div')
  telon.className = 'telon'
  telon.id = 'telon'
  telon.setAttribute('aria-hidden', 'true')
  telon.innerHTML = '<span class="t">T</span>'

  cuerpo.prepend(progreso, nav, menu)
  cuerpo.append(pie, wa, telon)
}

/* ---------------- menú ---------------- */
let lenis = null
const cuerpo = () => document.body

/** Bloquea o libera el scroll de la página (menú, galería, pantalla de carga). */
export function bloquear(si) {
  if (lenis) si ? lenis.stop() : lenis.start()
  else cuerpo().style.overflow = si ? 'hidden' : ''
}

export function menu(abrir) {
  cuerpo().classList.toggle('abierto', abrir)
  $('#ham')?.setAttribute('aria-expanded', String(abrir))
  bloquear(abrir)
}

function iniciarMenu() {
  $('#ham').onclick = () => menu(!cuerpo().classList.contains('abierto'))
  $('#btnMenu').onclick = () => menu(true)
  $('#fondoMenu').onclick = () => menu(false)
  addEventListener('keydown', (e) => { if (e.key === 'Escape') menu(false) })
}

/* ---------------- scroll ---------------- */
const enScroll = []
export const alScroll = (fn) => { enScroll.push(fn); fn(scrollY) }

export function irA(destino, inmediato = false) {
  const el = typeof destino === 'string' ? (destino === '#' || !destino ? null : $(destino)) : destino
  const y = el ? el.getBoundingClientRect().top + scrollY : 0
  // Si bajamos, la barra se oculta: no hace falta dejarle espacio
  const off = !el || el.id === 'inicio' ? 0 : (y > scrollY ? -6 : -78)
  if (lenis) lenis.scrollTo(el || 0, { offset: off, immediate: inmediato, duration: 1.4 })
  else scrollTo({ top: Math.max(0, y + off), behavior: inmediato || reducido ? 'auto' : 'smooth' })
}

function iniciarScroll() {
  if (!reducido) {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
  }

  const nav = $('#nav'), barra = $('.progreso'), wa = $('.wa'), marca = $('.pie-marca')
  let pendiente = false, ultimo = scrollY

  function cuadro() {
    pendiente = false
    const y = scrollY, h = innerHeight
    const max = document.documentElement.scrollHeight - h
    barra.style.transform = `scaleX(${max > 0 ? y / max : 0})`
    if (!cuerpo().classList.contains('abierto')) {
      if (y > 240 && y > ultimo + 4) nav.classList.add('oculta')
      else if (y < ultimo - 4 || y < 240) nav.classList.remove('oculta')
    }
    wa.classList.toggle('ver', y > h * 0.6)
    // la marca del pie emerge al llegar al final
    const r = marca.getBoundingClientRect()
    marca.style.setProperty('--pm', Math.max(0, Math.min(1, (h - r.top) / r.height)).toFixed(3))
    parallax(h)
    enScroll.forEach((fn) => fn(y))
    ultimo = y
  }
  addEventListener('scroll', () => { if (!pendiente) { pendiente = true; requestAnimationFrame(cuadro) } }, { passive: true })
  addEventListener('resize', cuadro)
  cuadro()
}

let fotosPx = []
function parallax(h) {
  if (reducido) return
  for (const el of fotosPx) {
    const r = el.parentElement.getBoundingClientRect()
    if (r.bottom < -100 || r.top > h + 100) continue
    const c = (r.top + r.height / 2 - h / 2) / h
    el.style.setProperty('--py', `${(c * r.height * -0.09).toFixed(1)}px`)
  }
}

/* ---------------- telón entre páginas ---------------- */
const norm = (p) => p.replace(/index\.html$/, '')

function salir(href) {
  if (reducido) { location.href = href; return }
  ss.set('theos-telon', '1')
  menu(false)
  $('#telon').classList.add('entra')
  setTimeout(() => { location.href = href }, 760)
}

function iniciarEnlaces() {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]')
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (a.target === '_blank' || a.hasAttribute('download')) return
    const href = a.getAttribute('href')
    if (href.startsWith('tel:') || href.startsWith('mailto:')) return
    const url = new URL(href, location.href)
    if (url.origin !== location.origin) return
    const misma = norm(url.pathname) === norm(location.pathname) && url.search === location.search
    e.preventDefault()
    if (misma) {
      menu(false)
      irA(url.hash || '#')
      history.replaceState(null, '', url.hash || location.pathname + location.search)
      return
    }
    salir(url.href)
  })
}

function entradaTelon() {
  const raiz = document.documentElement
  const telon = $('#telon')
  addEventListener('pageshow', (e) => { if (e.persisted) { telon.className = 'telon'; ss.del('theos-telon') } })
  if (!raiz.classList.contains('telon-on')) return false
  ss.del('theos-telon')
  telon.classList.add('cubre')
  raiz.classList.remove('telon-on')
  requestAnimationFrame(() => requestAnimationFrame(() => {
    telon.classList.remove('cubre')
    telon.classList.add('sale')
    setTimeout(() => { telon.className = 'telon' }, 1100)
  }))
  return true
}

/* ---------------- apariciones ---------------- */
function contar(el) {
  const fin = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0)
  if (reducido) { el.textContent = fin.toFixed(dec); return }
  const t0 = performance.now(), dur = 1800
  const paso = (t) => {
    const p = Math.min((t - t0) / dur, 1)
    el.textContent = (fin * (1 - Math.pow(1 - p, 4))).toFixed(dec)
    if (p < 1) requestAnimationFrame(paso)
  }
  requestAnimationFrame(paso)
}

export function revelar() {
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return
    e.target.classList.add('visible')
    $$('[data-count]', e.target).forEach(contar)
    io.unobserve(e.target)
  }), { threshold: 0, rootMargin: '0px 0px -12% 0px' })
  $$('.sec, [data-rv]').forEach((s) => io.observe(s))
}

/** Arranca lo común a todas las páginas. Devuelve true si se llegó con el telón. */
export function iniciar() {
  maquetar()
  enlazarWa()
  iniciarMenu()
  iniciarScroll()
  iniciarEnlaces()
  return entradaTelon()
}

export function registrarParallax() {
  fotosPx = $$('.px')
  parallax(innerHeight)
}

/** Si la URL trae #ancla al cargar, la respeta tras montar todo. */
export function anclaInicial() {
  if (location.hash && location.hash.length > 1) setTimeout(() => irA(location.hash, true), 60)
}

// Carta de servicios. Precios en soles (S/). p: null muestra "Consultar".
// IMPORTANTE: precios y duraciones referenciales, confirmar con la barbería.
export const CARTA = [
  {
    id: 'cortes',
    nombre: 'Cortes',
    items: [
      { n: 'Corte clásico', d: 'Tijera y máquina, lavado y peinado con producto de acabado.', t: '45 min', p: 45 },
      { n: 'Fade & moderno', d: 'Skin, low, mid o high fade con transición limpia y perfilado a navaja.', t: '50 min', p: 50 },
      { n: 'Corte a tijera', d: 'Trabajo íntegro a tijera para cabellos con largo, volumen y textura.', t: '60 min', p: 60 },
      { n: 'Corte + barba', d: 'El combo de la casa: corte a elección y perfilado de barba con toalla caliente.', t: '75 min', p: 75, firma: true },
    ],
  },
  {
    id: 'barba',
    nombre: 'Barba',
    items: [
      { n: 'Perfilado de barba', d: 'Contornos definidos a navaja y aceite nutritivo.', t: '25 min', p: 30 },
      { n: 'Diseño de barba', d: 'Asesoría según tu rostro: rebaje, forma, simetría y degradado.', t: '40 min', p: 40 },
      { n: 'Afeitado clásico', d: 'Toalla caliente, espuma a brocha, navaja y bálsamo de cierre.', t: '40 min', p: 45, firma: true },
    ],
  },
  {
    id: 'rituales',
    nombre: 'Rituales',
    items: [
      { n: "Ritual Theo's", d: 'Corte, barba o afeitado, toalla caliente, mascarilla y masaje craneal.', t: '90 min', p: 110, firma: true },
      { n: 'Ritual express', d: 'Corte y toalla caliente para cuando el tiempo apremia.', t: '50 min', p: 60 },
      { n: 'Novio & eventos', d: 'Preparación completa para el día que importa. Previa cita.', t: '120 min', p: null },
    ],
  },
  {
    id: 'ninos',
    nombre: 'Niños',
    items: [
      { n: 'Corte para niños', d: 'Hasta 12 años, con toda la paciencia que necesitan.', t: '30 min', p: 30 },
      { n: 'Primer corte', d: 'Un recuerdo para la familia: guardamos un mechón para llevar a casa.', t: '30 min', p: 35 },
    ],
  },
]

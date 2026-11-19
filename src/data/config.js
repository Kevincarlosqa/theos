// Datos del negocio: todo lo que cambia se edita aquí.
export const CONFIG = {
  nombre: "THEO'S Barbería",
  whatsapp: '51953782741',
  telefono: '+51953782741',
  telefonoVisible: '953 782 741',
  direccion: 'Calle Tahití 184',
  zona: 'La Planicie, La Molina',
  instagram: 'https://www.instagram.com/theos.barberia/',
  facebook: 'https://www.facebook.com/barberiatheos/',
  maps: "https://www.google.com/maps/search/?api=1&query=THEO'S+Barber%C3%ADa+Tahiti+184+La+Molina",
  google: { nota: 4.3, opiniones: 60 },
  waMensaje: "Hola Theo's, quisiera separar un turno.",
  zonaHoraria: 'America/Lima',
  // 0 = domingo … 6 = sábado. [abre, cierra] en horas (24 h)
  horario: { 0: [9, 19], 1: [9, 21], 2: [9, 21], 3: [9, 21], 4: [9, 21], 5: [9, 21], 6: [9, 21] },

  // Aviso de propuesta de diseño (sin caducidad). Pon activa: false para el sitio definitivo.
  vistaPrevia: {
    activa: true,
    autor: 'Andes Intelligence',
  },
}

// Imágenes referenciales (Unsplash). Reemplazar por fotos reales de la barbería.
export const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=78`

export const FOTOS = {
  hero: '1585747860715-2ba37e788b70',
  local: '1773904215697-e6c21fc27ac2',
  clasico: '1599834562135-b6fc90e642ca',
  fade: '1648221122323-572c13a31663',
  disenoBarba: '1630827020718-3433092696e7',
  ninos: '1521490683712-35a1cb235d1c',
  maquina: '1593702275687-f8b402bf1fb5',
  barba: '1517832606299-7ae9b720a186',
  tijera: '1647140655214-e4a2d914971f',
}

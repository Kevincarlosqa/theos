import { FOTOS } from './config.js'

// Artículos del Diario. El más reciente primero.
export const POSTS = [
  {
    slug: 'como-elegir-tu-corte-segun-tu-rostro',
    cat: 'Estilo',
    titulo: 'Cómo elegir tu corte según la forma de tu rostro',
    extracto: 'Ovalado, cuadrado, redondo o alargado: el corte correcto equilibra proporciones y resalta lo mejor de tus facciones.',
    fecha: '2026-11-12',
    lectura: '5 min',
    foto: FOTOS.clasico,
    html: `
<p class="entrada">Un buen corte no se elige mirando una foto de referencia; se elige mirándote a ti. La forma del rostro define qué volúmenes conviene sumar y cuáles conviene quitar, y es lo primero que conversamos en la silla.</p>
<h2>Rostro ovalado</h2>
<p>Es el más versátil: frente y mandíbula proporcionadas, pómulos ligeramente marcados. Admite casi todo, desde un clásico con raya lateral hasta un texturizado corto. La única precaución es no tapar la frente con flequillos pesados que acorten visualmente la cara.</p>
<h2>Rostro cuadrado</h2>
<p>Mandíbula fuerte y frente ancha. Los laterales cortos, como un <em>low</em> o <em>mid fade</em>, mantienen la estructura definida, mientras que algo de altura en la parte superior aporta equilibrio. Evita los cortes redondeados que suavizan demasiado un rasgo que juega a tu favor.</p>
<h2>Rostro redondo</h2>
<p>El objetivo es ganar verticalidad. Un <em>high fade</em> con volumen arriba, un tupé o un peinado hacia atrás alargan la silueta. Una barba perfilada en ángulo sobre la mandíbula también ayuda a dibujar contornos.</p>
<blockquote>El corte correcto no cambia quién eres: ordena lo que ya está ahí.</blockquote>
<h2>Rostro alargado</h2>
<p>Aquí conviene lo contrario: menos altura y más presencia en los laterales. Cortes a tijera con algo de largo a los costados y flequillos ligeros acortan visualmente el rostro.</p>
<h2>¿Y si no lo tengo claro?</h2>
<p>Es lo más común. Por eso cada servicio en Theo's empieza con una consulta: miramos tu tipo de cabello, la dirección del crecimiento, tu rutina y cuánto tiempo quieres dedicarle al peinado cada mañana. El mejor corte es el que puedes mantener.</p>`,
  },
  {
    slug: 'rutina-de-barba-en-cinco-minutos',
    cat: 'Barba',
    titulo: 'Rutina de barba en cinco minutos al día',
    extracto: 'Lavado, aceite, cepillo y un repaso a los contornos. Lo esencial para que la barba luzca cuidada entre visita y visita.',
    fecha: '2026-11-03',
    lectura: '4 min',
    foto: FOTOS.barba,
    html: `
<p class="entrada">Una barba bien llevada no exige horas frente al espejo. Exige constancia. Esta es la rutina que recomendamos a quienes salen de nuestra silla y quieren que el diseño dure.</p>
<h2>1. Lava con productos específicos</h2>
<p>El champú del cabello reseca la piel del rostro. Un limpiador de barba, dos o tres veces por semana, retira impurezas sin eliminar los aceites naturales. Los demás días, basta con agua tibia.</p>
<h2>2. Seca sin frotar</h2>
<p>Presiona la toalla en lugar de restregar. El vello mojado es más frágil y se quiebra con facilidad.</p>
<h2>3. Aceite sobre la piel, no solo sobre el vello</h2>
<p>Tres o cuatro gotas entre las palmas, aplicadas desde la raíz. El aceite hidrata la piel de debajo, que es donde nacen la picazón y la caspa de barba.</p>
<h2>4. Cepilla en la dirección del crecimiento</h2>
<p>Un cepillo de cerdas naturales reparte el aceite, disciplina el vello y le da forma. Si tu barba es larga, termina con un peine de dientes anchos.</p>
<blockquote>Los contornos son el 80 % de una barba que se ve cuidada.</blockquote>
<h2>5. Respeta las líneas, no las inventes</h2>
<p>Entre visitas, repasa solo el vello que sobresale de las líneas que marcamos. Redibujar el contorno en casa es la forma más rápida de perder la simetría. Cada dos o tres semanas, un perfilado profesional mantiene el diseño intacto.</p>`,
  },
  {
    slug: 'cada-cuanto-cortarte-el-cabello',
    cat: 'Cuidado',
    titulo: 'Cada cuánto deberías cortarte el cabello',
    extracto: 'Un fade no envejece igual que un corte a tijera. Te contamos los tiempos ideales para que tu estilo siempre se vea recién hecho.',
    fecha: '2026-10-24',
    lectura: '3 min',
    foto: FOTOS.maquina,
    html: `
<p class="entrada">El cabello crece, en promedio, un centímetro al mes. Parece poco, pero en un corte con laterales al ras, ese centímetro es la diferencia entre un acabado nítido y uno que ya pide visita.</p>
<h2>Fades y cortes muy cortos: cada 2 a 3 semanas</h2>
<p>La gracia de un <em>fade</em> está en su transición. Cuando los laterales crecen, el degradado se pierde. Si te gusta llevarlo impecable, agenda tu turno cada quince días.</p>
<h2>Cortes clásicos: cada 3 a 5 semanas</h2>
<p>Un clásico a máquina y tijera tolera mejor el crecimiento. Con un mes de margen, la forma se mantiene y solo hay que limpiar nuca y contornos.</p>
<h2>Cabello largo o a tijera: cada 6 a 8 semanas</h2>
<p>Aquí no se trata de recuperar la forma sino de sanear puntas y mantener el peso bien repartido.</p>
<blockquote>Reservar tu próximo turno al salir es el truco de quienes siempre lucen recién cortados.</blockquote>
<p>Si llevas barba, súmale un perfilado cada dos o tres semanas. Y si no sabes en qué grupo estás, pregúntanos en tu próxima visita: te diremos la frecuencia exacta para tu corte.</p>`,
  },
  {
    slug: 'la-toalla-caliente-y-el-afeitado-clasico',
    cat: 'Oficio',
    titulo: 'La toalla caliente: por qué el afeitado clásico sigue vigente',
    extracto: 'No es nostalgia. El vapor abre el poro, ablanda el vello y convierte un trámite diario en un momento de pausa.',
    fecha: '2026-10-15',
    lectura: '4 min',
    foto: FOTOS.tijera,
    html: `
<p class="entrada">Hay gestos de barbería que sobreviven a todas las modas. La toalla caliente es uno de ellos, y no por romanticismo: funciona.</p>
<h2>Qué hace realmente</h2>
<p>El calor húmedo ablanda la queratina del vello y dilata los poros. Un vello blando se corta con menos resistencia, y eso significa menos tirones, menos irritación y un afeitado más al ras.</p>
<h2>Espuma a brocha</h2>
<p>La brocha levanta cada vello y lo envuelve en espuma. Además exfolia suavemente la piel, retirando células muertas que suelen provocar vellos encarnados.</p>
<h2>La navaja</h2>
<p>Una hoja nueva para cada cliente, siempre a favor del crecimiento en la primera pasada. La segunda, solo si la piel lo permite. La técnica importa más que la presión.</p>
<blockquote>Cuarenta minutos sin pantallas. Eso también es parte del servicio.</blockquote>
<h2>El cierre</h2>
<p>Toalla fría para cerrar el poro y un bálsamo sin alcohol para calmar. Es la diferencia entre salir con la piel ardiendo y salir como nuevo. Por eso el afeitado clásico es uno de los pilares de nuestro Ritual Theo's.</p>`,
  },
  {
    slug: 'el-primer-corte-de-tu-hijo',
    cat: 'Familia',
    titulo: 'El primer corte de tu hijo: cómo hacerlo una buena experiencia',
    extracto: 'Ruido de máquina, una silla enorme y un desconocido con tijeras. Con algunos trucos, el primer corte se vuelve un recuerdo feliz.',
    fecha: '2026-10-02',
    lectura: '4 min',
    foto: FOTOS.ninos,
    html: `
<p class="entrada">Llevamos más de veinte años viendo pasar primeros cortes. Algunos con lágrimas, la mayoría con risas. La diferencia casi siempre está en la preparación.</p>
<h2>Elige bien la hora</h2>
<p>Evita la hora de la siesta o justo antes de comer. Un niño descansado y con el estómago lleno tolera mucho mejor quedarse quieto quince minutos.</p>
<h2>Cuéntale lo que va a pasar</h2>
<p>Explícale que habrá un sonido parecido a una abejita, que el cabello no duele al cortarse y que puede sentarse en tu regazo si lo prefiere.</p>
<h2>Trae a su compañero</h2>
<p>Un juguete, un cuento o su serie favorita en el teléfono son grandes aliados. Nosotros nos encargamos del resto.</p>
<blockquote>Primero la confianza, después la tijera.</blockquote>
<h2>Guarda el recuerdo</h2>
<p>En el servicio de Primer corte apartamos un mechón para que la familia lo lleve a casa. Es pequeño, pero muchos padres nos dicen años después que lo siguen guardando.</p>`,
  },
  {
    slug: 'low-mid-o-high-fade',
    cat: 'Estilo',
    titulo: 'Low, mid o high fade: cómo pedir exactamente lo que quieres',
    extracto: 'La altura del degradado lo cambia todo. Una guía rápida para llegar a la silla sabiendo qué pedir.',
    fecha: '2026-09-20',
    lectura: '5 min',
    foto: FOTOS.fade,
    html: `
<p class="entrada">"Un fade, por favor" es como pedir "un vino": hay demasiadas variantes. Conocer las alturas te ayuda a explicar lo que tienes en mente y a nosotros a acertar a la primera.</p>
<h2>Low fade</h2>
<p>El degradado empieza justo por encima de la oreja y la nuca. Es discreto, elegante y funciona muy bien en entornos de oficina. Ideal si quieres un cambio sutil.</p>
<h2>Mid fade</h2>
<p>Arranca a media altura, entre la oreja y la sien. Es el equilibrio perfecto: se nota, pero no domina el look. El más pedido en nuestra silla.</p>
<h2>High fade</h2>
<p>El degradado sube hasta la línea de la sien o más arriba. Crea contraste fuerte con la parte superior y alarga el rostro. Tiene carácter, y pide mantenimiento frecuente.</p>
<blockquote>Lo importante no es la altura, sino que la transición sea invisible.</blockquote>
<h2>Skin, taper y burst</h2>
<p>El <em>skin fade</em> llega hasta la piel; el <em>taper</em> solo degrada patillas y nuca; el <em>burst</em> rodea la oreja en semicírculo. Si tienes una foto, tráela: la usamos como punto de partida y la adaptamos a tu tipo de cabello y a la forma de tu cabeza.</p>`,
  },
]

export const fechaLarga = (iso) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' })

export const urlPost = (p) => `/blog/articulo.html?p=${p.slug}`

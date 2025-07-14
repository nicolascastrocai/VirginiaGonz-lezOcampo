import React, { useState } from 'react';

// Importa las imágenes locales
import autoestimaImg from '../assets/ChatGPT Image 9 jun 2025, 09_13_33 p.m..png';
import frustracionImg from '../assets/ChatGPT Image 17 jun 2025, 10_58_18 p.m. (1).png'; // Imagen de frustración actualizada
import ansiedadImg from '../assets/WhatsApp Image 2025-06-09 at 12.27.31 (1).jpeg';
import decisionesImg from '../assets/ChatGPT Image 9 jun 2025, 10_14_39 p.m..png';
import estresImg from '../assets/ChatGPT Image 17 jun 2025, 10_58_23 p.m..png';
import depresionImg from '../assets/ChatGPT Image 9 jun 2025, 10_20_02 p.m..png';
import tagImg from '../assets/ChatGPT Image 9 jun 2025, 10_20_34 p.m..png';
import tocImg from '../assets/ChatGPT Image 9 jun 2025, 10_21_36 p.m..png';

// Link de WhatsApp
const whatsappLink = 'https://wa.me/5493416124207';

const posts = [
  {
    img: autoestimaImg,
    title: "AUTOESTIMA",
    short: "La forma en que te percibís influye en cada aspecto de tu vida: en tus vínculos, decisiones y bienestar emocional. Cuando la autoestima está dañada, aparecen la inseguridad, la autoexigencia excesiva y la dificultad para reconocer tu propio valor.",
    full: `La forma en que te percibís influye en cada aspecto de tu vida: en tus vínculos, decisiones y bienestar emocional. Cuando la autoestima está dañada, aparecen la inseguridad, la autoexigencia excesiva y la dificultad para reconocer tu propio valor.
En las sesiones trabajamos para reconstruir esa relación con vos misma/o, identificar las creencias que te limitan y acompañarte a desarrollar una mirada más compasiva, segura y auténtica.
Si sentís que es momento de empezar a mirarte con más amabilidad y confianza, este puede ser un buen espacio para comenzar ese camino. 
📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escríbeme al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: frustracionImg,
    title: "FRUSTRACIÓN",
    short: "La frustración es una emoción natural, pero cuando no sabemos cómo manejarla, puede generar malestar, bloquear nuestras acciones y afectar nuestras relaciones.",
    full: `La frustración es una emoción natural, pero cuando no sabemos cómo manejarla, puede generar malestar, bloquear nuestras acciones y afectar nuestras relaciones.
En las sesiones trabajamos en identificar las creencias que intensifican esa sensación de malestar, desarrollar estrategias para gestionar mejor las expectativas y fortalecer recursos personales para afrontar los desafíos de manera más flexible.
Si sentís que la frustración está afectando tú día a día, este espacio puede ayudarte a comprenderla, regularla y transformarla en una oportunidad de crecimiento.
📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escríbeme al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: ansiedadImg,
    title: "ANSIEDAD",
    short: "La ansiedad puede aparecer de muchas formas: pensamientos repetitivos, tensión corporal, insomnio, miedo al futuro o necesidad de tener todo bajo control.",
    full: `La ansiedad puede aparecer de muchas formas: pensamientos repetitivos, tensión corporal, insomnio, miedo al futuro o necesidad de tener todo bajo control. Aunque es una emoción natural, cuando se vuelve intensa o constante, interfiere con el bienestar y la vida cotidiana.
En las sesiones trabajamos para entender qué la está generando, desarrollar estrategias para manejarla y ayudarte a recuperar la calma, la claridad y el equilibrio emocional.
Si sentís que la ansiedad está afectando tú día a día, este espacio puede acompañarte a volver a vos y vivir con más tranquilidad.
📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escríbeme al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: decisionesImg,
    title: "TOMA DE DECISIONES",
    short: "Tomar decisiones puede generar ansiedad, miedo a equivocarse o la sensación de estar perdiendo algo con cada elección.",
    full: `Tomar decisiones puede generar ansiedad, miedo a equivocarse o la sensación de estar perdiendo algo con cada elección. A veces, por temor o inseguridad, terminamos postergando o dejando que otros decidan por nosotras/os.
En las sesiones trabajamos para identificar los bloqueos, ordenar las ideas y conectar con tus valores y necesidades. El objetivo no es decidir perfecto, sino poder elegir con más claridad, confianza y coherencia con vos misma/o.
Si sentís que estás en un momento de decisiones importantes, este espacio puede ayudarte a tomar las riendas desde un lugar más consciente y seguro.
📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escríbeme al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: estresImg,
    title: "ESTRÉS",
    short: "El estrés sostenido puede afectar tu salud física y emocional: dolores corporales, insomnio, irritabilidad, ansiedad o sensación de estar al límite.",
    full: `El estrés sostenido puede afectar tu salud física y emocional: dolores corporales, insomnio, irritabilidad, ansiedad o sensación de estar al límite. Aunque es una respuesta natural ante ciertas demandas, cuando se vuelve constante deja de ser útil y comienza a desgastarte.
En las sesiones trabajamos para identificar las fuentes de estrés, repensar las exigencias internas y externas, y desarrollar herramientas para que puedas recuperar el equilibrio y priorizar tu bienestar.
Si sentís que estás sobrepasada/o, este espacio puede ayudarte a ponerle un freno al desgaste y reconectar con vos.
📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escríbeme al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: depresionImg,
    title: "DEPRESIÓN",
    short: "La depresión no siempre se ve como “estar triste”: a veces se manifiesta como apatía, irritabilidad, aislamiento, dificultades para concentrarte o una sensación persistente de no encontrarle sentido a nada.",
    full: `La depresión no siempre se ve como “estar triste”: a veces se manifiesta como apatía, irritabilidad, aislamiento, dificultades para concentrarte o una sensación persistente de no encontrarle sentido a nada.
En las sesiones trabajamos para comprender lo que estás atravesando, aliviar el sufrimiento y acompañarte a reconstruir el vínculo con vos misma/o, tus emociones y tu vida cotidiana.
Si sentís que estás apagada/o o que no podés sola/o con lo que te pasa, no estás sola/o. Este espacio puede ser un primer paso hacia el desahogo y el acompañamiento que necesitás.
📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escríbeme al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: tagImg,
    title: "Trastorno de Ansiedad Generalizada (TAG)",
    short: "El Trastorno de Ansiedad Generalizada se caracteriza por una preocupación excesiva y persistente sobre distintas áreas de la vida.",
    full: `El Trastorno de Ansiedad Generalizada se caracteriza por una preocupación excesiva y persistente sobre distintas áreas de la vida: salud, trabajo, vínculos, economía, el futuro... Aun cuando las cosas parecen estar bien, la mente sigue anticipando escenarios negativos.
En las sesiones trabajamos para identificar los patrones de pensamiento que sostienen la preocupación constante, incorporar herramientas de autorregulación emocional y fortalecer tu capacidad para vivir con más calma, flexibilidad y presencia.
Si sentís que tu ansiedad no se detiene y está interfiriendo en tu bienestar diario, este espacio puede ayudarte a recuperar la tranquilidad que tanto necesitás.
📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escríbeme al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: tocImg,
    title: "Trastorno Obsesivo Compulsivo (TOC)",
    short: "El TOC se manifiesta a través de obsesiones y compulsiones.",
    full: `El TOC se manifiesta a través de obsesiones (pensamientos, imágenes o impulsos intrusivos, repetitivos y angustiantes) y compulsiones (conductas o actos mentales que se realizan para aliviar esa ansiedad). Aunque muchas personas saben que esos pensamientos no son racionales, la angustia que generan es muy real.
En las sesiones trabajamos para entender cómo funciona el ciclo obsesivo-compulsivo, reducir la interferencia de estas conductas en tu vida cotidiana y desarrollar recursos para enfrentar la ansiedad sin necesidad de responder a la compulsión.
Si sentís que tus pensamientos y rituales están interfiriendo con tu vida, este espacio puede ayudarte a retomar el control y recuperar tu bienestar.
📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escríbeme al Whatsapp</a>. Estoy para acompañarte.`
  }
];

const Specialties = () => {
  const [modal, setModal] = useState({ open: false, post: null });

  const openModal = (post) => setModal({ open: true, post });
  const closeModal = () => setModal({ open: false, post: null });

  // Renderiza el texto con el link de WhatsApp del mismo color que el texto
  const renderFullText = (text) => (
    <span
      className="text-gray-700 dark:text-gray-300 mb-6 text-center whitespace-pre-line"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );

  return (
    <section id="specialties" className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Especialidades</h1>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, idx) => (
            <div key={idx}>
              <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={post.img} alt={post.title} />
              <div className="mt-8">
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  {post.title}
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {post.short}
                </p>
                <div className="flex items-center justify-start mt-4">
                  <button
                    className="inline-block text-blue-500 underline hover:text-blue-400 cursor-pointer"
                    onClick={() => openModal(post)}
                  >
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modal.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Fondo desenfocado */}
            <div
              className="absolute inset-0 w-full h-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md"
              onClick={closeModal}
            ></div>
            {/* Modal principal */}
            <div
              className="relative bg-white dark:bg-gray-900 rounded-lg p-8 w-full mx-4 flex flex-col items-center"
              style={{
                height: '80vh',
                maxHeight: '900px',
                minWidth: '70vw',
                maxWidth: '1000px',
                zIndex: 60,
                overflow: 'hidden'
              }}
            >
              <div className="w-full flex flex-col items-center overflow-y-auto" style={{ maxHeight: '100%' }}>
                <img
                  src={modal.post.img}
                  alt={modal.post.title}
                  className="object-cover object-center rounded-lg mb-6"
                  style={{
                    width: '220px',
                    height: '220px',
                    maxWidth: '70vw',
                    maxHeight: '220px',
                    aspectRatio: '1 / 1'
                  }}
                />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">{modal.post.title}</h2>
                {renderFullText(modal.post.full)}
              </div>
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mt-2 cursor-pointer"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specialties;
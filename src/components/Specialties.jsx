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
    short: "¿Sentís que nada de lo que hacés alcanza, que sos muy crítica/o con vos misma/o o que necesitás la aprobación de los demás para sentirte bien?",
    full: `La forma en que te mirás influye en cada aspecto de tu vida: tus decisiones, tus vínculos y tu bienestar. Cuando la autoestima está debilitada, pueden aparecer la inseguridad, la autoexigencia y la dificultad para reconocer tu propio valor.

Este espacio puede ayudarte a reconstruir ese vínculo con vos misma/o, reconocer tus fortalezas y desarrollar una mirada más amable y auténtica hacia quien sos.

📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escribime al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: frustracionImg,
    title: "FRUSTRACIÓN",
    short: "¿Te cuesta aceptar cuando algo no sale como esperabas? ¿Reaccionás con enojo, ansiedad o desánimo ante los imprevistos?",
    full: `La frustración es una emoción natural, pero cuando se vuelve constante o intensa, puede generar malestar y afectar tu día a día.

Tomarte un tiempo para explorar qué pensamientos y exigencias la alimentan puede ayudarte a afrontarla con más flexibilidad y calma, dándote espacio para crecer incluso en lo inesperado.

📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escribime al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: ansiedadImg,
    title: "ANSIEDAD",
    short: "¿Sentís que tu mente no se detiene, que vivís en alerta o que te cuesta relajarte aunque todo parezca estar bien?",
    full: `La ansiedad puede expresarse de muchas formas: pensamientos constantes, tensión, insomnio o la necesidad de tener todo bajo control. Aunque es una emoción natural, cuando se vuelve intensa, interfiere con tu bienestar.

Un espacio de acompañamiento puede ayudarte a comprender qué la provoca y a recuperar tu equilibrio, tu calma y tu claridad.

📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escribime al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: decisionesImg,
    title: "TOMA DE DECISIONES",
    short: "¿Sentís que te bloqueás al tener que elegir, que dudás de vos misma/o o que te cuesta confiar en lo que decidís?",
    full: `Tomar decisiones puede despertar ansiedad o miedo a equivocarse. A veces, esa inseguridad nos lleva a postergar elecciones importantes o a dejarlas en manos de otros.

Explorar tus dudas, tus necesidades y tus valores puede ayudarte a elegir desde un lugar más claro y coherente con vos misma/o.

📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escribime al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: estresImg,
    title: "ESTRÉS",
    short: "¿Sentís que vivís corriendo, que no llegás a todo o que tu cuerpo te está pidiendo una pausa y no sabés cómo dártela?",
    full: `El estrés sostenido puede afectar tu salud física y emocional. Aunque suele aparecer en contextos de mucha demanda, cuando se vuelve habitual, comienza a desgastarte.

Detenerte, identificar qué lo genera y empezar a cuidar tus límites también es una forma de priorizarte y de reconectar con vos.

📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escribime al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: depresionImg,
    title: "DEPRESIÓN",
    short: "¿Sentís que todo te cuesta, que perdiste el interés por lo que antes te gustaba o que la tristeza o el vacío están presentes a diario?",
    full: `La depresión no siempre se ve como una gran tristeza. A veces se manifiesta en el desgano, el aislamiento, la irritabilidad o en una sensación de desconexión con la vida.

Poder darle un espacio a lo que sentís y empezar a transitarlo con acompañamiento puede ayudarte a encontrar alivio y reconstruir lo que hoy parece roto.

📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escribime al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: tagImg,
    title: "Trastorno de Ansiedad Generalizada (TAG)",
    short: "¿Te preocupás constantemente, incluso cuando no hay un motivo claro? ¿Sentís que tu mente no puede parar?",
    full: `El TAG se caracteriza por una preocupación constante en distintas áreas de la vida. A veces, aun cuando todo parece estar bien, la mente anticipa lo peor.

Encontrar herramientas que te ayuden a frenar ese ritmo mental y recuperar la calma puede ser un paso importante para sentirte más en paz.

📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escribime al Whatsapp</a>. Estoy para acompañarte.`
  },
  {
    img: tocImg,
    title: "Trastorno Obsesivo Compulsivo (TOC)",
    short: "¿Tenés pensamientos que aparecen sin que los elijas o sentís que necesitás hacer ciertas acciones para sentirte tranquila/o?",
    full: `El TOC puede expresarse a través de pensamientos repetitivos y acciones que generan alivio momentáneo pero también mucho desgaste. Aunque muchas veces se entiende que no son lógicos, la angustia es real.

Poder entender cómo funciona este ciclo y encontrar formas nuevas de relacionarte con lo que te pasa puede ayudarte a sentirte más libre y en control.

📥 Si te sentís identificada/o, <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" style="color:inherit;font-weight:normal;text-decoration:underline;">escribime al Whatsapp</a>. Estoy para acompañarte.`
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
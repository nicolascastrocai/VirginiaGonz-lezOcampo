import React, { useState } from 'react';
import logo from '../assets/WhatsApp Image 2025-06-30 at 11.22.12.jpeg';

const aboutMeText = (
  <>
    <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-gray-800 mb-4 text-center">Sobre mí</h2>
    <p className="text-base md:text-lg font-serif text-gray-700 mb-3">
      Soy <span className="font-bold">Virginia González Ocampo</span>, Psicóloga egresada de la Universidad Abierta Interamericana.
    </p>
    <p className="text-base md:text-lg font-sans text-gray-700 mb-3">
      Realicé una Carrera de Especialización en Terapia Cognitiva Integrativa dictada por la Institución Altué Terapia Cognitiva, representante en Rosario de la prestigiosa Fundación Aigle de Buenos Aires.
    </p>
    <p className="text-base md:text-lg font-serif text-gray-700 mb-3">
      Mi formación, tanto de grado como de posgrado, ha sido complementada con cursos de perfeccionamiento y actualización realizados en Argentina y España. Esta formación continua ha enriquecido mi perspectiva clínica y ha ampliado significativamente los recursos terapéuticos que utilizo en mi práctica.
    </p>
    <p className="text-base md:text-lg font-sans text-gray-700 mb-3">
      Con más de <span className="font-bold">15 años de experiencia clínica</span>, he tenido la oportunidad de acompañar a adolescentes, jóvenes y adultos que enfrentan situaciones de ansiedad, depresión, baja autoestima, frustración, dificultades para tomar decisiones y trastornos obsesivos.
    </p>
    <p className="text-base md:text-lg font-serif text-gray-700 mb-3">
      Mi compromiso es ofrecerte un espacio seguro, cálido y libre de juicios, donde podamos trabajar juntos en el conocimiento personal, el bienestar emocional y el desarrollo de recursos para afrontar los desafíos de la vida.
    </p>
    <p className="text-base md:text-lg font-sans text-gray-700 mb-1">
      Si sentís que algo de lo que estás viviendo te está costando sostener sola o solo, podés contar conmigo.
      <br />
      <span className="font-bold">Estoy aquí para acompañarte.</span>
    </p>
  </>
);

const Presentation = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div id="presentation" className="min-h-screen w-full bg-white flex flex-col justify-center items-center px-4 pb-6 mb-10">
      <div className="w-full max-w-5xl text-center">
        <img
          src={logo}
          alt="Logo Virginia"
          className="mx-auto mb-10 mt-10 w-59 h-59 object-cover "
        />
        <h1 className="font-sans text-3xl md:text-4xl font-bold text-gray-800 mb-10 leading-tight">
          Bienvenid@ a tu espacio de bienestar.
        </h1>
        <p className="font-serif text-xl md:text-2xl text-gray-800 mb-4">
          Soy Virginia González Ocampo, Psicóloga especializada en Terapia Cognitiva Integrativa.
        </p>
        <p className="font-sans text-base md:text-lg text-gray-700 mb-4">
          Mi enfoque se basa en comprender tus necesidades para ofrecerte un acompañamiento personalizado, con el objetivo de ayudarte a alcanzar tus metas de bienestar y crecimiento personal.
        </p>
        <p className="font-sans text-base md:text-lg text-gray-700 mb-4">
          Si sentís que la ansiedad, la frustración, la tristeza, los pensamientos obsesivos u otras dificultades están afectando tú día a día, quiero que sepas que este es un espacio pensado para vos. Aquí vas a encontrar contención, herramientas prácticas y un acompañamiento cercano para transitar esos momentos y recuperar tu equilibrio emocional.
        </p>
        <p className="font-sans text-base md:text-lg text-gray-700">
          Te invito a recorrer mi página web y a dar el primer paso hacia tu bienestar.<br />
          Estoy aquí para acompañarte.
        </p>
        <button
          className="mt-8 px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold font-sans shadow transition cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={() => setModalOpen(true)}
        >
          Saber más sobre mí
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fondo desenfocado */}
          <div
            className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          ></div>
          {/* Modal principal */}
          <div
            className="relative bg-white rounded-lg p-8 w-full mx-4 flex flex-col items-center shadow-lg"
            style={{
              maxWidth: '850px',
              zIndex: 60,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          >
            <div className="w-full flex flex-col items-center overflow-y-auto" style={{ maxHeight: '80vh' }}>
              {aboutMeText}
            </div>
            <button
              className="mt-6 px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold font-sans transition cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => setModalOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentation;
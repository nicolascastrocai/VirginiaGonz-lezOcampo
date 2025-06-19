import React from 'react';

const Online = () => {
  return (
    <section id="online" className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center">
      <div className="container max-w-7xl px-4 py-4 mx-auto flex flex-col justify-center">
        {/* Título principal */}
        <h1 className="mt-8 text-xl font-semibold text-gray-900 capitalize lg:text-2xl dark:text-white text-center break-words">
          <span className="block font-extrabold text-blue-800 mb-1">TERAPIA PSICOLÓGICA 100% ONLINE</span>
          <span className="block font-semibold text-blue-700">UN ESPACIO CREADO PARA ACOMPAÑARTE DE MANERA PRÁCTICA Y CERCANA</span>
        </h1>

        {/* Texto introductorio */}
        <p className="mt-4 text-gray-700 xl:mt-6 dark:text-gray-300 text-center max-w-5xl mx-auto text-base break-words">
          Mi terapia se realiza en modalidad online, una modalidad que te permite acceder a un acompañamiento profesional estés donde estés. La terapia online es tan eficaz como la terapia presencial y, además, te ofrece la comodidad, flexibilidad y privacidad necesaria para que puedas trabajar en tu bienestar desde un espacio seguro.
        </p>

        {/* Beneficios y Cómo funcionan */}
        <div className="grid grid-cols-1 gap-4 mt-6 xl:mt-8 xl:gap-8 md:grid-cols-2">
          {/* Beneficios */}
          <div className="p-5 md:p-6 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl bg-white dark:bg-gray-800 overflow-auto mb-6 md:mb-0">
            <h2 className="text-lg md:text-2xl font-bold text-blue-700 mb-3 text-center break-words">BENEFICIOS DE LA TERAPIA ONLINE</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-base md:text-lg break-words">
              <li>
                <span className="font-semibold">Comodidad y confidencialidad:</span> Hacé tus sesiones desde casa o desde donde te sientas en confianza y tranquilidad.
              </li>
              <li>
                <span className="font-semibold">Accesibilidad:</span> Podés conectarte desde cualquier lugar, ideal si tenés poco tiempo o vivís lejos.
              </li>
              <li>
                <span className="font-semibold">Flexibilidad:</span> La terapia se adapta a tus horarios, facilitando integrarla a tu rutina.
              </li>
              <li>
                <span className="font-semibold">Eficacia:</span> Las sesiones online ofrecen las mismas herramientas y resultados que la terapia presencial.
              </li>
            </ul>
          </div>

          {/* Cómo funcionan */}
          <div className="p-5 md:p-6 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl bg-white dark:bg-gray-800 overflow-auto mb-6 md:mb-0">
            <h2 className="text-lg md:text-2xl font-bold text-blue-700 mb-3 text-center break-words">¿CÓMO FUNCIONAN LAS SESIONES ONLINE?</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-base md:text-lg break-words">
              <li>Se realizan por videollamada, en una plataforma segura y fácil de usar.</li>
              <li>Cada encuentro dura unos 50 minutos.</li>
              <li>Están dirigidas a mayores de 18 años que deseen trabajar en su bienestar emocional.</li>
              <li>Solo necesitás conexión a internet, un lugar tranquilo y ganas de enfocarte en vos.</li>
              <li>El día de la sesión recibirás un enlace por mail o por WhatsApp para ingresar directamente.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Online;
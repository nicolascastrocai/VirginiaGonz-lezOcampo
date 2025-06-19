import React from 'react';
import whatsappLogo from '../assets/whatsapp.png';
import gmailLogo from '../assets/gmail.png';

const Contact = () => (
  <section id="contact" className="bg-gray-100 dark:bg-gray-900 min-h-screen w-full flex items-center py-0">
    <div className="container mx-auto px-4 py-10 md:py-16 flex-1 flex flex-col justify-center">
      <div className="text-center">
        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Reservá tu turno</h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Podés contactarme para reservar tu turno o realizar cualquier consulta. ¡Estoy para acompañarte!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <span className="p-3 rounded-full bg-blue-100/80 dark:bg-gray-700 flex items-center justify-center mb-2">
            <img src={gmailLogo} alt="Gmail" className="w-8 h-8" />
          </span>
          <h2 className="mt-2 text-lg font-medium text-gray-800 dark:text-white">Gmail</h2>
          <p className="mt-1 text-gray-500 dark:text-gray-400">Consultas y reservas por correo.</p>
          <p className="mt-1 text-blue-500 dark:text-blue-400">
            <a href="mailto:vlauragocampo@gmail.com" target="_blank" rel="noopener noreferrer">
              vlauragocampo@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-700 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </span>
          <h2 className="mt-2 text-lg font-medium text-gray-800 dark:text-white">Consultorio</h2>
          <p className="mt-1 text-gray-500 dark:text-gray-400">Atención 100% online.</p>
          <p className="mt-1 text-blue-500 dark:text-blue-400">Rosario, Fisherton</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <span className="p-3 rounded-full bg-green-100/80 dark:bg-gray-700 flex items-center justify-center mb-2">
            <img src={whatsappLogo} alt="WhatsApp" className="w-8 h-8" />
          </span>
          <h2 className="mt-2 text-lg font-medium text-gray-800 dark:text-white">WhatsApp</h2>
          <p className="mt-1 text-gray-500 dark:text-gray-400">Reservá tu turno directo por WhatsApp.</p>
          <p className="mt-1 text-green-600 dark:text-green-400 font-semibold">
            <a
              href="https://wa.me/5493416124207"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservá tu turno
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
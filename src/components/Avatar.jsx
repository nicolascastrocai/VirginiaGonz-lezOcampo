import React from 'react';
import avatarImg from '../assets/WhatsApp Image 2025-06-06 at 10.41.14.jpeg';
import wallpaper from '../assets/Stúdio de maquiagem.jpeg';

const Avatar = () => {
  return (
    <div id="avatar" className="relative min-h-screen max-h-screen w-full max-w-full flex items-center justify-center overflow-hidden">
      {/* Fondo desenfocado */}
      <img
        src={wallpaper}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
        style={{ zIndex: 0 }}
      />
      {/* Contenido principal centrado y más ancho */}
      <div className="relative z-10 flex flex-col items-center bg-transparent p-8 mt-4 w-full max-w-6xl justify-center">
        <img
          src={avatarImg}
          alt="avatar"
          className="inline-block w-56 h-56 aspect-square object-cover object-[center_10%] rounded-full border-4 border-white bg-gray-200 mb-4"
        />
        <div className="flex flex-col items-center text-center">
          <p className="font-mono antialiased text-4xl md:text-5xl font-bold text-white mb-1 tracking-wide">
          <span className="font-serif font-normal text-4xl md:text-5xl text-white">Virginia González Ocampo</span>
          </p>
          <span className="font-serif antialiased text-2xl font-semibold text-white mb-2 tracking-wide">
            Lic. en Psicología 
          </span>
          <span className="font-sans antialiased text-xl text-white flex items-center gap-2">
            <span>Rosario</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
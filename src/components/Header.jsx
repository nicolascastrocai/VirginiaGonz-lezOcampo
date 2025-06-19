import React, { useState, useEffect } from 'react';
import whatsappLogo from '../assets/whatsapp (1).png';
import gmailLogo from '../assets/gmail (1).png';

const sections = [
  { id: 'avatar', label: 'Inicio' },
  { id: 'presentation', label: 'Sobre Mi' },
  { id: 'online', label: 'Terapia Online' },
  { id: 'specialties', label: 'Especialidades' },
  { id: 'contact', label: 'Contacto' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('avatar');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Ajusta el offset según tu header
      let current = 'avatar';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded-b dark:bg-gray-800 shadow">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* Solo visible en pantallas md o mayores */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://wa.me/5493416124207"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-transform duration-200 hover:scale-110 cursor-pointer"
          >
            <img src={whatsappLogo} alt="WhatsApp" className="w-7 h-7" />
          </a>
          <a
            href="mailto:vlauragocampo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
            className="transition-transform duration-200 hover:scale-110 cursor-pointer"
          >
            <img src={gmailLogo} alt="Gmail" className="w-7 h-7" />
          </a>
        </div>
        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`w-full md:block md:w-auto ${menuOpen ? '' : 'hidden'}`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleClick(section.id)}
                  className={`block py-2 pr-4 pl-3 rounded md:p-0 cursor-pointer transition-transform duration-200 hover:scale-105 ${
                    active === section.id
                      ? 'text-blue-700 border-b-2 border-blue-700 dark:text-white'
                      : 'text-gray-700 dark:text-gray-400 hover:text-blue-700 dark:hover:text-white'
                  }`}
                  style={{ background: 'none', border: 'none' }}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
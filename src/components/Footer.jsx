import React from 'react';
import linkedinLogo from '../assets/linkedin.png';

const Footer = () => (
  <footer className="bg-black w-full py-6">
    <div
      className="container flex flex-col md:flex-row items-center justify-between p-4 mx-auto space-y-4 md:space-y-0"
    >
      <span className="text-2xl font-extrabold tracking-widest text-white">NICOLASC</span>

      <p className="text-sm text-white text-center m-0">
        © {new Date().getFullYear()} | Diseñado por Nicolas Castro
      </p>

      <div className="flex items-center">
        <a
          href="https://www.linkedin.com/in/nc2000/"
          className="mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>
      <style>
        {`
          @media (max-width: 767px) {
            .container {
              gap: 15px !important;
            }
          }
        `}
      </style>
    </div>
  </footer>
);

export default Footer;
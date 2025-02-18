'use client';

import React from 'react';

interface HeaderProps {
  refs: {
    contactRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    homeRef: React.RefObject<HTMLElement>;
  };
}

export const Header: React.FC<HeaderProps> = ({ refs }) => {
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/10 rounded-full bg-white/10 backdrop-blur text-white">
        <button
          onClick={() => scrollToSection(refs.homeRef)}
          className="nav-item px-4 py-1 rounded-full hover:bg-white/20 transition"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection(refs.projectsRef)}
          className="nav-item px-4 py-1 rounded-full hover:bg-white/20 transition"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection(refs.aboutRef)}
          className="nav-item px-4 py-1 rounded-full hover:bg-white/20 transition"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection(refs.contactRef)}
          className="nav-item px-4 py-1 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition"
        >
          Contact
        </button>
      </nav>
    </div>
  );
};

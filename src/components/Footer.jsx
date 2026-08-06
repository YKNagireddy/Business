import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0A1420] border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-white text-base">Santhosh Maryala</p>

        <div className="flex gap-6 text-xs text-white/50 font-body uppercase tracking-wide">
          <a href="#home" className="hover:text-gold transition">Home</a>
          <a href="#members" className="hover:text-gold transition">Members</a>
          <a href="#contact" className="hover:text-gold transition">Contact</a>
        </div>

        <p className="text-xs text-white/40 font-body">
          © {year} Santhosh Maryala. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

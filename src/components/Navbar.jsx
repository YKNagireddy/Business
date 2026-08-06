import React, { useEffect, useState } from 'react';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'companies', label: 'Companies' },
  { id: 'stats', label: 'Network' },
  { id: 'members', label: 'BNI Members' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center h-16 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => goTo('home')}
          className="font-display text-lg text-white tracking-wide"
        >
          Santhosh Maryala
        </button>

        <div className="hidden md:flex gap-1 ml-auto">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className={`px-3 py-2 text-xs font-body font-semibold tracking-wide uppercase rounded-full transition ${
                active === link.id
                  ? 'text-ink bg-gold'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden ml-auto text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-ink/95 backdrop-blur transition-all duration-300 ${
          menuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-2 px-6">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className={`text-left px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide ${
                active === link.id ? 'bg-gold text-ink' : 'text-white/80'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

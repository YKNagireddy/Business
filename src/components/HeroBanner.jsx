import React from 'react';

const NODES = [
  { x: 60, y: 80 }, { x: 220, y: 40 }, { x: 380, y: 120 }, { x: 520, y: 60 },
  { x: 650, y: 160 }, { x: 140, y: 220 }, { x: 460, y: 240 }, { x: 720, y: 90 },
  { x: 300, y: 300 }, { x: 600, y: 320 },
];
const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [2, 6], [4, 7], [5, 8], [6, 9], [3, 6],
];

const HeroBanner = ({ portraitSrc }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
    >
      {/* Constellation background — signature element */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid slice"
      >
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            className="constellation-line"
            x1={NODES[a].x} y1={NODES[a].y}
            x2={NODES[b].x} y2={NODES[b].y}
            stroke="#C8973B"
            strokeWidth="1"
          />
        ))}
        {NODES.map((n, i) => (
          <circle
            key={i}
            className="constellation-node"
            cx={n.x} cy={n.y} r={i % 3 === 0 ? 4 : 2.5}
            fill="#E3C081"
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="eyebrow text-gold mb-4">Founder · Entrepreneur · Connector</p>
          <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
            Building ventures that
            <span className="text-gold"> connect</span> people, capital and ideas.
          </h1>
          <p className="font-body text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-8">
            Santhosh Maryala is a serial entrepreneur driving innovation, employment
            generation and national economic progress — across IT, data management,
            and a growing network of businesses.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('members');
                if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-gold text-ink font-semibold text-sm hover:bg-goldsoft transition"
            >
              Explore the Network
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-gold/30" />
            <img
              src={portraitSrc}
              alt="Santhosh Maryala"
              className="relative w-full max-w-sm rounded-[1.75rem] shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs eyebrow">
        Scroll
      </div>
    </section>
  );
};

export default HeroBanner;

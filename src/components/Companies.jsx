import React from 'react';

const Companies = ({ companies }) => {
  // companies: [{ name, logo, tagline }]
  return (
    <section id="companies" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow text-teal mb-3">Companies</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-12 max-w-xl">
          Ventures under his leadership
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {companies.map((c, i) => (
            <div
              key={i}
              className="group relative border border-paper-line rounded-2xl p-8 flex flex-col items-center text-center bg-paper hover:shadow-xl transition"
            >
              <div className="h-16 mb-6 flex items-center justify-center">
                <img src={c.logo} alt={c.name} className="h-full object-contain" />
              </div>
              <h3 className="font-display text-xl text-ink mb-2">{c.name}</h3>
              <p className="text-sm text-slate-soft font-body">{c.tagline}</p>
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;

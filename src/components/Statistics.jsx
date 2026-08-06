import React from 'react';

// NOTE: placeholder figures — replace with real numbers.
const STATS = [
  { value: '10+', label: 'Years in business' },
  { value: '2', label: 'Companies founded' },
  { value: '45+', label: 'BNI network members' },
  { value: '30+', label: 'Industries represented' },
];

const Statistics = () => {
  return (
    <section id="stats" className="relative bg-ink py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <p className="eyebrow text-gold mb-3">By the numbers</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-white mb-14 max-w-xl">
          The network, quantified
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="border-t border-white/15 pt-5">
              <p className="font-mono text-4xl md:text-5xl text-gold mb-2">{s.value}</p>
              <p className="text-sm text-white/60 font-body">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

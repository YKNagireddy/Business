import React from 'react';

// NOTE: placeholder milestones — swap in Santhosh's real achievements/awards.
const ACHIEVEMENTS = [
  {
    icon: '◆',
    title: 'Multi-sector founder',
    desc: 'Built and scaled ventures spanning IT services and data management from the ground up.',
  },
  {
    icon: '◆',
    title: 'Employment generation',
    desc: 'Created sustainable jobs across the businesses he has founded and advised.',
  },
  {
    icon: '◆',
    title: 'Cross-disciplinary leadership',
    desc: 'Applies behavioral psychology alongside financial strategy to team and client decisions.',
  },
  {
    icon: '◆',
    title: 'Active BNI connector',
    desc: 'Maintains a trusted referral network of 45+ business owners across industries.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-teal py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow text-goldsoft mb-3">Achievements</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-white mb-12 max-w-xl">
          Milestones along the way
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <div className="text-gold text-2xl mb-4">{a.icon}</div>
              <h3 className="font-display text-lg text-white mb-2">{a.title}</h3>
              <p className="text-sm text-white/65 font-body leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

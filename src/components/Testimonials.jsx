import React from 'react';

// NOTE: placeholder testimonials — replace with real quotes from members/clients.
const TESTIMONIALS = [
  {
    quote:
      'Santhosh brings a rare mix of strategic clarity and genuine care for the people he works with.',
    name: 'Business Associate',
    role: 'BNI Network Member',
  },
  {
    quote:
      'Every referral through his network has been thoughtfully matched — it never feels transactional.',
    name: 'Client Partner',
    role: 'IT Services',
  },
  {
    quote:
      'His understanding of both finance and human behavior makes him a rare kind of advisor.',
    name: 'Fellow Founder',
    role: 'Data Management',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow text-teal mb-3">Testimonials</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-12 max-w-xl">
          What the network says
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-paper rounded-2xl p-7 border border-paper-line flex flex-col"
            >
              <span className="font-display text-4xl text-gold leading-none mb-3">"</span>
              <p className="text-slate font-body text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>
              <div className="border-t border-paper-line pt-4">
                <p className="text-sm font-semibold text-ink font-body">{t.name}</p>
                <p className="text-xs text-slate-soft font-body">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

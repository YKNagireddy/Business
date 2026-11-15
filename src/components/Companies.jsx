// import React from 'react';

// const Companies = ({ companies }) => {
//   // companies: [{ name, logo, tagline }]
//   return (
//     <section id="companies" className="bg-white py-24 px-6">
//       <div className="max-w-6xl mx-auto">
//         <p className="eyebrow text-teal mb-3">Companies</p>
//         <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-12 max-w-xl">
//           Ventures under his leadership
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
//           {companies.map((c, i) => (
//             <div
//               key={i}
//               className="group relative border border-paper-line rounded-2xl p-8 flex flex-col items-center text-center bg-paper hover:shadow-xl transition"
//             >
//               <div className="h-16 mb-6 flex items-center justify-center">
//                 <img src={c.logo} alt={c.name} className="h-full object-contain" />
//               </div>
//               {/* <h3 className="font-display text-xl text-ink mb-2">{c.name}</h3> */}
//               <p className="text-sm text-slate-soft font-body">{c.tagline}</p>
//               <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Companies;


import React, { useEffect, useState } from 'react';

const SLIDE_INTERVAL = 5000;
const ITEMS_PER_SLIDE = 4;

const Companies = ({ companies = [] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (companies.length <= ITEMS_PER_SLIDE) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % companies.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [companies.length]);

  const visibleCompanies = Array.from(
    { length: Math.min(ITEMS_PER_SLIDE, companies.length) },
    (_, i) => companies[(current + i) % companies.length]
  );

  return (
    <section id="companies" className="bg-white py-24 px-6">
      <div className="max-w-6xl w-full mx-auto">

        <p className="eyebrow text-teal mb-3">Companies</p>

        <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-12 max-w-xl">
          Ventures under his leadership
        </h2>

        
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {visibleCompanies.map((c, i) => (
    <div
      key={`${c.name}-${current}-${i}`}
      className="relative min-w-0 h-48 border border-paper-line rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-paper hover:shadow-xl transition-all duration-500 overflow-hidden"
    >
      <div className="h-16 w-full mb-5 flex items-center justify-center shrink-0">
        <img
          src={c.logo}
          alt={c.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <p className="text-sm text-slate-soft font-body line-clamp-2">
        {c.tagline}
      </p>

      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold" />
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Companies;

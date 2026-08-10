// const BusinessDetails = ({ business, onBack }) => {
//   if (!business) return null;

//   return (
//     <div className="relative p-8 bg-white rounded-2xl shadow-lg border border-gray-200">

//       {/* BACK BUTTON */}
//       <button
//         onClick={onBack}
//         className="absolute top-4 left-4 px-4 py-1.5 text-sm font-medium
//                    bg-gray-100 text-gray-700 rounded-full
//                    hover:bg-gray-200 transition"
//       >
//         ← Back
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-6">

//         {/* LEFT */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">

//           <img
//             src={business.src}
//             alt={business.name}
//             className="w-60 h-60 object-contain rounded-xl border border-gray-200 mb-5"
//           />

//           <h2 className="text-2xl font-bold text-gray-900">
//             {business.name}
//           </h2>

//         </div>

//         {/* RIGHT */}
//         <div className="flex flex-col space-y-5">

//           {/* Company logo */}
//           {business.companyLogo ? (
//             <img
//               src={business.companyLogo}
//               alt={business.company}
//               className="w-44 h-44 object-contain border border-gray-200 rounded-xl"
//             />
//           ) : (
//             <div className="w-44 h-44 flex items-center justify-center border border-gray-200 rounded-xl bg-gray-50">
//               <span className="text-gray-400 text-sm">No Logo</span>
//             </div>
//           )}

//           <h3 className="text-xl font-semibold text-gray-800">
//             {business.company}
//           </h3>

//           {/* Bullet points */}
//           <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
//             {business.Keywords?.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default BusinessDetails;
const BusinessDetails = ({ business, onBack }) => {
  if (!business) return null;

  console.log("business", business)

  return (
    <div className="relative p-6 md:p-10 bg-white rounded-2xl shadow-lg border border-paper-line">
      <button
        onClick={onBack}
        className="absolute top-4 left-4 md:top-6 md:left-6 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide
                   bg-paper text-ink rounded-full
                   hover:bg-gold hover:text-ink transition"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={business.src}
            alt={business.name}
            className="w-56 h-56 object-contain rounded-xl border border-paper-line mb-5 bg-paper p-2"
          />
          <p className="eyebrow text-gold mb-1">BNI Member</p>
          <h2 className="font-display text-2xl font-semibold text-ink">
            {business.name}
          </h2>
        </div>

        <div className="flex flex-col space-y-5">
          {business.companies.map((company) => (
            <div
              key={company._id}
              className="border rounded-xl p-5"
            >
          {company.logoUrl  ? (
            <img
              src={company.logoUrl }
              alt={company.companyName}
              className="w-44 h-44 object-contain border border-paper-line rounded-xl bg-paper p-2"
            />
          ) : (
            <div className="w-full flex items-center justify-center">
              <span className="text-transparent select-none">.</span>
            </div>
          )}

          <h3 className="font-display text-xl font-semibold text-ink">
            {company.companyName}
          </h3>

          <ul className="space-y-2 text-slate text-sm leading-relaxed font-body">
            {company.keywords?.map((keyword, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-gold mt-1">◆</span>
                <span>{keyword}</span>
              </li>
            ))}
          </ul>
          </div>))}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;

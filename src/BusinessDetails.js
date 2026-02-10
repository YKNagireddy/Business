const BusinessDetails = ({ business, onBack }) => {
  if (!business) return null;

  return (
    <div className="relative p-8 bg-white rounded-2xl shadow-lg border border-gray-200">

      {/* BACK BUTTON */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 px-4 py-1.5 text-sm font-medium
                   bg-gray-100 text-gray-700 rounded-full
                   hover:bg-gray-200 transition"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-6">

        {/* LEFT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          <img
            src={business.src}
            alt={business.name}
            className="w-60 h-60 object-contain rounded-xl border border-gray-200 mb-5"
          />

          <h2 className="text-2xl font-bold text-gray-900">
            {business.name}
          </h2>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col space-y-5">

          {/* Company logo */}
          {business.companyLogo ? (
            <img
              src={business.companyLogo}
              alt={business.company}
              className="w-44 h-44 object-contain border border-gray-200 rounded-xl"
            />
          ) : (
            <div className="w-44 h-44 flex items-center justify-center border border-gray-200 rounded-xl bg-gray-50">
              <span className="text-gray-400 text-sm">No Logo</span>
            </div>
          )}

          <h3 className="text-xl font-semibold text-gray-800">
            {business.company}
          </h3>

          {/* Bullet points */}
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
            {business.Keywords?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

        </div>

      </div>
    </div>
  );
};

export default BusinessDetails;

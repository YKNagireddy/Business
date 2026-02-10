import { useMemo } from "react";

const OtherBusinessImage = ({
  otherBusinessItems = [],
  setSelectedBusiness,
  searchTerm = "",
}) => {
  // Filter logic
  const filteredItems = useMemo(() => {
    return otherBusinessItems.filter((item) => {
      if (!searchTerm.trim()) return true;

      const lower = searchTerm.toLowerCase();

      const inKeywords = item.Keywords?.some((k) =>
        k.toLowerCase().includes(lower)
      );
      const inName = item.name?.toLowerCase().includes(lower);
      const inCompany = item.company?.toLowerCase().includes(lower);

      return inKeywords || inName || inCompany;
    });
  }, [otherBusinessItems, searchTerm]);

  return (
    <div className="h-full w-full overflow-x-hidden">

      {/* Responsive Grid */}
      <div
        className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-5
        p-4
        place-items-center
      "
      >
        {filteredItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedBusiness(item)}
            className="
              group relative bg-white rounded-xl overflow-hidden
              border border-gray-200 hover:shadow-xl
              cursor-pointer transition-all duration-200
              w-full max-w-[230px]
            "
          >
            {/* IMAGE AREA — FIT IMAGE (NO CROP) */}
            <div className="w-full h-44 sm:h-48 md:h-52 lg:h-56 flex items-center justify-center bg-white">
              <img
                src={item.src}
                alt={item.name}
                className="h-full w-full object-contain p-2"
              />
            </div>

            {/* TEXT AREA */}
            <div className="p-3 text-center">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {item.name}
              </p>
              <p className="text-xs text-gray-600 truncate">
                {item.company}
              </p>
            </div>

            {/* HOVER POPUP */}
            <div
              className="
                absolute top-0 left-full ml-3
                w-52 max-w-[90vw]
                bg-white rounded-lg shadow-xl border border-gray-300
                opacity-0 pointer-events-none
                group-hover:opacity-100 group-hover:pointer-events-auto
                transition-all duration-200 z-50 p-3
              "
            >
              <p className="text-sm font-semibold text-gray-800 mb-1">
                {item.name}
              </p>

              <div className="max-h-40 overflow-y-auto pr-1">
                {item.Keywords?.map((k, i) => (
                  <div key={i} className="text-xs text-gray-600">
                    {k}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <p className="col-span-full text-center text-gray-500 text-sm">
            No matches found.
          </p>
        )}
      </div>
    </div>
  );
};

export default OtherBusinessImage;

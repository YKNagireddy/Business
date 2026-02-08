import { useState, useMemo, useEffect } from "react";

const OtherBusinessImage = ({ otherBusinessItems = [], setSelectedBusiness  }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  // Detect columns based on screen size
  const getCols = () => {
    if (window.innerWidth >= 1024) return 5; // lg
    if (window.innerWidth >= 768) return 4; // md
    if (window.innerWidth >= 640) return 3; // sm
    return 2; // default
  };

  const [cols, setCols] = useState(getCols());

  useEffect(() => {
    const handleResize = () => setCols(getCols());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter items based on search
  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return otherBusinessItems;

    const lower = searchTerm.toLowerCase();
    return otherBusinessItems.filter((item) => {
      const inKeywords = item.Keywords?.some((k) =>
        k.toLowerCase().includes(lower)
      );
      const inName = item.name?.toLowerCase().includes(lower);
      const inCompany = item.company?.toLowerCase().includes(lower);

      return inKeywords || inName || inCompany;
    });
  }, [searchTerm, otherBusinessItems]);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="h-full rounded-lg w-full overflow-x-hidden">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by keyword, name, or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl"
      />

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 p-2 sm:p-3 md:p-4 rounded-lg relative">
        {paginatedItems.map((item, index) => {
          const isRightSide = (index + 1) % cols === 0;

          return (
            <div
              key={index}
              onClick={() => setSelectedBusiness(item)}
              className="group relative flex flex-col items-center text-center bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-gray-400 cursor-pointer p-2 sm:p-3 transition-all duration-200"
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 w-auto object-contain rounded-md mb-2 border border-gray-300"
              />

              <p className="text-[8px] sm:text-xs md:text-sm font-semibold text-gray-800 truncate w-full">
                {item.name}
              </p>
              <p className="text-[6px] sm:text-[10px] md:text-xs text-gray-600 truncate w-full">
                {item.company}
              </p>

              {/* Hover Popup */}
              <div
                className={`absolute top-0 ${
                  isRightSide ? "right-full mr-3" : "left-full ml-3"
                }
                sm:w-34 md:w-36 lg:w-40 xl:w-48 2xl:w-56
                max-w-[90vw]
                bg-white rounded-lg shadow-xl border border-gray-300
                opacity-0 pointer-events-none
                group-hover:opacity-100 group-hover:pointer-events-auto
                transition-all duration-200 z-50 p-3`}
              >
                <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
                  {item.name}
                </p>

                <div className="max-h-40 overflow-y-auto pr-1">
                  {item.Keywords?.map((k, i) => (
                    <div key={i} className="text-[10px] sm:text-xs text-gray-600">
                      {k}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {paginatedItems.length === 0 && (
          <p className="col-span-full text-center text-gray-500 text-xs sm:text-sm md:text-base">
            No matches found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {filteredItems.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-sm font-semibold text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default OtherBusinessImage;

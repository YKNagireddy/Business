import { useState, useMemo } from "react";

const OtherBusinessImage = ({ otherBusinessItems = [], setSelectedBusiness }) => {
    const [searchTerm, setSearchTerm] = useState("");

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

    return (
        <div className="p-4 h-full rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-black">Other Business Details</h2>

            <input
                type="text"
                placeholder="Search by keyword, name, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="grid grid-cols-5 gap-4 overflow-visible p-5 rounded-lg relative">
                {filteredItems.map((item, index) => {
                    const isRightEdge = (index + 1) % 5 === 0 || (index + 2) % 5 === 0;
                    return (
                        <div
                            key={index}
                            onClick={() => setSelectedBusiness(item)}
                            className="group relative flex flex-col items-center text-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-200 border border-transparent hover:border-gray-400"
                        >
                            <img
                                className="h-20 rounded-md mb-2 border border-gray-400"
                                src={item.src}
                                alt={item.name}
                            />
                            <p className="text-sm font-semibold text-gray-700 truncate w-full">
                                {item.name}
                            </p>
                            <p className="text-[10px] text-gray-700 truncate w-full">
                                {item?.company}
                            </p>

                            {/* Hover popup */}
                            <div
                                className={`absolute top-0 ${isRightEdge ? "right-full mr-2" : "left-full ml-2"
                                    } w-72 bg-white rounded-lg shadow-xl border border-gray-300
                opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
                transition-all duration-200 z-50 p-3 origin-top`}
                            >
                                <p className="text-xs text-gray-800 font-semibold">{item.name}</p>

                                <div className="mt-1 max-h-48 overflow-y-auto pr-1">
                                    {item.Keywords?.map((name, idx) => (
                                        <div key={idx} className="text-xs text-gray-600">
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}

                {filteredItems.length === 0 && (
                    <p className="col-span-5 text-center text-gray-500 text-sm">
                        No matches found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default OtherBusinessImage;

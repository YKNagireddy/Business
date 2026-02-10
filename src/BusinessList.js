const BusinessList = ({ businesses, onBusinessClick }) => (
<div>


    <div className="p-3 sm:p-4 md:p-6 text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-base">


        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {businesses.map((item, index) => (
                <div
                    key={index}
                    onClick={() => onBusinessClick?.(item)}
                    className="group flex flex-col items-center justify-center bg-white rounded-xl hover:shadow-[0_4px_10px_rgba(81,144,222,0.25)]
                            hover:scale-[1.03] transition-all duration-200 cursor-pointer p-2 sm:p-3 md:p-4 text-center"
                >
                    <img
                        src={item.logo}
                        alt={item.name}
                        className="h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 2xl:h-32 w-auto object-contain mb-2 sm:mb-3 rounded-md"
                    />
                    <h2 className="text-gray-800 font-medium break-words whitespace-normal">
                        {item.name}
                    </h2>
                </div>
            ))}
        </div>
    </div>
</div>
);

export default BusinessList;
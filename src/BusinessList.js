const BusinessList = ({ businesses }) => (
    <div className="p-2">
        <h1 className="text-xl font-bold mb-4 text-center">My Business</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {businesses.map((item, index) => (
                <div
                    key={index}
                    className="group flex flex-col items-center justify-center bg-white hover:shadow-[2px_2px_4px_0px_rgba(81,144,222,0.24)] transition-all duration-200"
                    onClick={{}}
                >
                    <img
                        src={item.logo}
                        alt={item.name}
                        className="h-28 object-contain mb-1 rounded-md"
                    />
                    <h2 className="text-sm font-semibold text-gray-800 text-center">{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
);

export default BusinessList
const BusinessDetails = ({ business }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md" >
            <img
                src={business.src}
                alt={business.name}
                className="size-40 mx-auto rounded-md mb-3"
            />
            <div className="space-y-3 mt-4">
                <h2 className="text-lg font-semibold">Name: {business.name}</h2>
                <h2 className="text-lg font-semibold">Mail Id: {business.email}</h2>
                <h2 className="text-lg font-semibold">Phone Number: {business.phone}</h2>
            </div>
            <div className="mt-4">
                <img
                    src="comapany Logo"
                    alt="comapany Logo"
                    className="size-40 mx-auto rounded-md border border-gray-300 mb-3"
                />
                <h2 className="text-base mb-4">Company Name: {business.company}</h2>
                {business.Keywords?.map((name, idx) => (
                    <div key={idx} className="text-sm text-gray-600 p-1">
                        {name}
                    </div>
                ))}
            </div>
        </div >
    )
};

export default BusinessDetails
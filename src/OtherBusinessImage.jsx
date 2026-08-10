const OtherBusinessImage = ({
  otherBusinessItems = [],
  setSelectedBusiness,
}) => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-1 place-items-center">
        {otherBusinessItems.map((item) => (
          <div
            key={item._id}
            onClick={() => setSelectedBusiness(item)}
            className="
              group relative bg-white rounded-2xl overflow-hidden
              border border-paper-line hover:border-gold
              hover:-translate-y-1 hover:shadow-xl
              cursor-pointer transition-all duration-200
              w-full max-w-[230px]
            "
          >
            <div className="w-full h-44 sm:h-48 md:h-52 lg:h-56 flex items-center justify-center bg-white">
              <img
                src={item.src}
                alt={item.name}
                className="h-full w-full object-contain p-3"
              />
            </div>

            <div className="p-3 text-center border-t border-paper-line">
              <p className="text-sm font-semibold text-ink truncate">
                {item.name}
              </p>

              <p className="text-xs text-slate-soft truncate">
                {item.companies[0]?.companyName}
              </p>
            </div>

            {/* Hover */}
            <div
              className="
                absolute top-0 left-full ml-3
                w-60 bg-white rounded-xl shadow-2xl
                border border-paper-line
                opacity-0 pointer-events-none
                group-hover:opacity-100
                group-hover:pointer-events-auto
                transition-all duration-200
                z-50 p-4
              "
            >
              <p className="font-semibold mb-2">{item.name}</p>

              {item.companies.map((company) => (
                <div key={company._id} className="mb-3">
                  <p className="font-semibold text-sm text-gold">
                    {company.companyName}
                  </p>

                  {company.keywords.map((keyword, i) => (
                    <div key={i} className="text-xs">
                      • {keyword}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
        {otherBusinessItems.length === 0 && (
          <p className="col-span-full text-center py-10">
            No members found.
          </p>
        )}
      </div>
    </div>
  );
};

export default OtherBusinessImage;
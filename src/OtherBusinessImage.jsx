const OtherBusinessImage = ({ otherBusinessItems = [], setSelectedBusiness }) => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-1 place-items-center">
        {otherBusinessItems.map((item, index) => (
          <div
            key={item.name + index}
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
              <p className="text-sm font-semibold text-ink truncate font-body">
                {item.name}
              </p>
              <p className="text-xs text-slate-soft truncate font-body">
                {item.company}
              </p>
            </div>

            {/* HOVER POPUP */}
            <div
              className="
                absolute top-0 left-full ml-3
                w-52 max-w-[90vw]
                bg-white rounded-xl shadow-2xl border border-paper-line
                opacity-0 pointer-events-none
                group-hover:opacity-100 group-hover:pointer-events-auto
                transition-all duration-200 z-50 p-4
              "
            >
              <p className="eyebrow text-gold mb-2">{item.name}</p>
              <div className="max-h-40 overflow-y-auto pr-1 hide-scrollbar space-y-1">
                {item.Keywords?.map((k, i) => (
                  <div key={i} className="text-xs text-slate font-body">
                    · {k}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {otherBusinessItems.length === 0 && (
          <p className="col-span-full text-center text-slate-soft text-sm py-12 font-body">
            No matches found. Try a different keyword.
          </p>
        )}
      </div>
    </div>
  );
};

export default OtherBusinessImage;
import React, { useMemo, useState, useEffect } from 'react';
import OtherBusinessImage from '../OtherBusinessImage';
import BusinessDetails from '../BusinessDetails';

const ITEMS_PER_PAGE = 10;

// Builds a compact page list like: 1 2 3 ... 14 15 16 ... 29 30
const getPageRange = (current, total) => {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];
  let last;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }
  range.forEach((i) => {
    if (last) {
      if (i - last === 2) rangeWithDots.push(last + 1);
      else if (i - last > 2) rangeWithDots.push('...');
    }
    rangeWithDots.push(i);
    last = i;
  });
  return rangeWithDots;
};

const BusinessMembers = ({ otherBusinessItems }) => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter once here — single source of truth for both the grid and pagination math.
  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return otherBusinessItems;
    const lower = searchTerm.toLowerCase();
    return otherBusinessItems.filter((item) => {
      const inKeywords = item.Keywords?.some((k) => k.toLowerCase().includes(lower));
      const inName = item.name?.toLowerCase().includes(lower);
      const inCompany = item.company?.toLowerCase().includes(lower);
      return inKeywords || inName || inCompany;
    });
  }, [otherBusinessItems, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));

  // Only reset to page 1 when the SEARCH changes — never when opening/closing a detail card.
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // If filtering ever leaves currentPage out of range (e.g. searched while on page 20), clamp it.
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [totalPages, currentPage]);

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const gridTopRef = React.useRef(null);
  const scrollToGridTop = () => {
    gridTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    scrollToGridTop();
  };

  return (
    <section id="members" className="bg-paper py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-10">
          <svg width="160" height="28" viewBox="0 0 160 28">
            <line x1="20" y1="14" x2="140" y2="14" stroke="#C8973B" strokeWidth="1" strokeDasharray="3 5" />
            <circle cx="20" cy="14" r="4" fill="#1F5C57" />
            <circle cx="80" cy="14" r="3" fill="#C8973B" />
            <circle cx="140" cy="14" r="4" fill="#1F5C57" />
          </svg>
        </div>

        <div ref={gridTopRef} className="text-center mb-10 scroll-mt-24">
          <p className="eyebrow text-teal mb-3">BNI Referral Network</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-4">
            Business Members
          </h2>
          <p className="text-slate-soft font-body max-w-xl mx-auto text-sm md:text-base">
            A trusted circle of business owners across industries — click a card for full
            details, or search by name, company, or service.
          </p>
        </div>

        {!selectedBusiness && (
          <>
            <div className="mb-3 flex justify-center">
              <input
                type="text"
                placeholder="Search by keyword, name, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-paper-line bg-white rounded-full px-5 py-3 w-full md:w-[28rem] text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
              />
            </div>
            <p className="text-center text-xs text-slate-soft font-mono mb-8">
              {filteredItems.length} member{filteredItems.length !== 1 ? 's' : ''}
              {totalPages > 1 && ` · page ${currentPage} of ${totalPages}`}
            </p>
          </>
        )}

        <div className="min-h-[50vh]">
          {selectedBusiness ? (
            <div className="bg-white p-4 md:p-6 rounded-2xl">
              <BusinessDetails
                business={selectedBusiness}
                onBack={() => setSelectedBusiness(null)} // currentPage is untouched — returns to the same page
              />
            </div>
          ) : (
            <>
              <OtherBusinessImage
                otherBusinessItems={paginatedItems}
                setSelectedBusiness={setSelectedBusiness}
              />

              {totalPages > 1 && (
                <div className="flex flex-wrap justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-full text-xs font-semibold border border-paper-line bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-gold transition"
                  >
                    ← Prev
                  </button>

                  {getPageRange(currentPage, totalPages).map((p, i) =>
                    p === '...' ? (
                      <span key={`dots-${i}`} className="px-2 text-slate-soft text-xs">
                        …
                      </span>
                    ) : (
                      <button
                        key={p}
                        onClick={() => goToPage(p)}
                        className={`w-9 h-9 rounded-full text-xs font-mono font-semibold transition ${
                          p === currentPage
                            ? 'bg-gold text-ink'
                            : 'bg-white border border-paper-line text-slate hover:border-gold'
                        }`}
                      >
                        {p}
                      </button>
                    )
                  )}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded-full text-xs font-semibold border border-paper-line bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-gold transition"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessMembers;
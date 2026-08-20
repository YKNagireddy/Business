import React from 'react';

// ---------------------------------------------------------------------------
// CategoryBrowser
//
// First level of the browse flow: category tiles only — no logos, no
// names. Click a tile to drill into that category's keywords
// (BusinessMembers renders KeywordList next).
// ---------------------------------------------------------------------------

const OtherBusinessImage = ({ categories = [], onSelectCategory }) => {
  if (categories.length === 0) {
    return (
      <p className="col-span-full text-center py-10 text-slate-soft font-body">
        No categories found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-1">
      {categories.map((category) => (
        <button
          key={category.name}
          type="button"
          onClick={() => onSelectCategory(category)}
          className="
            group relative bg-white rounded-2xl overflow-hidden
            border border-paper-line hover:border-gold
            hover:-translate-y-1 hover:shadow-xl
            transition-all duration-200
            flex flex-col items-center justify-center
            text-center px-4 py-8 h-40
          "
        >
          <p className="font-display text-base md:text-lg font-semibold text-ink group-hover:text-gold transition">
            {category.name}
          </p>
          <p className="mt-2 text-xs font-mono text-slate-soft">
            {category.count} member{category.count !== 1 ? 's' : ''}
          </p>
        </button>
      ))}
    </div>
  );
};

export default OtherBusinessImage;
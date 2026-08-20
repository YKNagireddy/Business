import React from 'react';

// ---------------------------------------------------------------------------
// ContactAdminCard
//
// The end of the browse flow. Deliberately does NOT reveal which
// business/company matched the keyword — that's the point of gating by
// category → keyword instead of showing cards directly. Instead it
// points the visitor at the admin/contact section to get connected.
//
// `adminEmail` / `adminPhone` are placeholders — replace with your real
// values, or delete the ones you don't want to offer. `onGoToContact`
// lets the parent scroll to the site's existing <ContactSection /> (see
// the wiring note in BusinessMembers.jsx) instead of duplicating a form
// here.
// ---------------------------------------------------------------------------

const ContactAdminCard = ({
  keyword,
  category,
  onBackToKeywords,
  onBackToCategories,
  onGoToContact,
  adminEmail = 'admin@yourdomain.com',
  adminPhone = '',
}) => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl border border-paper-line text-center max-w-xl mx-auto">
      <div className="flex justify-center gap-2 mb-6">
        <button
          type="button"
          onClick={onBackToKeywords}
          className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wide
                     bg-paper text-ink rounded-full
                     hover:bg-gold hover:text-ink transition"
        >
          ← {category?.name || 'Keywords'}
        </button>
        <button
          type="button"
          onClick={onBackToCategories}
          className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wide
                     bg-paper text-ink rounded-full
                     hover:bg-gold hover:text-ink transition"
        >
          All categories
        </button>
      </div>

      <p className="eyebrow text-gold mb-2">Interested in</p>
      <h3 className="font-display text-2xl font-semibold text-ink mb-4">
        "{keyword}"
      </h3>

      <p className="text-sm text-slate-soft font-body mb-8 leading-relaxed">
        Member details for this service aren't shown directly — reach out to the
        chapter admin and we'll connect you with the right member.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3">
        {onGoToContact && (
          <button
            type="button"
            onClick={onGoToContact}
            className="px-6 py-3 rounded-full text-sm font-semibold bg-gold text-ink hover:brightness-95 transition"
          >
            Go to Contact Section
          </button>
        )}

        {adminEmail && (
          <a
            href={`mailto:${adminEmail}?subject=${encodeURIComponent(
              `Enquiry: ${keyword}`
            )}`}
            className="px-6 py-3 rounded-full text-sm font-semibold border border-paper-line text-ink hover:border-gold transition"
          >
            Email Admin
          </a>
        )}

        {adminPhone && (
          <a
            href={`tel:${adminPhone}`}
            className="px-6 py-3 rounded-full text-sm font-semibold border border-paper-line text-ink hover:border-gold transition"
          >
            Call Admin
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactAdminCard;
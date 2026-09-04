import React from 'react';
// Replace with your actual payment QR / scanner image.
// import PaymentQR from '../Assets/payment-qr.png';

// ---------------------------------------------------------------------------
// PaymentPage
//
// Shown after a keyword is picked (and the user is already signed up +
// OTP-verified). Purely a "here's the QR, tell us when you've paid"
// screen — `onPaid` fires on the user's own say-so, there's no backend
// verification here. If you need that to actually be trustworthy (not
// just self-reported), you'll want a webhook from your payment
// provider that flips a "paid" flag server-side, and to check that
// instead of just calling onPaid on click.
// ---------------------------------------------------------------------------

const PaymentPage = ({
  keyword,
  category,
  onPaid,
  onBack,
  upiId = 'yourupi@bank',
  amount, // e.g. 99 — omit to hide the amount line
}) => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl border border-paper-line max-w-md mx-auto text-center">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide
                   bg-paper text-ink rounded-full
                   hover:bg-gold hover:text-ink transition"
      >
        ← {category?.name || 'Keywords'}
      </button>

      <p className="eyebrow text-gold mb-1">Almost there</p>
      <h3 className="font-display text-2xl font-semibold text-ink mb-1">
        Complete payment for "{keyword}"
      </h3>
      {amount != null && (
        <p className="text-sm text-slate-soft font-body mb-6">Amount: ₹{amount}</p>
      )}

      {/* <img
        src={PaymentQR}
        alt="Scan to pay"
        className="w-56 h-56 object-contain mx-auto border border-paper-line rounded-xl bg-paper p-3 mb-4"
      /> */}

      {upiId && (
        <p className="text-xs text-slate-soft font-mono mb-8">UPI ID: {upiId}</p>
      )}

      <button
        type="button"
        onClick={onPaid}
        className="w-full py-3 rounded-full text-sm font-semibold bg-gold text-ink hover:brightness-95 transition"
      >
        I've Completed the Payment
      </button>

      <p className="text-xs text-slate-soft font-body mt-4">
        Once confirmed, you'll be connected with the chapter admin.
      </p>
    </div>
  );
};

export default PaymentPage;
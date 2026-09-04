import React, { useState, useEffect, useRef } from 'react';
import { signup, verifyOtp } from '../Api/otp.js';

const RESEND_COOLDOWN = 30; // seconds

const SignupForm = ({ onVerified, onCancel }) => {
  const [step, setStep] = useState('details'); // 'details' | 'otp'
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (cooldown <= 0) return undefined;
    timerRef.current = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [cooldown]);

  const validateDetails = () => {
    if (!name.trim()) return 'Please enter your name.';
    if (!/^\d{10}$/.test(mobile.trim())) return 'Enter a valid 10-digit mobile number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return 'Enter a valid email address.';
    if (!password.trim()) return 'Please enter your password.';
    return '';
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const validationError = validateDetails();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      await signup({ name: name.trim(), mobile: mobile.trim(), email: email.trim(), password: password.trim() });
      setStep('otp');
      setCooldown(RESEND_COOLDOWN);
    } catch (err) {
      setError(err.message || 'Could not send OTP. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleResend = async () => {
    if (cooldown > 0 || submitting) return;
    setError('');
    setSubmitting(true);
    try {
      await signup({ name: name.trim(), mobile: mobile.trim(), email: email.trim(), password: password.trim() });
      setCooldown(RESEND_COOLDOWN);
    } catch (err) {
      setError(err.message || 'Could not resend OTP.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!/^\d{4,6}$/.test(otp.trim())) {
      setError('Enter the OTP you received.');
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      // Passing email instead of mobile to verify endpoint if required by backend
      await verifyOtp({ email: email.trim(), otp: otp.trim() });
      onVerified({ name: name.trim(), mobile: mobile.trim(), email: email.trim() });
    } catch (err) {
      setError(err.message || 'Invalid or expired OTP.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl border border-paper-line max-w-md mx-auto">
      <button
        type="button"
        onClick={onCancel}
        className="mb-6 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide
                   bg-paper text-ink rounded-full
                   hover:bg-gold hover:text-ink transition"
      >
        ← All categories
      </button>

      <p className="eyebrow text-gold mb-1">One quick step</p>
      <h3 className="font-display text-2xl font-semibold text-ink mb-1">
        {step === 'details' ? 'Sign up to continue' : 'Verify your email address'}
      </h3>
      <p className="text-sm text-slate-soft font-body mb-8">
        {step === 'details'
          ? 'We just need a few details before showing member services.'
          : `Enter the OTP sent to ${email}.`}
      </p>

      {error && <p className="text-sm text-red-600 font-body mb-4">{error}</p>}

      {step === 'details' ? (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-paper-line rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
          />
          <input
            type="tel"
            inputMode="numeric"
            placeholder="Mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
            className="w-full border border-paper-line rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-paper-line rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-paper-line rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-full text-sm font-semibold bg-gold text-ink hover:brightness-95 disabled:opacity-50 transition"
          >
            {submitting ? 'Sending OTP…' : 'Send OTP'}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
            className="w-full border border-paper-line rounded-full px-5 py-3 text-sm text-center tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-full text-sm font-semibold bg-gold text-ink hover:brightness-95 disabled:opacity-50 transition"
          >
            {submitting ? 'Verifying…' : 'Verify & Continue'}
          </button>
          <button
            type="button"
            onClick={handleResend}
            disabled={cooldown > 0 || submitting}
            className="w-full text-xs font-semibold text-slate-soft hover:text-ink disabled:opacity-50 transition"
          >
            {cooldown > 0 ? `Resend OTP in ${cooldown}s` : 'Resend OTP'}
          </button>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
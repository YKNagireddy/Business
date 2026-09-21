import React, { useEffect, useState } from "react";
import { forgotPassword, resetPassword } from "../Api/auth.js";

/*
  Step 2 of the forgot-password flow.

  The user got a 6-digit OTP by email. They enter it here together
  with their new password.
*/

// The backend ignores repeat OTP requests for 60 seconds,
// so the Resend button is disabled for the same time.
const RESEND_COOLDOWN = 60; // seconds

// Must match the backend rules.
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 72;

const inputClass = `
  w-full border border-paper-line rounded-full
  px-5 py-3 text-sm
  focus:outline-none
  focus:ring-2 focus:ring-gold/50
  transition
`;

const ResetPasswordForm = ({
  email,
  onBack,
  onCancel,
  onChangeEmail,
}) => {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(RESEND_COOLDOWN);
  const [done, setDone] = useState(false);

  // Resend countdown
  useEffect(() => {
    if (cooldown <= 0) return undefined;

    const timer = setTimeout(() => {
      setCooldown((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [cooldown]);

  // ---------------------------------------------------------
  // RESET PASSWORD
  // ---------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!/^\d{6}$/.test(otp)) {
      setError("Enter the 6-digit OTP sent to your email.");
      return;
    }

    if (
      newPassword.length < MIN_PASSWORD_LENGTH ||
      newPassword.length > MAX_PASSWORD_LENGTH
    ) {
      setError(
        `Password must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH} characters.`
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);

    try {
      await resetPassword({
        email,
        otp,
        newPassword,
      });

      // Clear sensitive values from React state.
      setOtp("");
      setNewPassword("");
      setConfirmPassword("");

      setDone(true);
    } catch (err) {
      console.error("Reset password error:", err);

      setError(
        err?.message ||
        "Could not reset your password. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ---------------------------------------------------------
  // RESEND OTP
  // ---------------------------------------------------------
  const handleResend = async () => {
    if (cooldown > 0 || submitting) return;

    setError("");
    setMessage("");
    setSubmitting(true);

    try {
      await forgotPassword(email);

      setOtp("");
      setCooldown(RESEND_COOLDOWN);
      setMessage(`A new OTP has been sent to ${email}.`);
    } catch (err) {
      console.error("Resend OTP error:", err);

      setError(
        err?.message ||
        "Could not resend the OTP. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ---------------------------------------------------------
  // SUCCESS
  // ---------------------------------------------------------
  if (done) {
    return (
      <div className="bg-white p-6 md:p-10 rounded-2xl border border-paper-line max-w-md mx-auto">
        <p className="eyebrow text-gold mb-1">
          All done
        </p>

        <h3 className="font-display text-2xl font-semibold text-ink mb-1">
          Password updated
        </h3>

        <p className="text-sm text-slate-soft font-body mb-8">
          Your password has been changed. You can now log in with your new password.
        </p>

        <button
          type="button"
          onClick={onBack}
          className="
            w-full py-3 rounded-full
            text-sm font-semibold
            bg-gold text-ink
            hover:brightness-95
            transition
          "
        >
          Back to Login
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl border border-paper-line max-w-md mx-auto">

      {/* Back */}

      <button
        type="button"
        onClick={onCancel}
        className="
          mb-6 px-4 py-1.5 text-xs font-semibold uppercase
          tracking-wide bg-paper text-ink rounded-full
          hover:bg-gold hover:text-ink transition
        "
      >
        ← Back
      </button>

      {/* Heading */}

      <p className="eyebrow text-gold mb-1">
        Account recovery
      </p>

      <h3 className="font-display text-2xl font-semibold text-ink mb-1">
        Reset your password
      </h3>

      <p className="text-sm text-slate-soft font-body mb-1">
        If an account exists for {email}, we've sent a 6-digit OTP to it.
        It expires in 10 minutes.
      </p>

      <button
        type="button"
        onClick={onChangeEmail}
        className="
          mb-8 text-xs font-semibold
          text-teal hover:underline
        "
      >
        Wrong email?
      </button>

      {/* Error */}

      {error && (
        <div className="mb-4 rounded-xl bg-red-50 px-4 py-3">
          <p className="text-sm text-red-600 font-body">
            {error}
          </p>
        </div>
      )}

      {/* Info */}

      {message && (
        <div className="mb-4 rounded-xl bg-green-50 px-4 py-3">
          <p className="text-sm text-green-700 font-body">
            {message}
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          inputMode="numeric"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) =>
            setOtp(
              e.target.value
                .replace(/\D/g, "")
                .slice(0, 6)
            )
          }
          autoComplete="one-time-code"
          className={`${inputClass} text-center tracking-[0.5em]`}
        />

        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          autoComplete="new-password"
          className={inputClass}
        />

        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
          className={inputClass}
        />

        <button
          type="submit"
          disabled={submitting}
          className="
            w-full py-3 rounded-full
            text-sm font-semibold
            bg-gold text-ink
            hover:brightness-95
            disabled:opacity-50
            transition
          "
        >
          {submitting
            ? "Please wait…"
            : "Reset Password"}
        </button>

        <button
          type="button"
          onClick={handleResend}
          disabled={cooldown > 0 || submitting}
          className="
            w-full text-xs font-semibold text-slate-soft
            hover:text-ink
            disabled:opacity-50 transition
          "
        >
          {cooldown > 0
            ? `Resend OTP in ${cooldown}s`
            : "Resend OTP"}
        </button>

        <button
          type="button"
          onClick={onBack}
          className="
            w-full text-xs font-semibold
            text-slate-soft
            hover:text-teal
            transition
          "
        >
          ← Back to Login
        </button>

      </form>
    </div>
  );
};

export default ResetPasswordForm;
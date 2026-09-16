import React, { useState } from "react";
import { forgotPassword } from "../Api/auth.js";

const ForgotPasswordForm = ({
  onBack,
  onCancel,
}) => {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError("Please enter your email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      await forgotPassword(cleanEmail);

      /*
        We intentionally show the same message whether
        the email exists or not.

        This prevents someone from checking which emails
        have accounts on your website.
      */

      setMessage(
        "If an account exists with this email, a password reset link has been sent. Please check your inbox."
      );

      setEmail("");
    } catch (err) {
      console.error("Forgot password error:", err);

      setError(
        err?.message ||
        "Could not send the password reset link."
      );
    } finally {
      setSubmitting(false);
    }
  };

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
        Forgot password?
      </h3>

      <p className="text-sm text-slate-soft font-body mb-8">
        Enter your email and we'll send you a link to reset your password.
      </p>

      {/* Error */}

      {error && (
        <div className="mb-4 rounded-xl bg-red-50 px-4 py-3">
          <p className="text-sm text-red-600 font-body">
            {error}
          </p>
        </div>
      )}

      {/* Success */}

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
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="
            w-full border border-paper-line rounded-full
            px-5 py-3 text-sm
            focus:outline-none
            focus:ring-2 focus:ring-gold/50
            transition
          "
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
            ? "Sending…"
            : "Send Reset Link"}
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

export default ForgotPasswordForm;
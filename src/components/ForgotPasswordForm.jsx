import React, { useState } from "react";
import { forgotPassword } from "../Api/auth.js";
import ResetPasswordForm from "./RestPassword";

/*
  Forgot password flow (2 steps, all inside this one screen):

    Step 1  "email"  -> user enters email, backend emails a 6-digit OTP
    Step 2  "reset"  -> <ResetPasswordForm /> : OTP + new password
*/

const ForgotPasswordForm = ({
  onBack,
  onCancel,
}) => {
  const [step, setStep] = useState("email"); // 'email' | 'reset'

  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

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
        The backend answers the same whether or not this email
        has an account, so we ALWAYS continue to the next step.
        That way nobody can use this form to find out which
        emails are registered.
      */

      setEmail(cleanEmail);
      setStep("reset");
    } catch (err) {
      console.error("Forgot password error:", err);

      setError(
        err?.message ||
        "Could not send the OTP. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (step === "reset") {
    return (
      <ResetPasswordForm
        email={email}
        onBack={onBack}
        onCancel={onCancel}
        onChangeEmail={() => setStep("email")}
      />
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
        Forgot password?
      </h3>

      <p className="text-sm text-slate-soft font-body mb-8">
        Enter your email and we'll send you an OTP to reset your password.
      </p>

      {/* Error */}

      {error && (
        <div className="mb-4 rounded-xl bg-red-50 px-4 py-3">
          <p className="text-sm text-red-600 font-body">
            {error}
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
            ? "Sending OTP…"
            : "Send OTP"}
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
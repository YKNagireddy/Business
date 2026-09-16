import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const LoginForm = ({
  onLoggedIn,
  onSignup,
  onForgotPassword,
  onCancel,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError("Please enter your email.");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        cleanEmail
      )
    ) {
      setError("Enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setSubmitting(true);

    try {
      /*
       * Important:
       *
       * email/password are sent only to the backend.
       *
       * No token is stored in:
       * localStorage
       * sessionStorage
       * cookies created by JavaScript
       *
       * Backend creates HttpOnly cookies.
       */

      const user = await login({
        email: cleanEmail,
        password,
      });

      // Clear password from React state immediately.
      setPassword("");

      if (onLoggedIn) {
        onLoggedIn(user);
      }
    } catch (err) {
      console.error("Login error:", err);

      setError(
        err?.message ||
          "Invalid email or password."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl border border-paper-line max-w-md mx-auto">

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

      <p className="eyebrow text-gold mb-1">
        Welcome back
      </p>

      <h3 className="font-display text-2xl font-semibold text-ink mb-1">
        Login
      </h3>

      <p className="text-sm text-slate-soft font-body mb-8">
        Login to continue browsing member services.
      </p>

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
          onChange={(e) =>
            setEmail(e.target.value)
          }
          autoComplete="email"
          className="
            w-full border border-paper-line rounded-full
            px-5 py-3 text-sm
            focus:outline-none
            focus:ring-2 focus:ring-gold/50
            transition
          "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          autoComplete="current-password"
          className="
            w-full border border-paper-line rounded-full
            px-5 py-3 text-sm
            focus:outline-none
            focus:ring-2 focus:ring-gold/50
            transition
          "
        />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onForgotPassword}
            className="
              text-xs font-semibold
              text-slate-soft
              hover:text-teal
              transition
            "
          >
            Forgot password?
          </button>
        </div>

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
            ? "Logging in…"
            : "Login"}
        </button>

        <div className="text-center pt-3">
          <span className="text-xs text-slate-soft">
            Don't have an account?{" "}
          </span>

          <button
            type="button"
            onClick={onSignup}
            className="
              text-xs font-semibold
              text-teal
              hover:underline
            "
          >
            Signup Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
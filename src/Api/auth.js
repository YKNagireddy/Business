const BASE_URL = `${process.env.REACT_APP_API_URL || ""}`.replace(/\/$/, "");

const request = async (url, options = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(
      data?.message || "Something went wrong. Please try again."
    );

    error.status = response.status;
    error.data = data;

    throw error;
  }

  return data;
};

// LOGIN
// Email/password are sent only for this request.
// Tokens are NEVER returned to/stored by frontend.
// Backend puts accessToken + refreshToken into HttpOnly cookies.
export const login = async ({ email, password }) => {
  return request("/api/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

// CURRENT USER
// Browser automatically sends HttpOnly accessToken cookie.
export const getMe = async () => {
  return request("/api/me", {
    method: "GET",
  });
};

// REFRESH
// Browser automatically sends HttpOnly refreshToken cookie.
export const refreshToken = async () => {
  return request("/api/refresh", {
    method: "POST",
  });
};

// LOGOUT
export const logout = async () => {
  return request("/api/logout", {
    method: "POST",
  });
};

// FORGOT PASSWORD - STEP 1
// Sends a 6-digit OTP to the email. The backend answers the same
// whether or not the email is registered.
export const forgotPassword = async (email) => {
  return request("/api/forgot-password", {
    method: "POST",
    body: JSON.stringify({
      email,
    }),
  });
};

// RESET PASSWORD - STEP 2
// Verifies the OTP and saves the new password.
export const resetPassword = async ({ email, otp, newPassword }) => {
  return request("/api/reset-password", {
    method: "POST",
    body: JSON.stringify({
      email,
      otp,
      newPassword,
    }),
  });
};
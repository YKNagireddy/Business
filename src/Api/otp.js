const BASE_URL = `${process.env.REACT_APP_API_URL}`;

export async function signup({ name, mobile, email, password }) {
  const res = await fetch(`${BASE_URL}api/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, mobilenumber: mobile, email, password }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Could not send OTP. Please try again.');
  }

  return res.json();
}

export async function verifyOtp({ email, otp }) {
  const res = await fetch(`${BASE_URL}api/otpverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, otp }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Invalid or expired OTP.');
  }

  return res.json();
}
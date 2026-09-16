import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getMe,
  login as loginApi,
  logout as logoutApi,
  refreshToken as refreshTokenApi,
} from "../Api/auth.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ---------------------------------------------------------
  // Check existing login (with refresh-token retry)
  // ---------------------------------------------------------

  const checkAuth = useCallback(async () => {
    const read = async () => {
      const res = await getMe();
      return res?.data?.user ?? res?.data ?? null;
    };

    try {
      const currentUser = await read();
      setUser(currentUser);
      return currentUser;
    } catch {
      // Access token may be expired.
      // Try refresh using the HttpOnly refreshToken cookie.
      try {
        await refreshTokenApi();
        const currentUser = await read();
        setUser(currentUser);
        return currentUser;
      } catch {
        setUser(null);
        return null;
      }
    }
  }, []);

  // ---------------------------------------------------------
  // Initial authentication check
  // ---------------------------------------------------------

  useEffect(() => {
    let mounted = true;

    checkAuth().finally(() => {
      if (mounted) setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, [checkAuth]);

  // ---------------------------------------------------------
  // LOGIN
  // ---------------------------------------------------------

  const login = useCallback(async (credentials) => {
    const response = await loginApi(credentials);

    const loggedInUser =
      response?.data?.user ?? response?.data ?? null;

    if (!loggedInUser) {
      throw new Error(
        "Login successful, but user information was not returned."
      );
    }

    setUser(loggedInUser);
    return loggedInUser;
  }, []);

  // ---------------------------------------------------------
  // LOGOUT
  // ---------------------------------------------------------

  const logout = useCallback(async () => {
    try {
      await logoutApi();
    } finally {
      setUser(null);
    }
  }, []);

  // ---------------------------------------------------------
  // ROLE HELPERS
  // ---------------------------------------------------------

  const role = user?.role || null;
  const isAuthenticated = Boolean(user);
  const isAdmin = role === "admin";
  const isMember = role === "member";
  const isUser = role === "user";

  const hasRole = useCallback(
    (...allowedRoles) => {
      if (!user) return false;
      return allowedRoles.includes(user.role);
    },
    [user]
  );

  const value = useMemo(
    () => ({
      user,
      role,
      loading,
      isAuthenticated,

      isAdmin,
      isMember,
      isUser,

      hasRole,

      login,
      logout,
      checkAuth,
    }),
    [
      user,
      role,
      loading,
      isAuthenticated,
      isAdmin,
      isMember,
      isUser,
      hasRole,
      login,
      logout,
      checkAuth,
    ]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};

export default AuthContext;
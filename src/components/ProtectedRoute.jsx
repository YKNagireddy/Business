import React from "react";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({
  children,
  roles = [],
  fallback = null,
}) => {
  const {
    loading,
    isAuthenticated,
    hasRole,
  } = useAuth();

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <p className="text-sm text-slate-soft">
          Checking login…
        </p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return fallback;
  }

  if (
    roles.length > 0 &&
    !hasRole(...roles)
  ) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold text-ink mb-2">
            Access denied
          </h2>

          <p className="text-sm text-slate-soft">
            You don't have permission to access this area.
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
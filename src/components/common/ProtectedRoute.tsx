import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../service/useAuth";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { token, loading } = useAuth();
  if (loading) return null;
  if (!token) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;

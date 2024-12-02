import { useAuth } from "@/utils/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

export const PublicRoutes = () => {
  const token = useAuth();
  return token ? <Navigate to="/dashboard" /> : <Outlet />;
};

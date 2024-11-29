import { useAuth } from "@/utils/hooks/useAuth";
import { Outlet, Navigate } from "react-router";

export const PrivateRoutes = () => {
  const token = useAuth();
  return token ? <Outlet /> : <Navigate to="/login" />;
};

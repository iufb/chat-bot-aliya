import { BaseLayout, PrivateRoutes, PublicRoutes } from "@/components/layouts";
import { DashboardPage, LoginPage } from "@/components/pages";
import { queryClient } from "@/utils/consts";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import { QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router";
import { theme } from "./theme";
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route element={<Navigate to={"/login"} replace />} path="/" />
            <Route element={<PublicRoutes />}>
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="dashboard" element={<DashboardPage />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </MantineProvider>
  );
}

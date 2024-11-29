import { AppShell } from "@mantine/core";
import { Outlet } from "react-router";

export const BaseLayout = () => {
  return (
    <AppShell>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

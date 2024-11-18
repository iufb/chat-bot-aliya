import { CreateDataButton } from "@/components";
import { DataTable, RequestTable } from "@/components/tables";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "./theme";
import { LoginForm } from "@/components/forms";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <LoginForm />
      <CreateDataButton />
      <DataTable />
      <RequestTable />
    </MantineProvider>
  );
}

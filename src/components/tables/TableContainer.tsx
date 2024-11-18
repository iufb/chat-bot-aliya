import { Box } from "@mantine/core";
import { ReactNode } from "react";

export const TableContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      my={10}
      bd={"1px solid var(--mantine-color-slate-2)"}
      p={10}
      maw={"80svw"}
      mx={"auto"}
    >
      {children}
    </Box>
  );
};

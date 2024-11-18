import { Flex } from "@mantine/core";
import { ReactNode } from "react";

export const FormContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      p={20}
      direction={"column"}
      gap={10}
      maw={"80svw"}
      mx={"auto"}
      styles={{
        root: {
          borderRadius: ".5rem",
          border: "1px solid var(--mantine-color-slate-3)",
        },
      }}
    >
      {children}
    </Flex>
  );
};

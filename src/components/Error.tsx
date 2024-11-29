import { Text } from "@mantine/core";
import { ReactNode } from "react";
export const Error = ({ children }: { children: ReactNode }) => {
  return (
    <Text size="md" c={"red.6"}>
      {children}
    </Text>
  );
};

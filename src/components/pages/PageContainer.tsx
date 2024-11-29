import { Flex, FlexProps } from "@mantine/core";
import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
} & FlexProps;
export const PageContainer = ({ children, ...props }: PageContainerProps) => {
  return (
    <Flex h={"100vh"} maw={"1320px"} mx={"auto"} {...props}>
      {children}
    </Flex>
  );
};

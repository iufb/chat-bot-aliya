import {
  CreateDataButton,
  CreateDataWordButton,
  UpdateDataForBotButton,
} from "@/components";
import { PageContainer } from "@/components/pages/PageContainer";
import { DataTable, RequestTable } from "@/components/tables";
import { Flex, rem, Tabs } from "@mantine/core";
import { Building2, Plus } from "lucide-react";
export const DashboardPage = () => {
  const iconStyle = { width: rem(25), height: rem(25) };
  return (
    <PageContainer p={"xl"}>
      <Tabs
        w={"100%"}
        color="slate.5"
        defaultValue="data"
        styles={{
          tab: {
            fontSize: rem(22),
          },
        }}
      >
        <Tabs.List justify="center">
          <Tabs.Tab value="data" leftSection={<Building2 style={iconStyle} />}>
            Компании на продажу
          </Tabs.Tab>
          <Tabs.Tab value="requests" leftSection={<Plus style={iconStyle} />}>
            Заявки на покупку
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel py={20} value="data">
          <Flex wrap="wrap" gap={10}>
            <CreateDataButton />
            <CreateDataWordButton />
            <UpdateDataForBotButton />
          </Flex>
          <Flex py={20} px={10} justify={"center"} align={"center"}>
            <DataTable />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel py={20} value="requests">
          <Flex py={20} px={10} justify={"center"} align={"center"}>
            <RequestTable />
          </Flex>
        </Tabs.Panel>
      </Tabs>
    </PageContainer>
  );
};

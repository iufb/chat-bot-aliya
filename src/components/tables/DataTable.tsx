import { GetAllData } from "@/api/data";
import { ErrorUI, SearchInput, ShowContentModal } from "@/components";
import { DeleteDataButton } from "@/components/DeleteDataButton";
import { EditDataButton } from "@/components/EditDataButton";
import { searchArrayDatatype } from "@/utils";
import { notificationErrors } from "@/utils/consts";
import { DataType } from "@/utils/types";
import { Box, Loader, Table, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { memo, useEffect, useState } from "react";

export const DataTable = () => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["dataTable"],
    queryFn: async () => {
      const data = await GetAllData();
      return data;
    },
    refetchOnWindowFocus: false,
  });
  const [res, setRes] = useState<DataType[]>([]);
  const searchData = (search: string) => {
    if (data) setRes(searchArrayDatatype(data, search));
  };
  const clearSearch = () => {
    if (data) setRes(data);
  };
  useEffect(() => {
    if (data) setRes(data);
  }, [data]);
  if (isFetching) return <Loader color={"slate.9"} />;
  if (isError) return <ErrorUI>{notificationErrors.get.message}</ErrorUI>;
  if (!data || data.length == 0) {
    return <Text>Записи не найдены</Text>;
  }

  const rows = res.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.bin}</Table.Td>
      <Table.Td>{element.status}</Table.Td>
      <Table.Td>
        {element.data.length > 40
          ? element.data.slice(0, 40) + "..."
          : element.data}
      </Table.Td>
      <Table.Td>{element.telephone}</Table.Td>
      <Table.Td>
        <ShowContentModal
          value={{
            [tableHeaders[0]]: element.bin,
            [tableHeaders[1]]: element.status,
            [tableHeaders[2]]: element.data,
            [tableHeaders[3]]: element.telephone,
          }}
        />
      </Table.Td>

      <Table.Td>
        <EditDataButton data={element} />
      </Table.Td>
      <Table.Td>
        <DeleteDataButton id={element.id} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box w={"100%"}>
      <SearchInput clearSearch={clearSearch} searchData={searchData} />

      <Content rows={rows} />
    </Box>
  );
};

const Content = memo(({ rows }: { rows: JSX.Element[] }) => {
  return (
    <Table.ScrollContainer minWidth={600} w={"100%"}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            {tableHeaders.map((h) => (
              <Table.Th key={h}>{h}</Table.Th>
            ))}
            <Table.Th>Посмотреть</Table.Th>
            <Table.Th>Изменить</Table.Th>
            <Table.Th>Удалить</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
});

const tableHeaders = ["БИН", "Статус", "Информация", "Телефон"];

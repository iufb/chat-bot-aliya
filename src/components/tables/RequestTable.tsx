import { GetAllRequest } from "@/api/requests";
import { ErrorUI, SearchInput, ShowContentModal } from "@/components";
import { DeleteRequestButton } from "@/components/DeleteRequestButton";
import { EditRequestButton } from "@/components/EditRequestButton";
import { searchArrayRequests } from "@/utils";
import { notificationErrors } from "@/utils/consts";
import { RequestType } from "@/utils/types";
import { Box, Loader, Table, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const RequestTable = () => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["requestsTable"],
    queryFn: async () => {
      const data = await GetAllRequest();
      return data;
    },

    refetchOnWindowFocus: false,
  });
  const [res, setRes] = useState<RequestType[]>([]);
  const searchData = (search: string) => {
    if (data) setRes(searchArrayRequests(data, search));
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
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.info}</Table.Td>
      <Table.Td>{element.telephone}</Table.Td>
      <Table.Td>
        <ShowContentModal
          value={{
            [tableHeaders[0]]: element.name,
            [tableHeaders[1]]: element.email,
            [tableHeaders[2]]: element.info,
            [tableHeaders[3]]: element.telephone,
          }}
        />
      </Table.Td>
      <Table.Td>
        <EditRequestButton data={element} />
      </Table.Td>
      <Table.Td>
        <DeleteRequestButton id={element.id} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box w={"100%"}>
      <SearchInput clearSearch={clearSearch} searchData={searchData} />
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
    </Box>
  );
};

const tableHeaders = ["ФИО", "Почта", "Информация", "Телефон"];

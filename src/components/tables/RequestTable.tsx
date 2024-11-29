import { GetAllRequest } from "@/api/requests";
import { ErrorUI } from "@/components";
import { DeleteRequestButton } from "@/components/DeleteRequestButton";
import { EditRequestButton } from "@/components/EditRequestButton";
import { notificationErrors } from "@/utils/consts";
import { Loader, Table, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

export const RequestTable = () => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["requestsTable"],
    queryFn: async () => {
      const data = await GetAllRequest();
      return data;
    },

    refetchOnWindowFocus: false,
  });
  if (isFetching) return <Loader color={"slate.9"} />;
  if (isError) return <ErrorUI>{notificationErrors.get.message}</ErrorUI>;
  if (!data || data.length == 0) {
    return <Text>Записи не найдены</Text>;
  }

  const rows = data.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.info}</Table.Td>
      <Table.Td>{element.telephone}</Table.Td>
      <Table.Td>
        <EditRequestButton data={element} />
      </Table.Td>
      <Table.Td>
        <DeleteRequestButton id={element.id} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={600} w={"100%"}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ФИО</Table.Th>
            <Table.Th>Почта</Table.Th>
            <Table.Th>Информация</Table.Th>
            <Table.Th>Телефон</Table.Th>
            <Table.Th>Изменить</Table.Th>
            <Table.Th>Удалить</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};

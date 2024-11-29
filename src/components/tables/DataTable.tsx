import { GetAllData } from "@/api/data";
import { ErrorUI } from "@/components";
import { DeleteDataButton } from "@/components/DeleteDataButton";
import { EditDataButton } from "@/components/EditDataButton";
import { notificationErrors } from "@/utils/consts";
import { Loader, Table, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

export const DataTable = () => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["dataTable"],
    queryFn: async () => {
      const data = await GetAllData();
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
      <Table.Td>{element.bin}</Table.Td>
      <Table.Td>{element.status}</Table.Td>
      <Table.Td>
        {element.data.length > 40
          ? element.data.slice(0, 40) + "..."
          : element.data}
      </Table.Td>
      <Table.Td>{element.telephone}</Table.Td>
      <Table.Td>
        <EditDataButton data={element} />
      </Table.Td>
      <Table.Td>
        <DeleteDataButton id={element.id} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={600} w={"100%"}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>БИН</Table.Th>
            <Table.Th>Статус</Table.Th>
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

import { DeleteRequestButton } from "@/components/DeleteRequestButton";
import { EditRequestButton } from "@/components/EditRequestButton";
import { TableContainer } from "@/components/tables/TableContainer";
import { Table } from "@mantine/core";

export const RequestTable = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.info}</Table.Td>
      <Table.Td>{element.telehpone}</Table.Td>
      <Table.Td>
        <EditRequestButton data={element} />
      </Table.Td>
      <Table.Td>
        <DeleteRequestButton id={element.id} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <TableContainer>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ФИО</Table.Th>
            <Table.Th>Почта</Table.Th>
            <Table.Th>Инфо</Table.Th>
            <Table.Th>Телефон</Table.Th>
            <Table.Th>Изменить</Table.Th>
            <Table.Th>Удалить</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </TableContainer>
  );
};

const elements = [
  {
    id: 692,
    name: "Name 563",
    telehpone: "+7965679843",
    email: "user563@example.com",
    info: "Info for Name 563",
  },
  {
    id: 859,
    name: "Name 739",
    telehpone: "+7956348291",
    email: "user739@example.com",
    info: "Info for Name 739",
  },
  {
    id: 902,
    name: "Name 184",
    telehpone: "+7982564023",
    email: "user184@example.com",
    info: "Info for Name 184",
  },
  {
    id: 453,
    name: "Name 418",
    telehpone: "+7948935412",
    email: "user418@example.com",
    info: "Info for Name 418",
  },
  {
    id: 384,
    name: "Name 719",
    telehpone: "+7982041530",
    email: "user719@example.com",
    info: "Info for Name 719",
  },
  {
    id: 175,
    name: "Name 927",
    telehpone: "+7958972354",
    email: "user927@example.com",
    info: "Info for Name 927",
  },
  {
    id: 98,
    name: "Name 268",
    telehpone: "+7973245168",
    email: "user268@example.com",
    info: "Info for Name 268",
  },
  {
    id: 332,
    name: "Name 465",
    telehpone: "+7923125781",
    email: "user465@example.com",
    info: "Info for Name 465",
  },
  {
    id: 239,
    name: "Name 328",
    telehpone: "+7908456123",
    email: "user328@example.com",
    info: "Info for Name 328",
  },
  {
    id: 562,
    name: "Name 539",
    telehpone: "+7917819032",
    email: "user539@example.com",
    info: "Info for Name 539",
  },
  {
    id: 204,
    name: "Name 651",
    telehpone: "+7927012359",
    email: "user651@example.com",
    info: "Info for Name 651",
  },
  {
    id: 612,
    name: "Name 821",
    telehpone: "+7964521987",
    email: "user821@example.com",
    info: "Info for Name 821",
  },
  {
    id: 134,
    name: "Name 348",
    telehpone: "+7945756943",
    email: "user348@example.com",
    info: "Info for Name 348",
  },
  {
    id: 736,
    name: "Name 755",
    telehpone: "+7912331549",
    email: "user755@example.com",
    info: "Info for Name 755",
  },
  {
    id: 543,
    name: "Name 672",
    telehpone: "+7982476321",
    email: "user672@example.com",
    info: "Info for Name 672",
  },
  {
    id: 109,
    name: "Name 911",
    telehpone: "+7981307426",
    email: "user911@example.com",
    info: "Info for Name 911",
  },
  {
    id: 900,
    name: "Name 330",
    telehpone: "+7978520316",
    email: "user330@example.com",
    info: "Info for Name 330",
  },
  {
    id: 42,
    name: "Name 137",
    telehpone: "+7915869042",
    email: "user137@example.com",
    info: "Info for Name 137",
  },
  {
    id: 183,
    name: "Name 831",
    telehpone: "+7953218794",
    email: "user831@example.com",
    info: "Info for Name 831",
  },
];

import { DeleteDataButton } from "@/components/DeleteDataButton";
import { EditDataButton } from "@/components/EditDataButton";
import { TableContainer } from "@/components/tables/TableContainer";
import { Table } from "@mantine/core";

export const DataTable = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.bin}</Table.Td>
      <Table.Td>{element.status}</Table.Td>
      <Table.Td>{element.data}</Table.Td>
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
    <TableContainer>
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
    </TableContainer>
  );
};
const elements = [
  {
    id: 255,
    status: "active",
    data: "Data #492",
    telephone: "+7896034281",
    bin: "274809451674",
  },
  {
    id: 371,
    status: "inactive",
    data: "Data #18",
    telephone: "+7964532710",
    bin: "384957163302",
  },
  {
    id: 927,
    status: "active",
    data: "Data #916",
    telephone: "+7901234567",
    bin: "238045612370",
  },
  {
    id: 45,
    status: "inactive",
    data: "Data #112",
    telephone: "+7912312345",
    bin: "975420683015",
  },
  {
    id: 858,
    status: "active",
    data: "Data #759",
    telephone: "+7910345678",
    bin: "235423987465",
  },
  {
    id: 516,
    status: "inactive",
    data: "Data #312",
    telephone: "+7978065432",
    bin: "745302907812",
  },
  {
    id: 278,
    status: "active",
    data: "Data #351",
    telephone: "+7974531289",
    bin: "463540628158",
  },
  {
    id: 928,
    status: "inactive",
    data: "Data #467",
    telephone: "+7958142367",
    bin: "189750834625",
  },
  {
    id: 832,
    status: "active",
    data: "Data #241",
    telephone: "+7950135794",
    bin: "283764051428",
  },
  {
    id: 603,
    status: "inactive",
    data: "Data #554",
    telephone: "+7987223441",
    bin: "493710628134",
  },
  {
    id: 825,
    status: "active",
    data: "Data #302",
    telephone: "+7902154321",
    bin: "584930106839",
  },
  {
    id: 493,
    status: "inactive",
    data: "Data #613",
    telephone: "+7919834567",
    bin: "738492016207",
  },
  {
    id: 792,
    status: "active",
    data: "Data #925",
    telephone: "+7912345789",
    bin: "379573019571",
  },
  {
    id: 487,
    status: "inactive",
    data: "Data #718",
    telephone: "+7991234567",
    bin: "438957316702",
  },
  {
    id: 628,
    status: "active",
    data: "Data #413",
    telephone: "+7910876543",
    bin: "975142683004",
  },
  {
    id: 913,
    status: "inactive",
    data: "Data #619",
    telephone: "+7957604321",
    bin: "580732908124",
  },
  {
    id: 173,
    status: "active",
    data: "Data #304",
    telephone: "+7974550321",
    bin: "239084617583",
  },
  {
    id: 452,
    status: "inactive",
    data: "Data #251",
    telephone: "+7903724685",
    bin: "584637299761",
  },
  {
    id: 695,
    status: "active",
    data: "Data #99",
    telephone: "+7979078543",
    bin: "849210376282",
  },
  {
    id: 340,
    status: "inactive",
    data: "Data #707",
    telephone: "+7958612345",
    bin: "230975834627",
  },
];

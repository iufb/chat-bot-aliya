import { Modal, Button, Box, Text, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DeleteIcon } from "lucide-react";

export const DeleteDataButton = ({ id }: { id: number }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Удалить">
        <Box>
          <Text mb={20} fz={"lg"}>
            Вы уверены , что хотите удалить информацию {id} ?
          </Text>
          <Flex justify={"center"} align={"center"} gap={20}>
            <Button color="red.6">Да</Button>
            <Button variant="outline" color="slate.9" onClick={close}>
              Отмена
            </Button>
          </Flex>
        </Box>
      </Modal>
      <Button color="red.6" onClick={open}>
        <DeleteIcon />
      </Button>
    </>
  );
};

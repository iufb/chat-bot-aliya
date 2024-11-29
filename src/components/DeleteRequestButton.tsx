import { DeleteRequestById } from "@/api/requests";
import {
  notificationErrors,
  notificationSuccess,
  queryClient,
} from "@/utils/consts";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/utils/notifications";
import { Box, Button, Flex, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import { DeleteIcon } from "lucide-react";

export const DeleteRequestButton = ({ id }: { id: number }) => {
  const { mutate: deleteRequest, isPending } = useMutation({
    mutationKey: [`deleteData ${id}`],
    mutationFn: async () => {
      await DeleteRequestById(id);
    },
    onSuccess: () => {
      showSuccessNotification(notificationSuccess.delete);
      queryClient.invalidateQueries({ queryKey: ["requestsTable"] });
    },
    onError: (e) => {
      console.log("Delete error :", e);
      showErrorNotification(notificationErrors.delete);
    },
  });

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Удалить">
        <Box>
          <Text mb={20} fz={"lg"}>
            Вы уверены , что хотите удалить запрос {id} ?
          </Text>
          <Flex justify={"center"} align={"center"} gap={20}>
            <Button
              onClick={() => deleteRequest()}
              loading={isPending}
              disabled={isPending}
              color="red.6"
            >
              Да
            </Button>
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

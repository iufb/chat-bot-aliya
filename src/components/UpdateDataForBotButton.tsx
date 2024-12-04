import { UpdateBotData } from "@/api/data";
import { Box, Button, Flex, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";

export const UpdateDataForBotButton = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["bot"],
    mutationFn: UpdateBotData,
  });
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Удалить">
        <Box>
          <Text mb={20} fz={"lg"}>
            Вы уверены , что хотите обновить данные?
          </Text>
          <Flex justify={"center"} align={"center"} gap={20}>
            <Button
              onClick={() => mutate()}
              loaderProps={{
                color: "slate.9",
              }}
              variant="filled"
              bg={"slate.9"}
              loading={isPending}
              disabled={isPending}
            >
              Да
            </Button>
            <Button variant="outline" color="slate.9" onClick={close}>
              Отмена
            </Button>
          </Flex>
        </Box>
      </Modal>
      <Button onClick={open} variant="outline">
        Обновить данные для бота
      </Button>
    </>
  );
};

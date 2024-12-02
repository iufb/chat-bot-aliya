import { Button, Flex, Modal, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Eye } from "lucide-react";

export const ShowContentModal = ({
  value,
}: {
  value: Record<string, string>;
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal fullScreen opened={opened} onClose={close}>
        <Flex p={40} direction="column" gap={10}>
          {Object.keys(value).map((key, idx) => (
            <Flex key={idx} gap={10} direction="column">
              <Title order={3}>{key}</Title>
              <Text
                bg={"slate.2"}
                p={15}
                style={{
                  borderRadius: 5,
                }}
              >
                {value[key]}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Modal>

      <Button color="slate.9" onClick={open}>
        <Eye />
      </Button>
    </>
  );
};

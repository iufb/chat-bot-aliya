import { Box, Button, Flex, Modal, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Eye } from "lucide-react";

export const ShowContentModal = ({
  value,
}: {
  value: Record<string, string>;
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  console.log(value["Информация"].trim().split("\n").join("<br />"));

  return (
    <>
      <Modal fullScreen opened={opened} onClose={close}>
        <Flex p={40} direction="column" gap={10}>
          {Object.keys(value).map((key, idx) => (
            <Flex key={idx} gap={10} direction="column">
              <Title order={3}>{key}</Title>
              <Box
                bg={"slate.2"}
                p={15}
                style={{
                  borderRadius: 5,
                }}
              >
                {key == "Информация" ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: value[key].trim().split("\n").join("<br/>"),
                    }}
                  />
                ) : (
                  <Text>{value[key]}</Text>
                )}
              </Box>
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

import { UploadWordForm } from "@/components/forms";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const CreateDataWordButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal size={"auto"} opened={opened} onClose={close}>
        <UploadWordForm close={close} />
      </Modal>

      <Button color="slate.9" onClick={open}>
        Добавить (Word)
      </Button>
    </>
  );
};

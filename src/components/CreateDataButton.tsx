import { CreateDataForm } from "@/components/forms";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const CreateDataButton = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close}>
        <CreateDataForm />
      </Modal>
      <Button color="slate.9" onClick={open}>
        Создать
      </Button>
    </>
  );
};

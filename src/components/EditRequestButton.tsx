import { UpdateRequestForm } from "@/components/forms/UpdateRequestForm";
import { RequestType } from "@/utils/types";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { EditIcon } from "lucide-react";
interface EditRequestButtonProps {
  data: RequestType;
}
export const EditRequestButton = ({ data }: EditRequestButtonProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal size={"auto"} opened={opened} onClose={close}>
        <UpdateRequestForm data={data} />
      </Modal>
      <Button variant="base" onClick={open}>
        <EditIcon />
      </Button>
    </>
  );
};

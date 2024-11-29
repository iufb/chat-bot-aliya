import { UpdateDataForm } from "@/components/forms";
import { DataType } from "@/utils/types";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { EditIcon } from "lucide-react";
interface EditDataButtonProps {
  data: DataType;
}
export const EditDataButton = ({ data }: EditDataButtonProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal size={"auto"} opened={opened} onClose={close}>
        <UpdateDataForm data={data} />
      </Modal>

      <Button color="slate.9" onClick={open}>
        <EditIcon />
      </Button>
    </>
  );
};

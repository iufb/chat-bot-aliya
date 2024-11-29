import { UpdateDataWord } from "@/api/data";
import { FormContainer } from "@/components/forms/FormContainer";
import { notificationErrors, notificationSuccess } from "@/utils/consts";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/utils/notifications";
import { Button, FileInput, rem, Title } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { File } from "lucide-react";
import { useState } from "react";

export const UploadWordForm = ({ close }: { close: () => void }) => {
  const [file, setFile] = useState<File | null>();
  const { mutate: uploadFile, isPending } = useMutation({
    mutationKey: ["uploadWord"],
    mutationFn: async () => {
      if (file) await UpdateDataWord({ company_list: file });
    },
    onSuccess: () => {
      showSuccessNotification(notificationSuccess.file);
      close();
    },
    onError: () => {
      showErrorNotification(notificationErrors.file);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        uploadFile();
      }}
    >
      <FormContainer>
        <Title order={2}>Добавить компанию (Word)</Title>
        <FileInput
          value={file}
          onChange={(value) => {
            setFile(value);
          }}
          required
          clearable
          leftSection={<File style={{ width: rem(18), height: rem(18) }} />}
          label="Информация о компании (Word)"
          placeholder="Файл"
          leftSectionPointerEvents="none"
          accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
        <Button
          type="submit"
          loading={isPending}
          disabled={isPending}
          bg={"slate.9"}
        >
          Добавить
        </Button>
      </FormContainer>
    </form>
  );
};

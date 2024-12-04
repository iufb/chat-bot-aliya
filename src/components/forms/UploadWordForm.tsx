import { UpdateDataWord } from "@/api/data";
import { FormContainer } from "@/components/forms/FormContainer";
import {
  notificationErrors,
  notificationSuccess,
  queryClient,
} from "@/utils/consts";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/utils/notifications";
import { Button, FileInput, rem, Title } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { File } from "lucide-react";
import { useState } from "react";
import { Error } from "../Error";
const type =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
export const UploadWordForm = ({ close }: { close: () => void }) => {
  const [file, setFile] = useState<File | null>();
  const [error, setError] = useState("");
  const { mutate: uploadFile, isPending } = useMutation({
    mutationKey: ["uploadWord"],
    mutationFn: async () => {
      if (file) await UpdateDataWord({ company_list: file });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dataTable"] });
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
        setError("");
        e.preventDefault();
        if (file && file.type !== type) {
          setError("Необходимо прикрепить .docx файл.");
          return;
        }

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
          accept=".docx"
        />
        <Error>{error}</Error>
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

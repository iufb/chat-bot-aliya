import { CreateData } from "@/api/data";
import { errorsConstants } from "@/components/forms";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/utils/notifications";
import { DataDTO } from "@/utils/types";
import { Button, InputBase, Textarea, TextInput, Title } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { FormContainer } from "./FormContainer";
import {
  notificationErrors,
  notificationSuccess,
  queryClient,
} from "@/utils/consts";

export const CreateDataForm = ({ close }: { close: () => void }) => {
  const { mutate: CreateDataMutation, isPending } = useMutation({
    mutationKey: ["createData"],
    mutationFn: CreateData,
    onError: (e) => {
      showErrorNotification(notificationErrors.create);
      console.log("CreateDataMutation error : ", e);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dataTable"] });
      showSuccessNotification(notificationSuccess.create);
      close();
    },
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DataDTO>();
  const onSubmit: SubmitHandler<DataDTO> = (data) => {
    console.log(data);
    CreateDataMutation({
      ...data,
      telephone: data.telephone.replace(/[()\s-]/g, ""),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Title order={2}>Добавить компанию</Title>
        <TextInput
          required
          label="Статус"
          {...register("status", { required: errorsConstants.required })}
          error={errors.status?.message}
        />
        <Textarea
          required
          autosize
          minRows={4}
          label="Информация"
          {...register("data", { required: errorsConstants.required })}
          error={errors.data?.message}
        />
        <Controller
          name={"telephone"}
          control={control}
          rules={{ required: errorsConstants.required }}
          render={({ field: { value, onChange } }) => (
            <InputBase
              required
              label="Телефон"
              value={value}
              onChange={onChange}
              component={IMaskInput}
              mask="+7 (000) 000-0000"
              error={errors.telephone?.message}
            />
          )}
        />
        <TextInput
          required
          type="number"
          label="БИН"
          {...register("bin", {
            required: errorsConstants.required,
            minLength: {
              value: 12,
              message: errorsConstants.binLow,
            },
            maxLength: {
              value: 12,
              message: errorsConstants.binHigh,
            },
          })}
          error={errors.bin?.message}
        />
        <Button
          type="submit"
          disabled={isPending}
          loading={isPending}
          color="slate.9"
        >
          Создать
        </Button>
      </FormContainer>
    </form>
  );
};

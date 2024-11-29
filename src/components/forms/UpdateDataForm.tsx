import { errorsConstants } from "@/components/forms";
import { DataDTO, DataType } from "@/utils/types";
import { Button, InputBase, Textarea, TextInput, Title } from "@mantine/core";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { FormContainer } from "./FormContainer";
import { useMutation } from "@tanstack/react-query";
import { UpdateData } from "@/api/data";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/utils/notifications";
import {
  notificationErrors,
  notificationSuccess,
  queryClient,
} from "@/utils/consts";
interface UpdateDataFormProps {
  data: DataDTO;
}
export const UpdateDataForm = ({ data }: UpdateDataFormProps) => {
  const { mutate: UpdateDataMutation, isPending } = useMutation({
    mutationKey: ["updateData"],
    mutationFn: UpdateData,
    onError: (e) => {
      console.log("UpdateDataMutation error : ", e);
      showErrorNotification(notificationErrors.update);
    },
    onSuccess: () => {
      showSuccessNotification(notificationSuccess.update);
      queryClient.invalidateQueries({ queryKey: ["dataTable"] });
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DataType>({ defaultValues: data });
  const onSubmit: SubmitHandler<DataType> = (data) => {
    console.log(data);
    UpdateDataMutation({
      data: {
        ...data,
        telephone: data.telephone.replace(/[()\s-]/g, ""),
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Title order={3}>Изменить данные компании</Title>
        <TextInput
          label="Статус"
          {...register("status", { required: errorsConstants.required })}
          error={errors.status?.message}
        />
        <Textarea
          label="Информация"
          minRows={4}
          autosize
          {...register("data", { required: errorsConstants.required })}
          error={errors.data?.message}
        />
        <Controller
          name={"telephone"}
          control={control}
          rules={{ required: errorsConstants.required }}
          render={({ field: { value, onChange } }) => (
            <InputBase
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
          loading={isPending}
          disabled={isPending}
          type="submit"
          color="slate.9"
        >
          Изменить
        </Button>
      </FormContainer>
    </form>
  );
};

import { UpdateRequest } from "@/api/requests";
import { errorsConstants } from "@/components/forms";
import {
  notificationErrors,
  notificationSuccess,
  queryClient,
} from "@/utils/consts";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/utils/notifications";
import { RequestType } from "@/utils/types";
import { Button, InputBase, Textarea, TextInput, Title } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { FormContainer } from "./FormContainer";

export const UpdateRequestForm = ({ data }: { data: RequestType }) => {
  const { mutate: UpdateRequestMutation, isPending } = useMutation({
    mutationKey: ["updateRequest"],
    mutationFn: UpdateRequest,
    onError: (e) => {
      console.log("UpdateRequestMutation error : ", e);
      showErrorNotification(notificationErrors.update);
    },
    onSuccess: () => {
      showSuccessNotification(notificationSuccess.update);
      queryClient.invalidateQueries({ queryKey: ["requestsTable"] });
    },
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RequestType>({ defaultValues: data });
  const onSubmit: SubmitHandler<RequestType> = (data) => {
    console.log(data);
    UpdateRequestMutation({ data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Title order={2}>Изменить данные заявки</Title>
        <TextInput
          label="ФИО"
          {...register("name", { required: errorsConstants.required })}
          error={errors.name?.message}
        />
        <TextInput
          label="Почта"
          type="email"
          {...register("email", { required: errorsConstants.required })}
          error={errors.email?.message}
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
        <Textarea
          minRows={4}
          autosize
          label="Информация"
          {...register("info", {
            required: errorsConstants.required,
          })}
          error={errors.info?.message}
        />
        <Button
          type="submit"
          color="slate.9"
          loading={isPending}
          disabled={isPending}
        >
          Создать
        </Button>
      </FormContainer>
    </form>
  );
};

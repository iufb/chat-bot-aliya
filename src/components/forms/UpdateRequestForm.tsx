import { errorsConstants } from "@/components/forms";
import { RequestDTO, RequestType } from "@/utils/types";
import { Button, InputBase, TextInput, Title } from "@mantine/core";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { FormContainer } from "./FormContainer";

export const UpdateRequestForm = ({ data }: { data: RequestType }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RequestDTO>({ defaultValues: data });
  const onSubmit: SubmitHandler<RequestDTO> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Title order={1}>Создать</Title>
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
          name={"telehpone"}
          control={control}
          rules={{ required: errorsConstants.required }}
          render={({ field: { value, onChange } }) => (
            <InputBase
              label="Телефон"
              value={value}
              onChange={onChange}
              component={IMaskInput}
              mask="+7 (000) 000-0000"
              error={errors.telehpone?.message}
            />
          )}
        />
        <TextInput
          label="Информация"
          {...register("info", {
            required: errorsConstants.required,
          })}
          error={errors.info?.message}
        />
        <Button type="submit" color="slate.9">
          Создать
        </Button>
      </FormContainer>
    </form>
  );
};

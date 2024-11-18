import { errorsConstants } from "@/components/forms";
import { DataDTO } from "@/utils/types";
import { Button, InputBase, TextInput, Title } from "@mantine/core";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { FormContainer } from "./FormContainer";

export const CreateDataForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DataDTO>();
  const onSubmit: SubmitHandler<DataDTO> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Title order={1}>Создать</Title>
        <TextInput
          label="Статус"
          {...register("status", { required: errorsConstants.required })}
          error={errors.status?.message}
        />
        <TextInput
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
              message: errorsConstants.bin,
            },
            maxLength: {
              value: 12,
              message: errorsConstants.bin,
            },
          })}
          error={errors.bin?.message}
        />
        <Button type="submit" color="slate.9">
          Создать
        </Button>
      </FormContainer>
    </form>
  );
};

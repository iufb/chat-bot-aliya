import { LoginRequest } from "@/api/login";
import { FormContainer } from "@/components/forms/FormContainer";
import { notificationErrors, notificationSuccess } from "@/utils/consts";
import { setCookie } from "@/utils/cookies";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/utils/notifications";
import { LoginRequestType } from "@/utils/types";
import { Button, TextInput, Title } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate: loginRequest, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: LoginRequest,
    onSuccess: (data) => {
      setCookie("token", data.token);
      showSuccessNotification(notificationSuccess.login);
      navigate("/dashboard");
    },
    onError: (e) => {
      showErrorNotification({
        title: notificationErrors.login.title,
        message: notificationErrors.login.message,
      });
      console.log("Login error : ", e);
    },
  });
  const { register, handleSubmit } = useForm<LoginRequestType>();
  const onSubmit: SubmitHandler<LoginRequestType> = (data) => {
    console.log(data);
    loginRequest(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <Title order={1}>Вход</Title>
        <TextInput required {...register("username")} label="Логин" />
        <TextInput
          required
          {...register("password")}
          label="Пароль"
          type="password"
        />
        <Button
          type="submit"
          loading={isPending}
          disabled={isPending}
          color="slate.8"
        >
          Войти
        </Button>
      </FormContainer>
    </form>
  );
};

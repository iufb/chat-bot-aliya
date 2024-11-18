import { FormContainer } from "@/components/forms/FormContainer";
import { Button, TextInput, Title } from "@mantine/core";

export const LoginForm = () => {
  return (
    <form>
      <FormContainer>
        <Title order={1}>Вход</Title>
        <TextInput label="Логин" />
        <TextInput label="Пароль" type="password" />
        <Button color="slate.8">Войти</Button>
      </FormContainer>
    </form>
  );
};

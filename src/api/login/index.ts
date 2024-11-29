import { customFetch } from "@/api";
import { LoginRequestType } from "@/utils/types";

export const LoginRequest = (data: LoginRequestType) => {
  return customFetch(
    {
      method: "POST",
      path: "api-token-auth/",
      body: { json: data },
    },
    false,
  );
};

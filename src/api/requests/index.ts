import { customFetch } from "..";
import { RequestType } from "../../utils/types";

export const GetAllRequest = (): Promise<RequestType[]> => {
  return customFetch({ path: "/", method: "GET" });
};
export const GetRequestById = (id: number): Promise<RequestType> => {
  return customFetch({ path: `/${id}`, method: "GET" });
};
export const UpdateRequest = ({
  id,
  data,
}: {
  data: Partial<RequestType>;
  id: number;
}) => {
  return customFetch({ path: `/${id}`, method: "PATCH", body: { json: data } });
};

export const DeleteRequestById = (id: number) => {
  return customFetch({ path: `/${id}`, method: "DELETE" });
};

import { customFetch } from "..";
import { RequestType } from "../../utils/types";

export const GetAllRequest = (): Promise<RequestType[]> => {
  return customFetch({ path: "requests", method: "GET" });
};
export const GetRequestById = (id: number): Promise<RequestType> => {
  return customFetch({ path: `requests/${id}`, method: "GET" });
};
export const UpdateRequest = ({ data }: { data: RequestType }) => {
  return customFetch({
    path: `requests/${data.id}/`,
    method: "PATCH",
    body: { json: data },
  });
};

export const DeleteRequestById = (id: number) => {
  return customFetch({ path: `requests/${id}/`, method: "DELETE" });
};

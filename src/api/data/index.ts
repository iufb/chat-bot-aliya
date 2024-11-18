import { customFetch } from "..";
import { DataDTO, DataType } from "../../utils/types";

export const CreateData = (data: DataDTO): Promise<DataType> => {
  return customFetch({ path: "/", method: "POST", body: { json: data } });
};
export const GetAllData = (): Promise<DataType[]> => {
  return customFetch({ path: "/", method: "GET" });
};
export const GetDataById = (id: number): Promise<DataType> => {
  return customFetch({ path: `/${id}`, method: "GET" });
};
export const UpdateData = ({
  id,
  data,
}: {
  data: Partial<DataType>;
  id: number;
}) => {
  return customFetch({ path: `/${id}`, method: "PATCH", body: { json: data } });
};

export const DeleteDataById = (id: number) => {
  return customFetch({ path: `/${id}`, method: "DELETE" });
};

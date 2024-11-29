import { customFetch } from "..";
import { DataDTO, DataType } from "../../utils/types";

export const CreateData = (data: DataDTO): Promise<DataType> => {
  return customFetch({ path: "data/", method: "POST", body: { json: data } });
};
export const GetAllData = (): Promise<DataType[]> => {
  return customFetch({ path: "data", method: "GET" });
};
export const GetDataById = (id: number): Promise<DataType> => {
  return customFetch({ path: `data/${id}`, method: "GET" });
};
export const UpdateBotData = () => {
  return customFetch({ path: "upload-file", method: "POST" });
};
export const UpdateDataWord = (data: { company_list: File }) => {
  return customFetch({
    path: "add_company_word",
    method: "POST",
    body: { multipart: data },
  });
};
export const UpdateData = ({ data }: { data: DataType }) => {
  return customFetch({
    path: `data/${data.id}/`,
    method: "PATCH",
    body: { json: data },
  });
};

export const DeleteDataById = ({ id }: { id: number }): Promise<unknown> => {
  return customFetch({ path: `data/${id}/`, method: "DELETE" });
};

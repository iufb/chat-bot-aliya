export type DataType = {
  id: number;
  status: string;
  data: string;
  telephone: string;
  bin: string;
};
export type RequestType = {
  id: number;
  name: string;
  telephone: string;
  email: string;
  info: string;
};
export type LoginRequestType = {
  username: string;
  password: string;
};
export type DataDTO = Omit<DataType, "id">;
export type RequestDTO = Omit<RequestType, "id">;

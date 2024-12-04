import { DataType, RequestType } from "./types";

export function searchArrayDatatype(array: DataType[], query: string) {
  const lowerQuery = query.toLowerCase();
  return array.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(lowerQuery)
    )
  );
}
export function searchArrayRequests(array: RequestType[], query: string) {
  const lowerQuery = query.toLowerCase();
  return array.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(lowerQuery)
    )
  );
}

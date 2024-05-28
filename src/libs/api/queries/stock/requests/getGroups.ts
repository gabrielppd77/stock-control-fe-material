import api from "@libs/api/api";

import { StockGroupDTO } from "../dtos/StockGroupDTO";

export async function getGroups() {
  const response = await api.get<StockGroupDTO[]>("/Stock");
  return response.data;
}

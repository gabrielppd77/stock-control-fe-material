import api from "@libs/api/api";

import { StockGroupDTO } from "../dtos/StockGroupDTO";

interface RequestParams {
  supplierId: string;
}

export async function getGroups(params: RequestParams) {
  const response = await api.get<StockGroupDTO[]>("/Stock", {
    params,
  });
  return response.data;
}

import api from "@libs/api/api";

import { ProductDTO } from "../../product/dtos/ProductDTO";

interface RequestParams {
  groupId: string;
}

export async function getProducts(params: RequestParams) {
  const response = await api.get<ProductDTO[]>("/Stock/GetProducts", {
    params,
  });
  return response.data;
}

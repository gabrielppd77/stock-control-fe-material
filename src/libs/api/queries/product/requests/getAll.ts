import api from "@libs/api/api";

import { ProductDTO } from "../dtos/ProductDTO";

export async function getAll() {
  const response = await api.get<ProductDTO[]>("/Product");
  return response.data;
}

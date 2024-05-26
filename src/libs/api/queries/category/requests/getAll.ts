import api from "@libs/api/api";

import { CategoryDTO } from "../dtos/CategoryDTO";

export async function getAll() {
  const response = await api.get<CategoryDTO[]>("/Category");
  return response.data;
}

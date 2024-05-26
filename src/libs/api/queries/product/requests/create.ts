import api from "@libs/api/api";

import { ProductCreateDTO } from "../dtos/ProductCreateDTO";

export async function create(data: ProductCreateDTO) {
  await api.post("/Product", data);
}

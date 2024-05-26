import api from "@libs/api/api";

import { CategoryCreateDTO } from "../dtos/CategoryCreateDTO";

export async function create(data: CategoryCreateDTO) {
  await api.post("/Category", data);
}

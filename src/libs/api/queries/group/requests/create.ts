import api from "@libs/api/api";

import { GroupCreateDTO } from "../dtos/GroupCreateDTO";

export async function create(data: GroupCreateDTO) {
  await api.post("/Group", data);
}

import api from "@libs/api/api";

import { GroupDTO } from "../dtos/GroupDTO";

export async function getAll() {
  const response = await api.get<GroupDTO[]>("/Group");
  return response.data;
}

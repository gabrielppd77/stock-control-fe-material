import api from "@libs/api/api";

import { SupplierDTO } from "../dtos/SupplierDTO";

export async function getAll() {
  const response = await api.get<SupplierDTO[]>("/Supplier");
  return response.data;
}

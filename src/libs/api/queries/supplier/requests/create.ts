import api from "@libs/api/api";

import { SupplierCreateDTO } from "../dtos/SupplierCreateDTO";

export async function create(data: SupplierCreateDTO) {
  await api.post("/Supplier", data);
}

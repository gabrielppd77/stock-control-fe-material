import api from "@libs/api/api";
import { SupplierUpdateDTO } from "../dtos/SupplierUpdateDTO";

interface UpdateProps {
  id: string;
  data: SupplierUpdateDTO;
}

export async function update({ id, data }: UpdateProps) {
  await api.put("/Supplier", data, {
    params: {
      supplierId: id,
    },
  });
}

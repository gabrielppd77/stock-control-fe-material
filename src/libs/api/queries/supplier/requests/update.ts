import api from "@libs/api/api";
import { SupplierUpdateDTO } from "../dtos/SupplierUpdateDTO";

interface UpdateProps {
  supplierId: string;
  data: SupplierUpdateDTO;
}

export async function update({ supplierId, data }: UpdateProps) {
  await api.put("/Supplier", data, {
    params: {
      supplierId,
    },
  });
}

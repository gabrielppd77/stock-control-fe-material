import api from "@libs/api/api";
import { ProductUpdateDTO } from "../dtos/ProductUpdateDTO";

interface UpdateProps {
  id: string;
  data: ProductUpdateDTO;
}

export async function update({ id, data }: UpdateProps) {
  await api.put("/Product", data, {
    params: {
      productId: id,
    },
  });
}

import api from "@libs/api/api";

import { ProductDTO } from "../../product/dtos/ProductDTO";
import { ProductStatusEnum } from "@libs/api/enums/ProductStatusEnum";

interface RequestProps {
  params: { groupId: string };
  data: ProductStatusEnum[];
}

export async function getProducts({ params, data }: RequestProps) {
  const response = await api.post<ProductDTO[]>("/Stock/GetProducts", data, {
    params,
  });
  return response.data;
}

import { ProductStatusEnum } from "@libs/api/enums/ProductStatusEnum";

export interface ProductDTO {
  id: string;
  code: number;
  name: string;
  groupId: string;
  supplierId: string;
  categoryId: string;
  nrClient: string | null;
  observation: string | null;
  status: ProductStatusEnum;
}

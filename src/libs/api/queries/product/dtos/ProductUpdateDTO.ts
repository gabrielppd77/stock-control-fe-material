import { ProductStatusEnum } from "@libs/api/enums/ProductStatusEnum";

export interface ProductUpdateDTO {
  code: number;
  name: string;
  groupId: string;
  supplierId: string;
  categoryId: string;
  nrClient: string | null;
  observation: string | null;
  status: ProductStatusEnum;
}

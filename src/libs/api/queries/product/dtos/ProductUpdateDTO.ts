import { ProductStatusEnum } from "@libs/api/enums/ProductStatusEnum";

export interface ProductUpdateDTO {
  code: number;
  name: string;
  groupId: string;
  nrClient: string | null;
  observation: string | null;
  status: ProductStatusEnum;
}

export interface ProductCreateDTO {
  name: string;
  groupId: string;
  supplierId: string;
  categoryId: string;
  nrClient: string | null;
  observation: string | null;
}

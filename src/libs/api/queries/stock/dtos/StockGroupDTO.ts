export interface StockGroupDTO {
  id: string;
  supplierId: string;
  code: number;
  name: string;
  avaiableCount: number;
  preparingCount: number;
  soldCount: number;
}

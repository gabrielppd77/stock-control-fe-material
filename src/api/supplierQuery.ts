import { useQuery } from "@tanstack/react-query";
import api from "./api";

import { SupplierDTO } from "./SupplierDTO";

const supplierGetQuery = "supplier-get";

export function useSupplierQuery() {
  async function handleRequest() {
    const response = await api.get<SupplierDTO[]>("/Supplier");
    return response.data;
  }
  return useQuery({
    queryKey: [supplierGetQuery],
    queryFn: handleRequest,
  });
}

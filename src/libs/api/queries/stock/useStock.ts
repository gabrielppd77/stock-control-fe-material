import { useQuery } from "@tanstack/react-query";

import { getGroups } from "./requests/getGroups";
import { getProducts } from "./requests/getProducts";

import { extractError } from "@libs/alert";

export const queryStockGetGroups = ["stock-getGroups"];
export const queryStockGetProducts = ["stock-getProducts"];

export function useStockGroupsGroups(supplierId?: string) {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: [...queryStockGetGroups, supplierId],
    queryFn: () => getGroups({ supplierId }),
  });

  if (error) extractError(error);

  return { data, isLoading, isFetching };
}

export function useStockGroupsProducts(groupId: string) {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: [...queryStockGetProducts, groupId],
    queryFn: () => getProducts({ groupId }),
  });

  if (error) extractError(error);

  return { data, isLoading, isFetching };
}

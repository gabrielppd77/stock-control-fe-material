import { useQuery } from "@tanstack/react-query";

import { getGroups } from "./requests/getGroups";

import { extractError } from "@libs/alert";

export const queryStockGetGroups = ["stock-getGroups"];

export function useStockGroups(supplierId: string) {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: [...queryStockGetGroups, supplierId],
    queryFn: () => getGroups({ supplierId }),
  });

  if (error) extractError(error);

  return { data, isLoading, isFetching };
}

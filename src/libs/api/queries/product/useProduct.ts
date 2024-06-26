import { useMutation, useQueryClient } from "@tanstack/react-query";

import { create } from "./requests/create";
import { update } from "./requests/update";
import { remove } from "./requests/remove";
import { multiplyProduct } from "./requests/multiplyProduct";

import { extractError } from "@libs/alert";
import { notifyCreate, notifyUpdate, notifyRemove } from "@libs/notification";
import { queryStockGetGroups, queryStockGetProducts } from "../stock/useStock";

export function useProductCreate() {
  const queryClient = useQueryClient();

  const { mutateAsync: mutateAsyncCreate, isPending: isLoadingCreate } =
    useMutation({
      mutationFn: create,
      onSuccess: () => {
        notifyCreate();
        queryClient.invalidateQueries({
          queryKey: queryStockGetGroups,
        });
        queryClient.invalidateQueries({
          queryKey: queryStockGetProducts,
        });
      },
      onError: extractError,
    });

  return {
    mutateAsyncCreate,
    isLoadingCreate,
  };
}

export function useProductUpdate() {
  const queryClient = useQueryClient();

  const { mutateAsync: mutateAsyncUpdate, isPending: isLoadingUpdate } =
    useMutation({
      mutationFn: update,
      onSuccess: () => {
        notifyUpdate();
        queryClient.invalidateQueries({
          queryKey: queryStockGetGroups,
        });
        queryClient.invalidateQueries({
          queryKey: queryStockGetProducts,
        });
      },
      onError: extractError,
    });

  return {
    mutateAsyncUpdate,
    isLoadingUpdate,
  };
}

export function useProductDelete() {
  const queryClient = useQueryClient();

  const { mutateAsync: mutateAsyncDelete, isPending: isLoadingDelete } =
    useMutation({
      mutationFn: remove,
      onSuccess: () => {
        notifyRemove();
        queryClient.invalidateQueries({
          queryKey: queryStockGetGroups,
        });
        queryClient.invalidateQueries({
          queryKey: queryStockGetProducts,
        });
      },
      onError: extractError,
    });

  return {
    mutateAsyncDelete,
    isLoadingDelete,
  };
}

export function useProductMultiplyProduct() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: mutateAsyncMultiplyProduct,
    isPending: isLoadingMultiplyProduct,
  } = useMutation({
    mutationFn: multiplyProduct,
    onSuccess: () => {
      notifyCreate();
      queryClient.invalidateQueries({
        queryKey: queryStockGetGroups,
      });
      queryClient.invalidateQueries({
        queryKey: queryStockGetProducts,
      });
    },
    onError: extractError,
  });

  return {
    mutateAsyncMultiplyProduct,
    isLoadingMultiplyProduct,
  };
}

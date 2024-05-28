import { useMutation, useQueryClient } from "@tanstack/react-query";

import { create } from "./requests/create";
import { update } from "./requests/update";
import { remove } from "./requests/remove";

import { extractError } from "@libs/alert";
import { notifyCreate, notifyUpdate, notifyRemove } from "@libs/notification";
import { queryStockGetGroups } from "../stock/useStock";

export function useGroupCreate() {
  const queryClient = useQueryClient();

  const { mutateAsync: mutateAsyncCreate, isPending: isLoadingCreate } =
    useMutation({
      mutationFn: create,
      onSuccess: () => {
        notifyCreate();
        queryClient.invalidateQueries({
          queryKey: queryStockGetGroups,
        });
      },
      onError: extractError,
    });

  return {
    mutateAsyncCreate,
    isLoadingCreate,
  };
}

export function useGroupUpdate() {
  const queryClient = useQueryClient();

  const { mutateAsync: mutateAsyncUpdate, isPending: isLoadingUpdate } =
    useMutation({
      mutationFn: update,
      onSuccess: () => {
        notifyUpdate();
        queryClient.invalidateQueries({
          queryKey: queryStockGetGroups,
        });
      },
      onError: extractError,
    });

  return {
    mutateAsyncUpdate,
    isLoadingUpdate,
  };
}

export function useGroupDelete() {
  const queryClient = useQueryClient();

  const { mutateAsync: mutateAsyncDelete, isPending: isLoadingDelete } =
    useMutation({
      mutationFn: remove,
      onSuccess: () => {
        notifyRemove();
        queryClient.invalidateQueries({
          queryKey: queryStockGetGroups,
        });
      },
      onError: extractError,
    });

  return {
    mutateAsyncDelete,
    isLoadingDelete,
  };
}

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getAll } from "./requests/getAll";
import { create } from "./requests/create";
import { update } from "./requests/update";
import { remove } from "./requests/remove";

import { extractError } from "@libs/alert";
import { notifyCreate, notifyUpdate, notifyRemove } from "@libs/notification";

const query = ["supplier"];

export function useSupplierQuery() {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: [...query],
    queryFn: () => getAll(),
  });

  if (error) extractError(error);

  return { data, isLoading, isFetching };
}

export function useSupplierCreate() {
  const queryClient = useQueryClient();

  const { mutateAsync: mutateAsyncCreate, isPending: isLoadingCreate } =
    useMutation({
      mutationFn: create,
      onSuccess: () => {
        notifyCreate();
        queryClient.invalidateQueries({
          queryKey: query,
        });
      },
      onError: extractError,
    });

  return {
    mutateAsyncCreate,
    isLoadingCreate,
  };
}

export function useSupplierUpdate() {
  const queryClient = useQueryClient();

  const { mutateAsync: mutateAsyncUpdate, isPending: isLoadingUpdate } =
    useMutation({
      mutationFn: update,
      onSuccess: () => {
        notifyUpdate();
        queryClient.invalidateQueries({
          queryKey: query,
        });
      },
      onError: extractError,
    });

  return {
    mutateAsyncUpdate,
    isLoadingUpdate,
  };
}

export function useSupplierDelete() {
  const queryClient = useQueryClient();

  const { mutateAsync: mutateAsyncDelete, isPending: isLoadingDelete } =
    useMutation({
      mutationFn: remove,
      onSuccess: () => {
        notifyRemove();
        queryClient.invalidateQueries({
          queryKey: query,
        });
      },
      onError: extractError,
    });

  return {
    mutateAsyncDelete,
    isLoadingDelete,
  };
}

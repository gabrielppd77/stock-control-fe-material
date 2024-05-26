import { Button, IconButton, Stack } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import PageHeader from "@components/PageHeader";
import DataTable from "@components/DataTable";

import {
  useSupplierDelete,
  useSupplierQuery,
} from "@libs/api/queries/supplier/useSupplier";
import { confirmDelete } from "@libs/alert";

import FormCreate from "./FormCreate";
import FormUpdate from "./FormUpdate";
import { useDialogCreate } from "./FormCreate/form";
import { useDialogUpdate } from "./FormUpdate/form";

export default function Supplier() {
  const { data, isLoading, isFetching } = useSupplierQuery();
  const { mutateAsyncDelete, isLoadingDelete } = useSupplierDelete();

  const { open: openCreate, isOpen: isOpenCreate } = useDialogCreate();
  const { open: openUpdate, isOpen: isOpenUpdate } = useDialogUpdate();

  return (
    <Stack gap={1} p={2}>
      <PageHeader
        title="Fornecedores"
        renderRight={<Button onClick={() => openCreate()}>Adicionar</Button>}
      />
      <DataTable
        columns={[
          {
            name: "code",
            label: "Código",
            options: {
              setCellProps: () => ({
                sx: {
                  width: 120,
                },
              }),
            },
          },
          {
            name: "name",
            label: "Nome",
          },
          {
            name: "id",
            label: "Ações",
            options: {
              sort: false,
              setCellProps: () => ({
                sx: {
                  width: 120,
                },
              }),
              customBodyRender: (value) => {
                return (
                  <Stack direction="row" gap={0.5}>
                    <IconButton
                      onClick={() => {
                        const dt = data?.find((d) => d.id === value);
                        openUpdate(dt);
                      }}
                    >
                      <Edit />
                    </IconButton>

                    <IconButton
                      onClick={() =>
                        confirmDelete(
                          async () => await mutateAsyncDelete(value)
                        )
                      }
                    >
                      <Delete />
                    </IconButton>
                  </Stack>
                );
              },
            },
          },
        ]}
        data={data || []}
        isLoading={isLoading}
        isFetching={isFetching || isLoadingDelete}
      />

      {isOpenCreate && <FormCreate />}
      {isOpenUpdate && <FormUpdate />}
    </Stack>
  );
}

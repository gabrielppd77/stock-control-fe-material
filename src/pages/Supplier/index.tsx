import React from "react";

import { Button, IconButton, Stack } from "@mui/material";

import PageHeader from "../../components/PageHeader";

import { Delete, Edit } from "@mui/icons-material";

import {
  useSupplierDelete,
  useSupplierQuery,
} from "@libs/api/queries/supplier/useSupplier";
import { confirmDelete } from "@libs/alert";

import DataTable from "@components/DataTable";

import FormCreate from "./FormCreate";
import FormUpdate from "./FormUpdate";

export default function Supplier() {
  const { data, isLoading, isFetching } = useSupplierQuery();
  const { mutateAsyncDelete, isLoadingDelete } = useSupplierDelete();

  const [isOpen, setOpen] = React.useState(false);
  const [isOpenUpdate, setOpenUpdate] = React.useState(false);

  return (
    <Stack gap={1} p={2}>
      <PageHeader
        title="Fornecedores"
        renderRight={<Button onClick={() => setOpen(true)}>Adicionar</Button>}
      />
      <DataTable
        columns={[
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
                const dt = data?.find((d) => d.id === value);
                if (!dt) return;
                return (
                  <Stack direction="row" gap={0.5}>
                    <IconButton onClick={() => setOpenUpdate(true)}>
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

      <FormCreate onClose={() => setOpen(false)} isOpen={isOpen} />
      <FormUpdate onClose={() => setOpenUpdate(false)} isOpen={isOpenUpdate} />
    </Stack>
  );
}

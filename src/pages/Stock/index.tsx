import React from "react";

import { Button, IconButton, Stack } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import PageHeader from "@components/PageHeader";
import DataTable from "@components/DataTable";
import AutoCompleteSupplier from "@components/AutoCompleteSupplier";

import FormCreate from "./Group/FormCreate";
import FormUpdate from "./Group/FormUpdate";
import TableProducts from "./TableProducts";

import { useStockGroups } from "@libs/api/queries/stock/useStock";
import { useGroupDelete } from "@libs/api/queries/group/useGroup";
import { useDialogCreate } from "./Group/FormCreate/form";
import { useDialogUpdate } from "./Group/FormUpdate/form";

import { confirmDelete } from "@libs/alert";

export default function Stock() {
  const [supplierId, setSupplierId] = React.useState("");
  const { data: _data, isLoading, isFetching } = useStockGroups(supplierId);
  const data = _data || [];

  const { mutateAsyncDelete, isLoadingDelete } = useGroupDelete();

  const { open: openCreate, isOpen: isOpenCreate } = useDialogCreate();
  const { open: openUpdate, isOpen: isOpenUpdate } = useDialogUpdate();

  return (
    <Stack gap={1} p={2}>
      <PageHeader
        title="Estoque"
        renderRight={
          <Button onClick={() => openCreate(supplierId)}>
            Adicionar Grupo
          </Button>
        }
      />
      <AutoCompleteSupplier value={supplierId} onChange={setSupplierId} />
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
            name: "avaiableCount",
            label: "Disponíveis",
            options: {
              sort: false,
              setCellProps: () => ({
                sx: {
                  width: 120,
                },
              }),
            },
          },
          {
            name: "preparingCount",
            label: "Preparando",
            options: {
              sort: false,
              setCellProps: () => ({
                sx: {
                  width: 120,
                },
              }),
            },
          },
          {
            name: "soldCount",
            label: "Vendidos",
            options: {
              sort: false,
              setCellProps: () => ({
                sx: {
                  width: 120,
                },
              }),
            },
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
                        if (dt) {
                          openUpdate(dt);
                        }
                      }}
                    >
                      <Edit fontSize="small" />
                    </IconButton>

                    <IconButton
                      onClick={() =>
                        confirmDelete(
                          async () => await mutateAsyncDelete(value)
                        )
                      }
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Stack>
                );
              },
            },
          },
        ]}
        data={data}
        isLoading={isLoading}
        isFetching={isFetching || isLoadingDelete}
        expandable={{
          renderExpandableRow: (dataIndex) => (
            <TableProducts
              grupoId={data[dataIndex].id}
              data={data[dataIndex].products}
            />
          ),
        }}
        pagination={false}
      />
      {isOpenCreate && <FormCreate />}
      {isOpenUpdate && <FormUpdate />}
    </Stack>
  );
}

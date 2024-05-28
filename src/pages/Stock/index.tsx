import { Button, IconButton, Stack } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import PageHeader from "@components/PageHeader";
import DataTable from "@components/DataTable";

import { useStockGroups } from "@libs/api/queries/stock/useStock";

import TableProducts from "./TableProducts";

import { useDialogCreate } from "@pages/Group/FormCreate/form";
import { useDialogUpdate } from "@pages/Group/FormUpdate/form";

import FormCreate from "@pages/Group/FormCreate";
import FormUpdate from "@pages/Group/FormUpdate";

import { useGroupDelete } from "@libs/api/queries/group/useGroup";
import { confirmDelete } from "@libs/alert";

export default function Stock() {
  const { data: _data, isLoading, isFetching } = useStockGroups();
  const data = _data || [];

  const { mutateAsyncDelete, isLoadingDelete } = useGroupDelete();

  const { open: openCreate, isOpen: isOpenCreate } = useDialogCreate();
  const { open: openUpdate, isOpen: isOpenUpdate } = useDialogUpdate();

  return (
    <Stack gap={1} p={2}>
      <PageHeader title="Estoque" />
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
                        openUpdate(dt);
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
            <TableProducts data={data[dataIndex].products} />
          ),
        }}
        pagination={false}
      />
      <Button onClick={() => openCreate()}>Adicionar Grupo</Button>

      {isOpenCreate && <FormCreate />}
      {isOpenUpdate && <FormUpdate />}
    </Stack>
  );
}

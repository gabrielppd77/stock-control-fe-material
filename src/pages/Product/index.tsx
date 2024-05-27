import { Box, Button, IconButton, Stack, Tooltip } from "@mui/material";
import { Circle, Delete, Edit } from "@mui/icons-material";

import PageHeader from "@components/PageHeader";
import DataTable from "@components/DataTable";

import {
  useProductDelete,
  useProductQuery,
} from "@libs/api/queries/product/useProduct";
import { confirmDelete } from "@libs/alert";

import FormCreate from "./FormCreate";
import FormUpdate from "./FormUpdate";
import { useDialogCreate } from "./FormCreate/form";
import { useDialogUpdate } from "./FormUpdate/form";
import {
  ProductStatusEnum,
  ProductStatusEnumColor,
  ProductStatusEnumLabel,
} from "@libs/api/enums/ProductStatusEnum";

export default function Product() {
  const { data, isLoading, isFetching } = useProductQuery();
  const { mutateAsyncDelete, isLoadingDelete } = useProductDelete();

  const { open: openCreate, isOpen: isOpenCreate } = useDialogCreate();
  const { open: openUpdate, isOpen: isOpenUpdate } = useDialogUpdate();

  return (
    <Stack gap={1} p={2}>
      <PageHeader
        title="Produtos"
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
            name: "status",
            label: "Status",
            options: {
              setCellProps: () => ({
                sx: {
                  width: 120,
                },
              }),
              customBodyRender: (value: ProductStatusEnum) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: ProductStatusEnumColor[value],
                  }}
                >
                  <Tooltip title={ProductStatusEnumLabel[value]}>
                    <Circle fontSize="small" />
                  </Tooltip>
                </Box>
              ),
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
              customBodyRender: (value) => (
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
                      confirmDelete(async () => await mutateAsyncDelete(value))
                    }
                  >
                    <Delete />
                  </IconButton>
                </Stack>
              ),
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

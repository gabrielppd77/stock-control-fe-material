import { Box, Button, Chip, IconButton, Stack, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import DataTable from "@components/DataTable";
import {
  ProductStatusEnum,
  ProductStatusEnumColor,
  ProductStatusEnumLabel,
} from "@libs/api/enums/ProductStatusEnum";

import FormCreate from "./Product/FormCreate";
import FormUpdate from "./Product/FormUpdate";

import { useDialogCreate } from "./Product/FormCreate/form";
import { useDialogUpdate } from "./Product/FormUpdate/form";

import { useProductDelete } from "@libs/api/queries/product/useProduct";

import { confirmDelete } from "@libs/alert";
import { useStockGroupsProducts } from "@libs/api/queries/stock/useStock";

interface TableProductsProps {
  grupoId: string;
  status: ProductStatusEnum[];
}

export default function TableProducts({ grupoId, status }: TableProductsProps) {
  const { data, isLoading, isFetching } = useStockGroupsProducts(
    grupoId,
    status
  );
  const { mutateAsyncDelete, isLoadingDelete } = useProductDelete();

  const { open: openCreate, isOpen: isOpenCreate } = useDialogCreate();
  const { open: openUpdate, isOpen: isOpenUpdate } = useDialogUpdate();

  return (
    <Stack gap={1}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => openCreate(grupoId)}>Adicionar Produto</Button>
      </Box>
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
            name: "nrClient",
            label: "Cliente",
          },
          {
            name: "observation",
            label: "Observação",
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
                <Chip
                  label={ProductStatusEnumLabel[value]}
                  sx={{
                    backgroundColor: ProductStatusEnumColor[value],
                    color: "common.white",
                  }}
                  size="small"
                />
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
                  <Tooltip title="Editar">
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
                  </Tooltip>

                  <Tooltip title="Remover">
                    <IconButton
                      onClick={() =>
                        confirmDelete(
                          async () => await mutateAsyncDelete(value)
                        )
                      }
                    >
                      <Delete fontSize="small" color="error" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              ),
            },
          },
        ]}
        pagination={false}
        data={data || []}
        isLoading={isLoading}
        isFetching={isFetching || isLoadingDelete}
      />
      {isOpenCreate && <FormCreate />}
      {isOpenUpdate && <FormUpdate />}
    </Stack>
  );
}

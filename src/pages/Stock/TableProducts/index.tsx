import { Box, Button, IconButton, Stack, Tooltip } from "@mui/material";
import { Circle, Delete, Edit } from "@mui/icons-material";

import DataTable from "@components/DataTable";
import {
  ProductStatusEnum,
  ProductStatusEnumColor,
  ProductStatusEnumLabel,
} from "@libs/api/enums/ProductStatusEnum";

import FormCreate from "./Product/FormCreate";
import FormUpdate from "./Product/FormUpdate";

import { ProductDTO } from "@libs/api/queries/product/dtos/ProductDTO";

import { useDialogCreate } from "./Product/FormCreate/form";
import { useDialogUpdate } from "./Product/FormUpdate/form";

import { useProductDelete } from "@libs/api/queries/product/useProduct";

import { confirmDelete } from "@libs/alert";

interface TableProductsProps {
  grupoId: string;
  data: ProductDTO[];
}

export default function TableProducts({ grupoId, data }: TableProductsProps) {
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
                      if (dt) {
                        openUpdate(dt);
                      }
                    }}
                  >
                    <Edit fontSize="small" />
                  </IconButton>

                  <IconButton
                    onClick={() =>
                      confirmDelete(async () => await mutateAsyncDelete(value))
                    }
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </Stack>
              ),
            },
          },
        ]}
        pagination={false}
        data={data}
        isFetching={isLoadingDelete}
      />
      {isOpenCreate && <FormCreate />}
      {isOpenUpdate && <FormUpdate />}
    </Stack>
  );
}

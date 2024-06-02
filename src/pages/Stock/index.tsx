import React from "react";

import { Button, IconButton, Stack, TableCell, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import PageHeader from "@components/PageHeader";
import DataTable from "@components/DataTable";
import AutoCompleteSupplier from "@components/AutoCompleteSupplier";

import FormCreate from "./Group/FormCreate";
import FormUpdate from "./Group/FormUpdate";
import TableProducts from "./TableProducts";

import { useStockGroupsGroups } from "@libs/api/queries/stock/useStock";
import { useGroupDelete } from "@libs/api/queries/group/useGroup";
import { useDialogCreate } from "./Group/FormCreate/form";
import { useDialogUpdate } from "./Group/FormUpdate/form";

import { confirmDelete } from "@libs/alert";
import { ProductStatusEnum } from "@libs/api/enums/ProductStatusEnum";

interface CustomHeaderProps {
  label: string;
  value: ProductStatusEnum[];
  onChange: (newValues: ProductStatusEnum[]) => void;
  status: ProductStatusEnum;
}

function CustomHeader({ label, value, onChange, status }: CustomHeaderProps) {
  return (
    <TableCell>
      <Button
        color={value.includes(status) ? "success" : "inherit"}
        onClick={() =>
          onChange(
            value.some((d) => d === status)
              ? value.filter((d) => d !== status)
              : [...value, status]
          )
        }
      >
        {label}
      </Button>
    </TableCell>
  );
}

export default function Stock() {
  const [statusFilter, setStatusFilter] = React.useState<ProductStatusEnum[]>([
    ProductStatusEnum.Available,
    ProductStatusEnum.Preparing,
    ProductStatusEnum.Sold,
  ]);
  const [supplierId, setSupplierId] = React.useState("");
  const {
    data: _data,
    isLoading,
    isFetching,
  } = useStockGroupsGroups(supplierId);
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
              customHeadRender: ({ label, name }) => (
                <CustomHeader
                  key={"custom-header" + name}
                  label={label || ""}
                  value={statusFilter}
                  onChange={setStatusFilter}
                  status={ProductStatusEnum.Available}
                />
              ),
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
              customHeadRender: ({ label, name }) => (
                <CustomHeader
                  key={"custom-header" + name}
                  label={label || ""}
                  value={statusFilter}
                  onChange={setStatusFilter}
                  status={ProductStatusEnum.Preparing}
                />
              ),
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
              customHeadRender: ({ label, name }) => (
                <CustomHeader
                  key={"custom-header" + name}
                  label={label || ""}
                  value={statusFilter}
                  onChange={setStatusFilter}
                  status={ProductStatusEnum.Sold}
                />
              ),
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
            <TableProducts grupoId={data[dataIndex].id} status={statusFilter} />
          ),
        }}
        pagination={false}
      />
      {isOpenCreate && <FormCreate />}
      {isOpenUpdate && <FormUpdate />}
    </Stack>
  );
}

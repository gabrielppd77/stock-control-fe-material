import { Stack } from "@mui/material";

import PageHeader from "@components/PageHeader";
import DataTable from "@components/DataTable";

import { useStockGroups } from "@libs/api/queries/stock/useStock";

import TableProducts from "./TableProducts";

export default function Stock() {
  const { data: _data, isLoading, isFetching } = useStockGroups();
  const data = _data || [];

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
        ]}
        data={data}
        isLoading={isLoading}
        isFetching={isFetching}
        expandable={{
          renderExpandableRow: (dataIndex) => (
            <TableProducts data={data[dataIndex].products} />
          ),
        }}
      />
    </Stack>
  );
}

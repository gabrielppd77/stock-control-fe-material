import { Box, CircularProgress, LinearProgress } from "@mui/material";

import MUIDataTable, { MUIDataTableColumnDef } from "mui-datatables";

export type DataTableColumn = MUIDataTableColumnDef;

interface DataTableProps {
  data: Array<object | number[] | string[]>;
  columns: DataTableColumn[];
  isLoading: boolean;
  isFetching: boolean;
}

export default function DataTable({
  data,
  columns,
  isLoading,
  isFetching,
}: DataTableProps) {
  return (
    <Box>
      <Box sx={{ height: 4 }}>{isFetching && <LinearProgress />}</Box>
      <MUIDataTable
        title=""
        data={data}
        columns={columns}
        options={{
          download: false,
          print: false,
          filter: false,
          search: false,
          viewColumns: false,
          responsive: "simple",
          selectableRows: "none",
          selectToolbarPlacement: "none",
          textLabels: {
            body: {
              noMatch: isLoading ? (
                <CircularProgress />
              ) : (
                "Desculpe, não foi possível encontrar os registros"
              ),
              toolTip: "Ordernar",
              columnHeaderTooltip: (column) => `Ordernar por ${column.label}`,
            },
            pagination: {
              next: "Próxima Página",
              previous: "Página Anterior",
              rowsPerPage: "Linhas por Página:",
              displayRows: "de",
            },
          },
        }}
      />
    </Box>
  );
}

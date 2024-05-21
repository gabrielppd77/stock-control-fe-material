import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  SxProps,
} from "@mui/material";

interface DataTableColumOptions<TData> {
  customBodyRender?: (value: TData[string & keyof TData]) => React.ReactNode;
  sxHeader?: SxProps;
}

interface DataTableColumProps<TData> {
  name: keyof TData extends string ? keyof TData : never;
  label: string;
  options?: DataTableColumOptions<TData>;
}

interface DataTableProps<TData> {
  data: TData[];
  columns: DataTableColumProps<TData>[];
  isLoading: boolean;
  isFetching: boolean;
}

export default function DataTable<TData>({
  data,
  columns,
  isLoading,
  isFetching,
}: DataTableProps<TData>) {
  return (
    <Box>
      <Box sx={{ height: 4 }}>{isFetching && <LinearProgress />}</Box>
      <TableContainer component={Paper}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  sx={{
                    color: "primary.contrastText",
                    bgcolor: "primary.dark",
                    ...col.options?.sxHeader,
                  }}
                  key={"head" + col.name}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 2,
                      gap: 2,
                    }}
                  >
                    <Typography variant="h5">Carregando...</Typography>
                    <CircularProgress />
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, index) => (
                <TableRow key={"body-row" + index}>
                  {columns.map(({ name, options }) => {
                    const { customBodyRender } = options || {};

                    const render = customBodyRender ? (
                      customBodyRender(row[name])
                    ) : (
                      <>{row[name]}</>
                    );

                    return (
                      <TableCell key={"body-col" + index + name}>
                        {render}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

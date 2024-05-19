import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";

interface DataTableColumProps<TData> {
  name: keyof TData extends string ? keyof TData : never;
  label: string;
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
    <TableContainer component={Paper}>
      <Box sx={{ height: 4 }}>{isFetching && <LinearProgress />}</Box>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                sx={{
                  bgcolor: "primary.dark",
                  color: "primary.contrastText",
                }}
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
              <TableRow key={"row" + index}>
                {columns.map((col) => (
                  <TableCell key={"col" + index}>
                    <>{row[col.name]}</>
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

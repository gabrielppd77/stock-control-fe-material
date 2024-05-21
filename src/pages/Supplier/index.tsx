import { Box, Button, IconButton } from "@mui/material";

import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

import { Delete, Edit } from "@mui/icons-material";

import {
  useSupplierDelete,
  useSupplierQuery,
} from "@libs/api/queries/supplier/useSupplier";
import { confirmDelete } from "@libs/alert";

export default function Supplier() {
  const { data, isLoading, isFetching } = useSupplierQuery();
  const { mutateAsyncDelete, isLoadingDelete } = useSupplierDelete();

  return (
    <Container>
      <PageHeader
        title="Fornecedores"
        renderRight={<Button>Adicionar</Button>}
      />
      <DataTable
        columns={[
          {
            name: "name",
            label: "Nome",
          },
          {
            name: "id",
            label: "Ações",
            options: {
              customBodyRender: (value) => (
                <Box>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      confirmDelete(async () => await mutateAsyncDelete(value))
                    }
                  >
                    <Delete />
                  </IconButton>
                </Box>
              ),
              sxHeader: {
                width: 120,
              },
            },
          },
        ]}
        data={data || []}
        isLoading={isLoading}
        isFetching={isFetching || isLoadingDelete}
      />
    </Container>
  );
}

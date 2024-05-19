import { Button } from "@mui/material";

import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";

import { useSupplierQuery } from "../../api/supplierQuery";

export default function Supplier() {
  const { data, isLoading, isFetching } = useSupplierQuery();
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
        ]}
        data={data || []}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </Container>
  );
}

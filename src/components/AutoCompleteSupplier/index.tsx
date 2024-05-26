import { useSupplierQuery } from "@libs/api/queries/supplier/useSupplier";

import AutoCompleteControl from "@components/AutoCompleteControl";

interface AutoCompleteSupplierProps {
  name: string;
}

export default function AutoCompleteSupplier({
  name,
}: AutoCompleteSupplierProps) {
  const { data, isLoading: _isLoading, isFetching } = useSupplierQuery();
  const isLoading = _isLoading || isFetching;

  return (
    <AutoCompleteControl
      idField="id"
      options={data || []}
      isLoading={isLoading}
      label="Fornecedor"
      name={name}
      renderOptions={(d) => d.code + " - " + d.name}
    />
  );
}

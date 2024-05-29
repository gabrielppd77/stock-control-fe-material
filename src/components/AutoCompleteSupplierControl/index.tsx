import { useSupplierQuery } from "@libs/api/queries/supplier/useSupplier";

import AutoCompleteControl from "@components/AutoCompleteControl";

interface AutoCompleteSupplierControlProps {
  name: string;
  required?: boolean;
}

export default function AutoCompleteSupplierControl({
  name,
  required,
}: AutoCompleteSupplierControlProps) {
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
      required={required}
    />
  );
}

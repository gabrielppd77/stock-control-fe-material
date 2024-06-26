import { useSupplierQuery } from "@libs/api/queries/supplier/useSupplier";

import AutoComplete from "@components/AutoComplete";

interface AutoCompleteSupplierProps {
  name?: string;
  required?: boolean;
  value: string;
  onChange: (d: string) => void;
}

export default function AutoCompleteSupplier({
  name,
  required,
  value,
  onChange,
}: AutoCompleteSupplierProps) {
  const { data, isLoading: _isLoading, isFetching } = useSupplierQuery();
  const isLoading = _isLoading || isFetching;

  return (
    <AutoComplete
      idField="id"
      options={data || []}
      isLoading={isLoading}
      label="Fornecedor"
      name={name}
      renderOptions={(d) => d.code + " - " + d.name}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
}

import { useCategoryQuery } from "@libs/api/queries/category/useCategory";

import AutoCompleteControl from "@components/AutoCompleteControl";

interface AutoCompleteCategoryProps {
  name: string;
}

export default function AutoCompleteCategory({
  name,
}: AutoCompleteCategoryProps) {
  const { data, isLoading: _isLoading, isFetching } = useCategoryQuery();
  const isLoading = _isLoading || isFetching;

  return (
    <AutoCompleteControl
      idField="id"
      options={data || []}
      isLoading={isLoading}
      label="Categoria"
      name={name}
      renderOptions={(d) => d.code + " - " + d.name}
    />
  );
}

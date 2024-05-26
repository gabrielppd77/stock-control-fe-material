import { useGroupQuery } from "@libs/api/queries/group/useGroup";

import AutoCompleteControl from "@components/AutoCompleteControl";

interface AutoCompleteGroupProps {
  name: string;
}

export default function AutoCompleteGroup({ name }: AutoCompleteGroupProps) {
  const { data, isLoading: _isLoading, isFetching } = useGroupQuery();
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

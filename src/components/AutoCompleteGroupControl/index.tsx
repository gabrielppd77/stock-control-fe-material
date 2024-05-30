import { useGroupQuery } from "@libs/api/queries/group/useGroup";

import AutoCompleteControl from "@components/AutoCompleteControl";

interface AutoCompleteGroupControlProps {
  name: string;
  required?: boolean;
}

export default function AutoCompleteGroupControl({
  name,
  required,
}: AutoCompleteGroupControlProps) {
  const { data, isLoading: _isLoading, isFetching } = useGroupQuery();
  const isLoading = _isLoading || isFetching;

  return (
    <AutoCompleteControl
      idField="id"
      options={data || []}
      isLoading={isLoading}
      label="Grupo"
      name={name}
      renderOptions={(d) => d.code + " - " + d.name}
      required={required}
    />
  );
}

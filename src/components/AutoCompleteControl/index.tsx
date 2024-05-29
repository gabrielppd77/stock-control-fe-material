import { Controller } from "react-hook-form";

import AutoComplete, { AutoCompleteProps } from "@components/AutoComplete";

interface AutoCompleteControlProps<TData>
  extends Omit<AutoCompleteProps<TData>, "name" | "onChange" | "value"> {
  name: string;
}

export default function AutoCompleteControl<TData>({
  name,
  ...rest
}: AutoCompleteControlProps<TData>) {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <AutoComplete
          {...rest}
          name={name}
          onChange={onChange}
          value={value}
          error={error}
        />
      )}
    />
  );
}

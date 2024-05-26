import { MenuItem, TextFieldProps } from "@mui/material";

import TextFieldControl from "@components/TextFieldControl";

interface SelectFieldOption {
  value: string | number;
  label: string;
}

interface SelectFieldProps extends Omit<TextFieldProps, "label" | "name"> {
  label: string;
  name: string;
  options: SelectFieldOption[];
}

export default function SelectField({
  label,
  name,
  options,
  ...rest
}: SelectFieldProps) {
  return (
    <TextFieldControl label={label} name={name} select {...rest}>
      {options.map((d) => (
        <MenuItem value={d.value}>{d.label}</MenuItem>
      ))}
    </TextFieldControl>
  );
}

import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface TextFieldControlProps {
  label: string;
  name: string;
}

export default function TextFieldControl({
  label,
  name,
}: TextFieldControlProps) {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
        />
      )}
    />
  );
}

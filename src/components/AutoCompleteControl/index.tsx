import { Controller } from "react-hook-form";

import { Autocomplete, CircularProgress, TextField } from "@mui/material";

interface AutoCompleteControlProps<TData> {
  label: string;
  name: string;
  options: TData[];
  renderOptions: (d: TData) => string;
  isLoading: boolean;
  idField: keyof TData extends string ? keyof TData : never;
  required?: boolean;
}

export default function AutoCompleteControl<TData>({
  label,
  name,
  options,
  renderOptions,
  isLoading,
  idField,
  required,
}: AutoCompleteControlProps<TData>) {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          id="auto-complete"
          onChange={(_, obj) => onChange(obj ? obj[idField] : "")}
          value={options.find((d) => d[idField] === value)}
          getOptionLabel={renderOptions}
          options={options}
          loading={isLoading}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={error ? error.message : null}
              error={!!error}
              label={label}
              required={required}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      )}
    />
  );
}

import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { FieldError } from "react-hook-form";

export interface AutoCompleteProps<TData> {
  label: string;
  name?: string;
  options: TData[];
  renderOptions: (d: TData) => string;
  isLoading: boolean;
  idField: keyof TData extends string ? keyof TData : never;
  required?: boolean;
  onChange: (d: string) => void;
  value: string;
  error?: FieldError;
}

export default function AutoComplete<TData>({
  label,
  name,
  options,
  renderOptions,
  isLoading,
  idField,
  required,
  onChange,
  value,
  error,
}: AutoCompleteProps<TData>) {
  return (
    <Autocomplete
      id="auto-complete"
      onChange={(_, obj) => onChange(obj ? (obj[idField] as string) : "")}
      value={options.find((d) => d[idField] === value) || null}
      getOptionLabel={renderOptions}
      options={options}
      loading={isLoading}
      openText="Abrir"
      clearText="Limpar"
      closeText="Fechar"
      loadingText="Carregando..."
      noOptionsText="Sem opções"
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
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
  );
}

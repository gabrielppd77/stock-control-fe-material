import SelectField from "@components/SelectField";
import { ProductStatusEnum } from "@libs/api/enums/ProductStatusEnum";

interface SelectFieldStatusProps {
  name: string;
}

export default function SelectFieldStatus({ name }: SelectFieldStatusProps) {
  return (
    <SelectField
      label="Status"
      name={name}
      options={[
        {
          label: "Disponível",
          value: ProductStatusEnum.Available,
        },
        {
          label: "Preparando",
          value: ProductStatusEnum.Preparing,
        },
        {
          label: "Vendido",
          value: ProductStatusEnum.Sold,
        },
      ]}
    />
  );
}

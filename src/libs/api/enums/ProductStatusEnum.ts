function convertToArrayDescription(obj: object, descriptions: object) {
  return Object.keys(obj)
    .filter((key) => !isNaN(Number(obj[key as keyof typeof obj])))
    .map((key) => ({
      value: obj[key as keyof typeof obj],
      label: descriptions[obj[key as keyof typeof obj]],
    }));
}

export enum ProductStatusEnum {
  Available,
  Preparing,
  Sold,
}

export const ProductStatusEnumLabel = {
  [ProductStatusEnum.Available]: "Disponível",
  [ProductStatusEnum.Preparing]: "Preparando",
  [ProductStatusEnum.Sold]: "Vendido",
};

export const ProductStatusEnumColor = {
  [ProductStatusEnum.Available]: "success.light",
  [ProductStatusEnum.Preparing]: "warning.light",
  [ProductStatusEnum.Sold]: "info.light",
};

export const ProductStatusEnumArray = convertToArrayDescription(
  ProductStatusEnum,
  ProductStatusEnumLabel
);

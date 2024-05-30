import { convertToArrayDescription } from "@libs/utils";

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

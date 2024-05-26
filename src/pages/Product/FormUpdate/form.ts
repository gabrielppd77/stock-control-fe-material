import { z } from "zod";
import createDialogStore from "@store/createDialogStore";
import { ProductStatusEnum } from "@libs/api/enums/ProductStatusEnum";

export const schema = z.object({
  id: z.string(),
  code: z.number().min(1, { message: "Informe o Código" }),
  name: z.string().min(1, { message: "Informe o Nome" }),
  groupId: z.string().min(1, { message: "Informe o Grupo" }),
  supplierId: z.string().min(1, { message: "Informe o Fornecedor" }),
  categoryId: z.string().min(1, { message: "Informe a Categoria" }),
  nrClient: z.string().nullable(),
  observation: z.string().nullable(),
  status: z.nativeEnum(ProductStatusEnum, {
    message: "Informe o Status",
  }),
});

type FormType = z.infer<typeof schema>;

export const useDialogUpdate = createDialogStore<FormType>();

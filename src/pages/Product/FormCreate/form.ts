import { z } from "zod";
import createDialogStore from "@store/createDialogStore";

export const schema = z.object({
  name: z.string().min(1, { message: "Informe o Nome" }),
  groupId: z.string().min(1, { message: "Informe o Grupo" }),
  supplierId: z.string().min(1, { message: "Informe o Fornecedor" }),
  categoryId: z.string().min(1, { message: "Informe a Categoria" }),
  nrClient: z.string().nullable(),
  observation: z.string().nullable(),
});

type FormType = z.infer<typeof schema>;

export const useDialogCreate = createDialogStore<FormType>();

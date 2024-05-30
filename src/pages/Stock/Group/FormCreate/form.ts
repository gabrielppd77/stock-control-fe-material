import { z } from "zod";
import createDialogStore from "@store/createDialogStore";

export const schema = z.object({
  name: z.string().min(1, { message: "Informe o Nome" }),
  supplierId: z.string().min(1, { message: "Informe o Fornecedor" }),
});

export const useDialogCreate = createDialogStore<string>("");

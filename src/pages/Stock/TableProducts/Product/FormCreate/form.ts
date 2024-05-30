import { z } from "zod";
import createDialogStore from "@store/createDialogStore";

export const schema = z.object({
  groupId: z.string().min(1, { message: "Informe o Grupo" }),
  name: z.string().min(1, { message: "Informe o Nome" }),
  nrClient: z.string().nullable(),
  observation: z.string().nullable(),
});

export const useDialogCreate = createDialogStore<string>("");

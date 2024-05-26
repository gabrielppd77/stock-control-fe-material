import { z } from "zod";
import createDialogStore from "@store/createDialogStore";

export const schema = z.object({
  id: z.string(),
  code: z.number().min(1, { message: "Informe o Código" }),
  name: z.string().min(1, { message: "Informe o Nome" }),
});

type FormType = z.infer<typeof schema>;

export const useDialogUpdate = createDialogStore<FormType>();

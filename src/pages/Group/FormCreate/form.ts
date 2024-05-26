import { z } from "zod";
import createDialogStore from "@store/createDialogStore";

export const schema = z.object({
  name: z.string().min(1, { message: "Informe o Nome" }),
});

type FormType = z.infer<typeof schema>;

export const useDialogCreate = createDialogStore<FormType>();

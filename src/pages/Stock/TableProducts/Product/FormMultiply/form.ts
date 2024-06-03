import { z } from "zod";
import createDialogStore from "@store/createDialogStore";

export const schema = z.object({
  productId: z.string(),
  quantity: z.number().min(1, { message: "Informe a Quantidade" }),
});

type FormType = z.infer<typeof schema>;

export const useDialogMultiply = createDialogStore<FormType>({
  productId: "",
  quantity: 0,
});

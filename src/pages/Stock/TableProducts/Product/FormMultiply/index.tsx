import { Stack } from "@mui/material";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import ActionDialog from "@components/ActionDialog";
import TextFieldControl from "@components/TextFieldControl";

import { useProductMultiplyProduct } from "@libs/api/queries/product/useProduct";
import { schema, useDialogMultiply } from "./form";

export default function FormMultiply() {
  const { mutateAsyncMultiplyProduct, isLoadingMultiplyProduct } =
    useProductMultiplyProduct();

  const { isOpen, close, data } = useDialogMultiply();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  return (
    <ActionDialog
      title="Multiplicar Produto"
      maxWidth="xs"
      isLoading={isLoadingMultiplyProduct}
      isOpen={isOpen}
      onClose={() => close()}
      onSubmit={form.handleSubmit(async (dt) => {
        await mutateAsyncMultiplyProduct(dt);
        close();
      })}
    >
      <FormProvider {...form}>
        <Stack gap={1}>
          <TextFieldControl
            required
            label="Quantidade"
            name="quantity"
            type="number"
          />
        </Stack>
      </FormProvider>
    </ActionDialog>
  );
}

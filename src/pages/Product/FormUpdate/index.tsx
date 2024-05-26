import { Stack } from "@mui/material";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import TextFieldControl from "@components/TextFieldControl";
import ActionDialog from "@components/ActionDialog";

import { useProductUpdate } from "@libs/api/queries/product/useProduct";
import { schema, useDialogUpdate } from "./form";

export default function FormUpdate() {
  const { mutateAsyncUpdate, isLoadingUpdate } = useProductUpdate();

  const { isOpen, close, data } = useDialogUpdate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  return (
    <ActionDialog
      title="Atualizar Produto"
      maxWidth="xs"
      isLoading={isLoadingUpdate}
      isOpen={isOpen}
      onClose={() => close()}
      onSubmit={form.handleSubmit(async ({ id, ...data }) => {
        await mutateAsyncUpdate({ id, data });
        close();
      })}
    >
      <FormProvider {...form}>
        <Stack gap={1}>
          <TextFieldControl label="Código" name="code" type="number" />
          <TextFieldControl label="Nome" name="name" />
        </Stack>
      </FormProvider>
    </ActionDialog>
  );
}

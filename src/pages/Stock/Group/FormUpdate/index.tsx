import { Stack } from "@mui/material";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import TextFieldControl from "@components/TextFieldControl";
import ActionDialog from "@components/ActionDialog";
import AutoCompleteSupplierControl from "@components/AutoCompleteSupplierControl";

import { useGroupUpdate } from "@libs/api/queries/group/useGroup";
import { schema, useDialogUpdate } from "./form";

export default function FormUpdate() {
  const { mutateAsyncUpdate, isLoadingUpdate } = useGroupUpdate();

  const { isOpen, close, data } = useDialogUpdate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  return (
    <ActionDialog
      title="Atualizar Grupo"
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
          <TextFieldControl required label="Código" name="code" type="number" />
          <TextFieldControl required label="Nome" name="name" />
          <AutoCompleteSupplierControl required name="supplierId" />
        </Stack>
      </FormProvider>
    </ActionDialog>
  );
}

import { Stack } from "@mui/material";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import ActionDialog from "@components/ActionDialog";
import TextFieldControl from "@components/TextFieldControl";
import AutoCompleteSupplier from "@components/AutoCompleteSupplier";
import AutoCompleteCategory from "@components/AutoCompleteCategory";
import AutoCompleteGroup from "@components/AutoCompleteGroup";
import SelectFieldStatus from "@components/SelectFieldStatus";

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
          <AutoCompleteSupplier name="supplierId" />
          <AutoCompleteCategory name="categoryId" />
          <AutoCompleteGroup name="groupId" />
          <TextFieldControl label="Número do Cliente" name="nrClient" />
          <TextFieldControl label="Observação" name="observation" />
          <SelectFieldStatus name="status" />
        </Stack>
      </FormProvider>
    </ActionDialog>
  );
}

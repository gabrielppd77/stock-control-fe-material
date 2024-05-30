import { Stack } from "@mui/material";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import ActionDialog from "@components/ActionDialog";
import TextFieldControl from "@components/TextFieldControl";
import SelectFieldControl from "@components/SelectFieldControl";
import AutoCompleteGroupControl from "@components/AutoCompleteGroupControl";

import { useProductUpdate } from "@libs/api/queries/product/useProduct";
import { schema, useDialogUpdate } from "./form";

import { ProductStatusEnumArray } from "@libs/api/enums/ProductStatusEnum";

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
          <AutoCompleteGroupControl required name="groupId" />
          <TextFieldControl required label="Código" name="code" type="number" />
          <TextFieldControl required label="Nome" name="name" />
          <TextFieldControl label="Número do Cliente" name="nrClient" />
          <TextFieldControl label="Observação" name="observation" />
          <SelectFieldControl
            required
            label="Status"
            name="status"
            options={ProductStatusEnumArray}
          />
        </Stack>
      </FormProvider>
    </ActionDialog>
  );
}

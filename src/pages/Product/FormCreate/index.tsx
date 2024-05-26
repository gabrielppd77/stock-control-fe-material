import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Stack } from "@mui/material";

import ActionDialog from "@components/ActionDialog";
import TextFieldControl from "@components/TextFieldControl";
import AutoCompleteSupplier from "@components/AutoCompleteSupplier";
import AutoCompleteCategory from "@components/AutoCompleteCategory";
import AutoCompleteGroup from "@components/AutoCompleteGroup";

import { useProductCreate } from "@libs/api/queries/product/useProduct";
import { schema, useDialogCreate } from "./form";

export default function FormCreate() {
  const { mutateAsyncCreate, isLoadingCreate } = useProductCreate();

  const { isOpen, close } = useDialogCreate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      groupId: "",
      supplierId: "",
      categoryId: "",
      nrClient: "",
      observation: "",
    },
  });

  return (
    <ActionDialog
      title="Cadastro de Produto"
      maxWidth="xs"
      isLoading={isLoadingCreate}
      isOpen={isOpen}
      onClose={() => close()}
      onSubmit={form.handleSubmit(async (data) => {
        await mutateAsyncCreate(data);
        close();
      })}
    >
      <FormProvider {...form}>
        <Stack gap={1}>
          <TextFieldControl label="Nome" name="name" />
          <AutoCompleteSupplier name="supplierId" />
          <AutoCompleteCategory name="categoryId" />
          <AutoCompleteGroup name="groupId" />
          <TextFieldControl label="Número do Cliente" name="nrClient" />
          <TextFieldControl label="Observação" name="observation" />
        </Stack>
      </FormProvider>
    </ActionDialog>
  );
}

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import TextFieldControl from "@components/TextFieldControl";
import ActionDialog from "@components/ActionDialog";

import { useSupplierCreate } from "@libs/api/queries/supplier/useSupplier";
import { schema, useDialogCreate } from "./form";

export default function FormCreate() {
  const { mutateAsyncCreate, isLoadingCreate } = useSupplierCreate();

  const { isOpen, close } = useDialogCreate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
  });

  return (
    <ActionDialog
      title="Cadastro de Fornecedor"
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
        <TextFieldControl required label="Nome" name="name" />
      </FormProvider>
    </ActionDialog>
  );
}

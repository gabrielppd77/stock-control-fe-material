import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import TextFieldControl from "@components/TextFieldControl";
import ActionDialog from "@components/ActionDialog";

import { useProductCreate } from "@libs/api/queries/product/useProduct";
import { schema, useDialogCreate } from "./form";

export default function FormCreate() {
  const { mutateAsyncCreate, isLoadingCreate } = useProductCreate();

  const { isOpen, close } = useDialogCreate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
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
        <TextFieldControl label="Nome" name="name" />
      </FormProvider>
    </ActionDialog>
  );
}

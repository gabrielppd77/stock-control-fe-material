import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import TextFieldControl from "@components/TextFieldControl";
import ActionDialog from "@components/ActionDialog";

import { useGroupCreate } from "@libs/api/queries/group/useGroup";
import { schema, useDialogCreate } from "./form";
import AutoCompleteSupplierControl from "@components/AutoCompleteSupplierControl";
import { Stack } from "@mui/material";

export default function FormCreate() {
  const { mutateAsyncCreate, isLoadingCreate } = useGroupCreate();

  const { isOpen, close, data: supplierId } = useDialogCreate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", supplierId },
  });

  const haveSupplier = supplierId ? true : false;

  return (
    <ActionDialog
      title="Cadastro de Grupo"
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
          {haveSupplier ? (
            <></>
          ) : (
            <AutoCompleteSupplierControl required name="supplierId" />
          )}
          <TextFieldControl required label="Nome" name="name" />
        </Stack>
      </FormProvider>
    </ActionDialog>
  );
}

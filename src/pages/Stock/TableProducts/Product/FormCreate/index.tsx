import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Stack } from "@mui/material";

import ActionDialog from "@components/ActionDialog";
import TextFieldControl from "@components/TextFieldControl";
import AutoCompleteGroupControl from "@components/AutoCompleteGroupControl";

import { useProductCreate } from "@libs/api/queries/product/useProduct";
import { schema, useDialogCreate } from "./form";

export default function FormCreate() {
  const { mutateAsyncCreate, isLoadingCreate } = useProductCreate();

  const { isOpen, close, data: groupId } = useDialogCreate();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      groupId: groupId,
      name: "",
      nrClient: "",
      observation: "",
    },
  });

  const haveGroup = groupId ? true : false;

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
          {haveGroup ? (
            <></>
          ) : (
            <AutoCompleteGroupControl required name="groupId" />
          )}
          <TextFieldControl required label="Nome" name="name" />
          <TextFieldControl label="Número do Cliente" name="nrClient" />
          <TextFieldControl label="Observação" name="observation" />
        </Stack>
      </FormProvider>
    </ActionDialog>
  );
}

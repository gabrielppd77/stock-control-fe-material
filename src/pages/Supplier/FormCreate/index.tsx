import { z } from "zod";

import TextFieldControl from "@components/TextFieldControl";

import { useSupplierCreate } from "@libs/api/queries/supplier/useSupplier";
import ActionDialog from "@components/ActionDialog";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, { message: "Informe o nome" }),
});

type FormType = z.infer<typeof schema>;

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormCreate({ isOpen, onClose }: FormProps) {
  const { mutateAsyncCreate, isLoadingCreate } = useSupplierCreate();

  const defaultValues: FormType = { name: "" };

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <ActionDialog
      title="Cadastro"
      maxWidth="xs"
      isLoading={isLoadingCreate}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={form.handleSubmit(async (d) => {
        await mutateAsyncCreate(d);
        onClose();
      })}
    >
      <FormProvider {...form}>
        <TextFieldControl label="Nome" name="name" />
      </FormProvider>
    </ActionDialog>
  );
}

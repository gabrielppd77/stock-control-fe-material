import { create } from "zustand";

interface DialogStoreProps<TData> {
  isOpen: boolean;
  data?: TData;
  open: (data?: TData) => void;
  close: () => void;
}

const createDialogStore = <TData>() =>
  create<DialogStoreProps<TData>>((set) => ({
    isOpen: false,
    data: undefined,
    open: (data) => set(() => ({ isOpen: true, data })),
    close: () => set(() => ({ isOpen: false, data: undefined })),
  }));

export default createDialogStore;

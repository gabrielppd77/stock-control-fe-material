import { create } from "zustand";

interface MenuStoreProps {
  open: boolean;
  toggleOpen: () => void;
}

const createMenuStore = () =>
  create<MenuStoreProps>((set) => ({
    open: true,
    toggleOpen: () => set((state) => ({ open: !state.open })),
  }));

export default createMenuStore;

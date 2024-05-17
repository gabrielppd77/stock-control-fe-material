import { create } from "zustand";

interface MenuStoreProps {
  open: boolean;
  toggleOpen: () => void;
}

const useMenuStore = create<MenuStoreProps>((set) => ({
  open: true,
  toggleOpen: () => set((state) => ({ open: !state.open })),
}));

export default useMenuStore;

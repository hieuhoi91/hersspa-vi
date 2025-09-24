import { create } from 'zustand';

type DialogStoreState = {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (open: boolean) => void;
};

export const useDialogStore = create<DialogStoreState>((set) => ({
  isDropdownOpen: false,
  setIsDropdownOpen: (open) => set({ isDropdownOpen: open }),
}));

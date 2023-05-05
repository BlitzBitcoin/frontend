import { create } from "zustand";

interface WalletStore {
  password: string;
  setPassword: (password: string) => void;
  submitTimestamp: number;
  setSubmitTimestamp: (timestamp: number) => void;
}

/*  TODO:
    This store was created to make state lifting not required in WalletDataTable.tsx
    But it's possible that route was not optimal to begin with -- revisi.
*/
const useWalletStore = create<WalletStore>((set) => ({
  password: '',
  setPassword: (password) => set({ password }),
  submitTimestamp: 0,
  setSubmitTimestamp: (submitTimestamp) => set({ submitTimestamp }),
}));


export default useWalletStore;
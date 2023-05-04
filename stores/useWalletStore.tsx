import { create } from "zustand";

/*  TODO:
    This store was created to make state lifting not required in WalletDataTable.tsx
    But it's possible that route was not optimal to begin with -- revisi.
*/
const useWalletStore = create((set) => ({
  password: '',
  setPassword: (password) => set({ password }),
  timestamp: 0,
  setSubmitTimestamp: (submitTimestamp) => set({ submitTimestamp }),
}));

export default useWalletStore;
import { create } from "zustand";

interface WalletStore {
  password: string;
  setPassword: (password: string) => void;
  passwordSubmitTimestamp: number;
  setPasswordSubmitTimestamp: (timestamp: number) => void;
  hasSubmittedPassword: boolean;
  setHasPasswordSubmitted: (submitted: boolean) => void;
}

/*  TODO:
    This store was created to make state lifting not required in WalletDataTable.tsx
    But it's possible that route was not optimal to begin with -- revisit
*/
const useWalletStore = create<WalletStore>((set) => ({
  password: '',
  setPassword: (password) => set({ password }),
  passwordSubmitTimestamp: 0,
  setPasswordSubmitTimestamp: (passwordSubmitTimestamp) => set({ passwordSubmitTimestamp }),
  hasSubmittedPassword: false,
  setHasPasswordSubmitted: (hasSubmittedPassword) => set({ hasSubmittedPassword }),
}));

export default useWalletStore;
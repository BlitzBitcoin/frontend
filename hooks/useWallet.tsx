import { useState, useEffect } from 'react';
import { useQuery, UseQueryResult, useQueryClient } from "@tanstack/react-query";
import CryptoJS from 'crypto-js';

import { walletKeys } from "./queryKeys";


export interface Wallet {
  publicKey: string;
  privateKeyEncrypted: string;
  transactions?: Transactions;
}

interface Transactions {
  final_balance: number;
  n_tx: number;
  total_received: number;
}

export const useWallet = (
  {
    password = '',
    enabledState = false,
    timestamp = 0
  }:
  {
    password?: string,
    enabledState?: boolean,
    timestamp?: number
  }): UseQueryResult<Wallet, Error> => {
    // const queryClient = useQueryClient();
    // Add a new state variable to manage the enabled state
    const [_enabled, setEnabled] = useState(enabledState);

    useEffect(() => {
      setEnabled(enabledState);
    }, [enabledState, timestamp]);

    // console.log('query key is', walletKeys.single(password, timestamp))
    return useQuery({
      queryKey: walletKeys.single(password, timestamp),
      queryFn: () => fetchWallet(password, timestamp),
      enabled: _enabled,
      retry: false,
      onSettled: () => {
        console.log('im settling wallet!', timestamp)
        setEnabled(false);
      },
    });
};

const fetchWallet = async (password: string, timestamp:number): Promise<Wallet> => {
  console.log('im fetching wallet!', timestamp)
  // ----- Mocked fetch logic ---------------------------------------------
  let defaultWallet: Wallet = {
    publicKey: '1JPbzbsAx1HyaDQoLMapWGoqf9pD5uha5m',
    privateKeyEncrypted: 'U2FsdGVkX184moMXYzj0KA24KCKWJbrQU5BHg0IiJvLThe4Ko9agGltcLtSndv58zf5AbRClIfDr0GV9jZpH3Xf0CVLcZqpuzuOCcltO7kA=',
    transactions: {
      final_balance: 0,
      n_tx: 0,
      total_received: 0,
    },
  };
  const decryptedKey = decryptWithAES(
    (defaultWallet as Wallet).privateKeyEncrypted, password
  );
  if (!decryptedKey) {
    throw new Error("Decryption failed. Check your password and try again.");
  }
  return defaultWallet;
  // ----- Mocked fetch logic ---------------------------------------------
};

function decryptWithAES(payload: string, password: string): string {
  const bytes = CryptoJS.AES.decrypt(payload, password);
  const decryptedPayload = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedPayload;
}

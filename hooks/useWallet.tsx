import { useState, useEffect } from 'react';
import { useQuery, UseQueryResult, useQueryClient } from "@tanstack/react-query";
import CryptoJS from 'crypto-js';

import { walletKeys } from "./queryKeys";

interface Transaction {
  tx_hash: string;
  final_balance: number;
  total_received: number;
  timestamp: string;
}

export interface Wallet {
  userId: string;
  xpub: string;
  xprivEncrypted: string;
  transactions?: Transaction[];
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

    return useQuery({
      queryKey: walletKeys.single(password, timestamp),
      queryFn: () => fetchWallet(password, timestamp),
      enabled: enabledState,
      retry: false,
    });
};

const fetchWallet = async (password: string, timestamp:number): Promise<Wallet> => {
  console.log('im fetching wallet!', timestamp)
  console.log(password);
  // ----- Mocked fetch logic ---------------------------------------------
  let defaultWallet: Wallet = {
      userId: "user1",
      xpub: "user1_xpub",
      xprivEncrypted: "encrypted_user1_xpriv1",
      transactions: [
      {
          tx_hash: "tx_hash1",
          final_balance: 1.5,
          total_received: 1,
          timestamp: "Sun May 14 2023 20:25:19 GMT-0400 (Eastern Daylight Time)"
      },
      {
          tx_hash: "tx_hash2",
          final_balance: 0.5,
          total_received: 0.5,
          timestamp: "Sun May 13 2023 18:05:19 GMT-0400 (Eastern Daylight Time)"
      }
      ]
  };
  const decryptedKey = decryptWithAES(
    (defaultWallet as Wallet).xprivEncrypted, password
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

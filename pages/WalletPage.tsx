import React from "react";
import { walletKeys } from "../hooks/queryKeys";
import useWalletStore from "../stores/useWalletStore";
import { Wallet } from "../hooks/useWallet";
import { useQueryClient } from "@tanstack/react-query";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { convertBTCFIAT } from "../utils/ConversionUtils";

const WalletPage = ({}) => {
  const queryClient = useQueryClient();
  const { password, submitTimestamp } = useWalletStore();
  const wallet: Wallet = queryClient.getQueryData(
    walletKeys.single(password, submitTimestamp)
  );
  
  console.log(wallet.transactions);

  const balance = convertBTCFIAT(wallet.transactions[0].final_balance);
  const latest_txn = wallet.transactions[0].total_received;

  return (
    <View>
      <Text style={styles.balance}> {`$${balance}`} </Text>
      <Text style={styles.latest_transaction}> {`(Last Transaction: ${latest_txn} BTC)`} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balance: {
    color: "#5DB075",
    fontFamily: "rag",
    fontSize: 30,
  },
  latest_transaction: {
    fontFamily: "rag",
    fontSize: 10,
  },
});

export default WalletPage;

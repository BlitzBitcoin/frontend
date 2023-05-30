import React from "react";
import { TouchableOpacity} from 'react-native';

import { useQueryClient } from "@tanstack/react-query";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

import { Wallet } from "../hooks/useWallet";
import { walletKeys } from "../hooks/queryKeys";
import useWalletStore from "../stores/useWalletStore";

import { convertBTCFIAT } from "../utils/ConversionUtils";

/*
---------------------------------------
|         WalletDefaultPage           |
|        -------------------          |
|        |                 |          |
|        | $<balance>      |          |
|        |                 |          |
|        -------------------          |
|        -------------------          |
|        |                 |          |
|        | (Last Transaction: <latest_txn> BTC)  |
|        |                 |          |
|        -------------------          |
---------------------------------------
*/
const WalletDefaultPage = ({
    navigation,
    navigationName
}) => {
  const queryClient = useQueryClient();
  const { password, passwordSubmitTimestamp } = useWalletStore();
  const wallet: Wallet = queryClient.getQueryData(
    walletKeys.single(password, passwordSubmitTimestamp)
  );
  const balance = convertBTCFIAT(wallet.transactions[0].final_balance);
  const latest_txn = wallet.transactions[0].total_received;

  return (
    <TouchableOpacity
      style={styles.pageContainer}
      activeOpacity={1}
      onPress={() => navigation.navigate(navigationName)}
    >
      <View>
        <Text style={styles.balance}> {`$${balance}`} </Text>
        <Text style={styles.latest_transaction}> {`(Last Transaction: ${latest_txn} BTC)`} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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

export default WalletDefaultPage;

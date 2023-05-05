import React from 'react';
import { useQueryClient } from "@tanstack/react-query";
import { StyleSheet } from 'react-native';
import { DataTable, Text } from 'react-native-paper';

import { walletKeys } from '../hooks/queryKeys';
import useWalletStore from '../stores/useWalletStore';

const WalletDataTable = () => {
  const queryClient = useQueryClient();
  const { password, submitTimestamp } = useWalletStore();
  const wallet = queryClient.getQueryData(walletKeys.single(password, submitTimestamp));

  if (!wallet) {
      return null;
  }
  return (
    <DataTable style={styles.table}>
      <DataTable.Header>
        <DataTable.Title textStyle={styles.subtext}>Address</DataTable.Title>
        <DataTable.Title textStyle={styles.subtext}>Balance</DataTable.Title>
        <DataTable.Title textStyle={styles.subtext}>Transactions</DataTable.Title>
        <DataTable.Title textStyle={styles.subtext}>Total Received</DataTable.Title>
        {/* <DataTable.Title textStyle={styles.subtext}>Private Key</DataTable.Title> */}
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell textStyle={styles.subtext}>{wallet.publicKey}</DataTable.Cell>
        <DataTable.Cell textStyle={styles.subtext}>{wallet.transactions.final_balance}</DataTable.Cell>
        <DataTable.Cell textStyle={styles.subtext}>{wallet.transactions.n_tx}</DataTable.Cell>
        <DataTable.Cell textStyle={styles.subtext}>{wallet.transactions.total_received}</DataTable.Cell>
        {/* <DataTable.Cell textStyle={styles.subtext}>{wallet.private_key}</DataTable.Cell> */}
      </DataTable.Row>
    </DataTable>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#000',
    width: '80%',
  },
  subtext: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 15,
    color: '#000',
  },
});

export default WalletDataTable;
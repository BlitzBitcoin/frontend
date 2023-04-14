import React, { useState } from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import PasswordWallet from './components/PasswordWallet';


function App() {

  return (
    <QueryClientProvider client={new QueryClient()}>
      <SafeAreaProvider>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.header}>Simple Wallet</Text>
          <Text style={styles.subtext}>Cold Storage Online</Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.cell}>Address</Text>
              <Text style={styles.cell}>Balance</Text>
              <Text style={styles.cell}>Transactions</Text>
              <Text style={styles.cell}>Total Received</Text>
              <Text style={styles.cell}>Private Key</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>{'publicKey'}</Text>
              <Text style={styles.cell}>{'final_balance'}</Text>
              <Text style={styles.cell}>{'n_tx'}</Text>
              <Text style={styles.cell}>{'total_received'}</Text>
              <View style={styles.cell}>
                <PasswordWallet/>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

const borderColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 15,
  },
  table: {
    borderWidth: 1,
    borderColor: borderColor,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderWidth: 1,
    borderColor: borderColor,
    padding: 10,
    width: '20%'
  }
});

export default App;

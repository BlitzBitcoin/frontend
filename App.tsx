import React, { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  MD3DarkTheme,
  DataTable,
  Text,
  Provider as PaperProvider,
} from "react-native-paper";

import WalletControlButtons from "./components/atoms/WalletControlButtons";
import WalletDataTable from "./components/atoms/WalletDataTable";
import WalletPage from "./pages/WalletPage";

const queryClient = new QueryClient(); // keep out of App() so its same instance when App() re-renders (?)

function App() {
  const [walletLockState, setWalletLockState] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <PaperProvider theme={MD3DarkTheme}>
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Simple Wallet</Text>
            <Text style={styles.subtext}>Cold Storage Online</Text>
            <WalletControlButtons
              lockState={walletLockState}
              setLockState={setWalletLockState}
            />
            {/* {
              !walletLockState && <WalletDataTable />
            } */}
            {!walletLockState && < WalletPage />}
          

            {/* {
              walletLockState ? null : (
                <DataTable style={styles.table}>
                  <DataTable.Header>
                    <DataTable.Title textStyle={styles.subtext}>Address</DataTable.Title>
                    <DataTable.Title textStyle={styles.subtext}>Balance</DataTable.Title>
                    <DataTable.Title textStyle={styles.subtext}>Transactions</DataTable.Title>
                    <DataTable.Title textStyle={styles.subtext}>Total Received</DataTable.Title>
                    <DataTable.Title textStyle={styles.subtext}>Private Key</DataTable.Title>
                  </DataTable.Header>
                  <DataTable.Row >
                    <DataTable.Cell textStyle={styles.subtext}>{'publicKey'}</DataTable.Cell>
                    <DataTable.Cell textStyle={styles.subtext}>{'final_balance'}</DataTable.Cell>
                    <DataTable.Cell textStyle={styles.subtext}>{'n_tx'}</DataTable.Cell>
                    <DataTable.Cell textStyle={styles.subtext}>{'total_received'}</DataTable.Cell>
                    <DataTable.Cell textStyle={styles.subtext}>{'private_key'}</DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              )
            } */}
          </ScrollView>
        </PaperProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

// const borderColor = '#000';
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtext: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 15,
    color: "#000",
  },
  table: {
    borderWidth: 1,
    borderColor: "#000",
    width: "80%",
  },
});

export default App;

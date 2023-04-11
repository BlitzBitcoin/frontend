import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

function encryptWithAES(payload, password) {
  return AES.encrypt(payload, password).toString();
}

function decryptWithAES(payload, password) {
  const bytes = AES.decrypt(payload, password);
  const decryptedPayload = bytes.toString(Utf8);
  return decryptedPayload;
}

function App() {

  function handleGetPrivateKey(privateKeyEncrypted) {
    if (!inputPassword) {
      setErrorMessage('Wrong Password');
      setDecryptedKey('');
      return;
    }
    const key = decryptWithAES(privateKeyEncrypted, inputPassword);
    if (key) {
      setDecryptedKey(key);
      setErrorMessage('');
    } else {
      setErrorMessage('Wrong Password');
      setDecryptedKey('');
    }
  }

  const walletData = {
    "1JPbzbsAx1HyaDQoLMapWGoqf9pD5uha5m": {
      publicKey: "1JPbzbsAx1HyaDQoLMapWGoqf9pD5uha5m",
      privateKeyEncrypted: 'U2FsdGVkX184moMXYzj0KA24KCKWJbrQU5BHg0IiJvLThe4Ko9agGltcLtSndv58zf5AbRClIfDr0GV9jZpH3Xf0CVLcZqpuzuOCcltO7kA=',
      transactions: {
        "final_balance": 0,
        "n_tx": 29,
        "total_received": 232535925
      }
    },
  }

  const firstWallet = walletData['1JPbzbsAx1HyaDQoLMapWGoqf9pD5uha5m'];

  const {
    publicKey,
    privateKeyEncrypted,
    transactions: { final_balance, n_tx, total_received },
  } = firstWallet;

  const [wallets, setWallets] = useState(walletData);

  const [inputPassword, setInputPassword] = useState('');
  const [decryptedKey, setDecryptedKey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (
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
            <Text style={styles.cell}>{publicKey}</Text>
            <Text style={styles.cell}>{final_balance}</Text>
            <Text style={styles.cell}>{n_tx}</Text>
            <Text style={styles.cell}>{total_received}</Text>
            <View style={styles.cell}>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={setInputPassword}
                  value={inputPassword}
                />
                <TouchableOpacity style={styles.submitButton} onPress={() => handleGetPrivateKey(privateKeyEncrypted)}>
                  <Text style={styles.getKeyButtonText}>Get Key</Text>
                </TouchableOpacity>
                {decryptedKey ? (
                  <Text style={styles.decryptedKeyText}>{decryptedKey}</Text>
                ) : (
                  <Text style={styles.errorText}>{errorMessage}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

    </SafeAreaProvider>
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
  },
  input: {
    borderWidth: 1,
    borderColor: borderColor,
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  getKeyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  decryptedKeyText: {
    color: 'green',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default App;

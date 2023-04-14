import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Wallet, useWallet } from '../hooks/useWallet';


const PasswordWallet = () => {
  const [inputPassword, setInputPassword] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [submittedPassword, setSubmitted] = useState(false);
  const { data: wallet, error, isError } = useWallet(inputPassword, submittedPassword);

  const handleGetPrivateKey = () => {
    setSubmitted(true); // Trigger the query by setting submit to true
  };

  useEffect(() => {
    let successful_fetch_wallet = (wallet && !isError)
    if (successful_fetch_wallet) {
      setPrivateKey((wallet as Wallet).privateKeyEncrypted);
    } else {
      setPrivateKey('');
    }
    setSubmitted(false); // Reset submit state after handling
  }, [wallet, isError]);
  
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setInputPassword}
          value={inputPassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleGetPrivateKey}
        >
          <Text style={styles.getKeyButtonText}>Get Key</Text>
        </TouchableOpacity>
        {privateKey ? (
          <Text style={styles.decryptedKeyText}>{privateKey}</Text>
        ) : (
          <Text style={styles.errorText}>{isError ? error.message : ''}</Text>
        )}
      </View>
    );
};

const borderColor = '#000';
const styles = StyleSheet.create({
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

export default PasswordWallet;

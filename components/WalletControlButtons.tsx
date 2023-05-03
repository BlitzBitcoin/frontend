import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Wallet, useWallet } from '../hooks/useWallet';



const WalletControlButtons = ({
  lockState,
  setLockState
}) => {

  const [inputPassword, setInputPassword] = useState('');
  const [password, setPassword] = useState('');

  const [submittedPassword, setSubmitted] = useState(false);
  const [submitTimestamp, setSubmitTimestamp] = useState(0);

  const { data: wallet, error, isError } = useWallet({
    password: password,
    enabledState: submittedPassword,
    timestamp: submitTimestamp
  });

  useEffect(() => {
    let successful_fetch_wallet = (wallet && !isError)
    if (successful_fetch_wallet) {
      console.log('effect - UNLOCKING WALLET', wallet);
      setLockState(false);
    } else {
      console.log('effect - LOCKING WALLET', wallet);
      setLockState(true);
      setSubmitted(false);
    }
    setInputPassword('')
  }, [wallet, submittedPassword]);


  const handleInputPassword = (text) => {
    setLockState(true);
    setInputPassword(text);
  };

  const handleUnlockWallet = () => {
    setPassword(inputPassword);
    setSubmitted(true);
    setSubmitTimestamp(Date.now());
  };

  const handleLockWallet = () => {
    setLockState(true);
    setSubmitted(false);
    setSubmitTimestamp(Date.now());
  };

  const unlock_with_password = (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={handleInputPassword}
        value={inputPassword}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleUnlockWallet}
      >
        <Text style={styles.getKeyButtonText}>Unlock Wallet</Text>
      </TouchableOpacity>
      <Text style={styles.errorText}>{!inputPassword && error ? error.message : ''}</Text>
    </View>
  );
  const send_receive_lock = (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={styles.submitButton}
      >
        <Text style={styles.getKeyButtonText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submitButton}
      >
        <Text style={styles.getKeyButtonText}>Receive</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleLockWallet}
      >
        <Text style={styles.getKeyButtonText}>Lock</Text>
      </TouchableOpacity>
    </View>
  );
  const wallet_login_state = !lockState ? send_receive_lock : unlock_with_password
  return wallet_login_state;
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // add more horizontal spacing
    alignItems: 'center', // center the buttons vertically
    marginHorizontal: 20 // add some horizontal margin to the container
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 1, // add some horizontal margin to the buttons
    marginBottom: 5
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

export default WalletControlButtons;

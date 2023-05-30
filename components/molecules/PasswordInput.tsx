import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import WalletButton from '../atoms/WalletButton';

/*
+--------------------------------------+
|  +-------------------------------+   |
|  |   Password                    |   |
|  +-------------------------------+   |
|  +-----------------------------+     |
|  |    Unlock Wallet            |     |
|  +-----------------------------+     |
|  +-------------------------------+   |
|  |   Error message (if any)     |    |
|  +-------------------------------+   |
+--------------------------------------+
*/
const PasswordInput = ({
  inputPassword,
  handleInputPassword,
  handleUnlockWallet,
  displayError,
  error,
}) => (
  <View>
    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry={true}
      onChangeText={handleInputPassword}
      value={inputPassword}
    />
   <WalletButton
      handleOnPress={handleUnlockWallet}
      buttonText="Unlock Wallet"
   />
    <Text style={styles.errorText}>{displayError && error ? error.message : ''}</Text>
  </View>
);
const borderColor = '#000';
const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: borderColor,
      padding: 10,
      width: '100%',
      marginBottom: 10,
    },
    errorText: {
      color: 'red',
      marginTop: 10,
    },
});

export default PasswordInput;
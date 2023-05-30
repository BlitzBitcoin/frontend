import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import WalletButton from '../atoms/WalletButton';

/*
+-----------------------------------------------------------+
|  +---------+     +---------+      +---------+             |
|  |  Send   |     | Receive |      |  Lock   |             |
|  +---------+     +---------+      +---------+             |
+-----------------------------------------------------------+
*/
const SendReceiveLockButtons = ({ handleLockWallet }) => (
    <View style={styles.buttonsContainer}>
      <WalletButton buttonText="Send"/>
      <WalletButton buttonText="Receive"/>
      <WalletButton buttonText="Lock" handleOnPress={handleLockWallet}/>
    </View>
  );

const borderColor = '#000';
const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // add more horizontal spacing
    alignItems: 'center', // center the buttons vertically
    marginHorizontal: 20 // add some horizontal margin to the container
  }       
});

export default SendReceiveLockButtons;

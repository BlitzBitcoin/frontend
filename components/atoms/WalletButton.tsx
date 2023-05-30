import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/*
+------------------------+
|       WalletButton     |
+------------------------+
*/
const WalletButton = ({ handleOnPress = () => {}, buttonText }) => (
    <TouchableOpacity style={styles.submitButton} onPress={handleOnPress}>
      <Text style={styles.getKeyButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );

const borderColor = '#000';
const styles = StyleSheet.create({
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
      fontWeight: 'bold'
    }
});

export default WalletButton;
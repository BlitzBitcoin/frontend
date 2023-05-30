import React from 'react';
import { View, StyleSheet } from 'react-native';

import WalletDataTable from '../components/organisms/WalletDataTable';
import SendReceiveLockButtons from '../components/molecules/SendReceiveLockButtons';

import useWalletStore from '../stores/useWalletStore';

/*
---------------------------------------
|      WalletTransactionsPage         |
|        ---------------------        |
|        | WalletDataTable   |        |
|        |                   |        |
|        |-------------------|        |
|        | ...               |        |
|        ---------------------        |
|        ---------------------        |
|        | Send  | Receive | Lock  |  |
|        ---------------------        |
---------------------------------------
*/
const WalletTransactionsPage = ({
    navigation,
    navigationName
}) => {
    const { setHasPasswordSubmitted, setPasswordSubmitTimestamp } = useWalletStore();
    // FIXME: handleLockWallet causes LoginPage to re-render twice? (logs twice)
    const handleLockWallet = () => {
        setHasPasswordSubmitted(false);
        setPasswordSubmitTimestamp(Date.now()); // this is only to invalidate "wallet"?
        navigation.navigate(navigationName);
    };
    return (
        <View style={styles.pageContainer}>
            <WalletDataTable />
            <SendReceiveLockButtons handleLockWallet={handleLockWallet} />
        </View>
    );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WalletTransactionsPage;

import React, { useState, useEffect } from 'react';

import PasswordInput from '../components/molecules/PasswordInput';

import { useWallet } from '../hooks/useWallet';
import useWalletStore from '../stores/useWalletStore';

/*
|-----------------------------|
|      PasswordInput          |
|   ---------------------     |
|   |                   |     |
|   |  Password         |     |
|   |                   |     |
|   ---------------------     |
|   ---------------------     |
|   | Unlock Wallet     |     |
|   ---------------------     |
|-----------------------------|
*/
const LoginPage = ({
  navigation,
  navigationName,
}) => {
  const { 
    password,
    setPassword,
    hasSubmittedPassword,
    setHasPasswordSubmitted,
    passwordSubmitTimestamp,
    setPasswordSubmitTimestamp
  } = useWalletStore();
  const [inputPassword, setInputPassword] = useState('');
  const [displayError, setDisplayError] = useState(false);

  const { data: wallet, error } = useWallet({
    password: password,
    enabledState: hasSubmittedPassword,
    timestamp: passwordSubmitTimestamp
  });

  useEffect(() => {
    if (wallet) {
      console.log('(effect) UNLOCKING WALLET', wallet);
      setDisplayError(false);
      navigation.navigate(navigationName);
    } else if (hasSubmittedPassword) {
      console.log('(effect) LOCKING WALLET', wallet);
      setHasPasswordSubmitted(false);
      setDisplayError(true);
    }
    setInputPassword('');
  }, [wallet, hasSubmittedPassword]);

  const handleInputPassword = (text) => {
    setInputPassword(text);
    setDisplayError(false);
  };

  const handleUnlockWallet = () => {
    setHasPasswordSubmitted(true);
    setPassword(inputPassword);
    setPasswordSubmitTimestamp(Date.now());
  };

  return (
    <PasswordInput
        inputPassword={inputPassword}
        handleInputPassword={handleInputPassword}
        handleUnlockWallet={handleUnlockWallet}
        displayError={displayError}
        error={error}
    />
  );
};

export default LoginPage;

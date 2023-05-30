// FIXME: Legacy Component -- Delete in next 2-3 PRs if no refernece value

// import React, { useState, useEffect } from 'react';

// import PasswordInput from '../atoms/PasswordInput';
// import SendReceiveLockButtons from '../molecules/SendReceiveLockButtons';

// import { Wallet, useWallet } from '../../hooks/useWallet';
// import useWalletStore from '../../stores/useWalletStore';

// const WalletControlButtons = ({
//   navigation,
//   navigationName,
//   lockState,
//   setLockState
// }) => {

//   const { password, setPassword, submitTimestamp, setSubmitTimestamp } = useWalletStore();
//   const [inputPassword, setInputPassword] = useState('');
//   const [submittedPassword, setSubmitted] = useState(false);
//   const [displayError, setDisplayError] = useState(false);

//   const { data: wallet, error } = useWallet({
//     password: password,
//     enabledState: submittedPassword,
//     timestamp: submitTimestamp
//   });

//   useEffect(() => {
//     if (wallet) {
//       console.log('effect - UNLOCKING WALLET', wallet);
//       setLockState(false);
//       setDisplayError(false);
//       navigation.navigate(navigationName);
//     } else if (submittedPassword) {
//       console.log('effect - LOCKING WALLET', wallet);
//       setLockState(true);
//       setSubmitted(false);
//       setDisplayError(true);
//     }
//     setInputPassword('');
//   }, [wallet, submittedPassword]);

//   const handleInputPassword = (text) => {
//     setLockState(true);
//     setInputPassword(text);
//     setDisplayError(false);
//   };

//   const handleUnlockWallet = () => {
//     setPassword(inputPassword);
//     setSubmitted(true);
//     setSubmitTimestamp(Date.now());
//   };

//   const handleLockWallet = () => {
//     setLockState(true);
//     setSubmitted(false);
//     setSubmitTimestamp(Date.now());
//   };

//   return (
//     <>
//       {lockState 
//         ? <PasswordInput
//             inputPassword={inputPassword}
//             handleInputPassword={handleInputPassword}
//             handleUnlockWallet={handleUnlockWallet}
//             displayError={displayError}
//             error={error}
//           />
//         : <SendReceiveLockButtons handleLockWallet={handleLockWallet} />
//       }
//     </>
//   );
// };

// export default WalletControlButtons;

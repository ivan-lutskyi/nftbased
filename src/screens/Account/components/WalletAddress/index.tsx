import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';
import WalletAddressLayout from './WalletAddressLayout';
import WalletAddressMobileLayout from './WalletAddressLayout.mobile';
import './style.css';

export const walletAddress = '0x9F93C6797113d5011883503c3fa1C00b29B239E7';

const WalletAddress = () => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  const [isCopied, setIsCopied] = useState(false);

  const onWalletAddressClick = () => {
    if (!isDeviceMobile) {
      navigator.clipboard.writeText(walletAddress);
    }
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return isDeviceMobile ? (
    <WalletAddressMobileLayout
      isCopied={isCopied}
      onWalletAddressClick={onWalletAddressClick}
      walletAddress={walletAddress}
    />
  ) : (
    <WalletAddressLayout
      isCopied={isCopied}
      onWalletAddressClick={onWalletAddressClick}
      walletAddress={walletAddress}
    />
  );
};

export default WalletAddress;

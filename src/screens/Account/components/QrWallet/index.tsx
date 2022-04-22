import QRCode from 'qrcode.react';
import { walletAddress } from '../WalletAddress';

import './style.css';

const QrWallet = () => (
  <div className="qr-wallet-container">
    <QRCode size={100} value={walletAddress} />
    <span className="qr-wallet-title">Your wallet</span>
  </div>
);

export default QrWallet;

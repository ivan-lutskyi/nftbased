import { ReactComponent as CopyToClipboardIcon } from '../../img/copy-to-clipboard.svg';
import { ReactComponent as DoneIcon } from '../../img/done-icon.svg';
import './style.css';

interface IProps {
  onWalletAddressClick: () => void;
  isCopied: boolean;
  walletAddress: string;
}

const WalletAddressLayout = ({ onWalletAddressClick, isCopied, walletAddress }: IProps) => (
  <div className="wallet-address-container">
    <span className="wallet-address-title">ETH Wallet Address</span>
    <button className="wallet-address-text-container" type="button" onClick={onWalletAddressClick}>
      <span className="wallet-address-text">{walletAddress}</span>
      <span className="wallet-address-copy-btn">
        {isCopied ? (
          <DoneIcon width="15" height="15" />
        ) : (
          <CopyToClipboardIcon width="15" height="15" />
        )}
      </span>
    </button>
  </div>
);

export default WalletAddressLayout;

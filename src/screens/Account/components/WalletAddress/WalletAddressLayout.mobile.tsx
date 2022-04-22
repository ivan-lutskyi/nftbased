import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';
import Clipboard from 'react-clipboard.js';
import { ReactComponent as CopyToClipboardIcon } from '../../img/copy-to-clipboard.svg';
import { ReactComponent as QrIcon } from '../../img/qr-icon.svg';
import { ReactComponent as DoneIcon } from '../../img/done-icon.svg';
import { ReactComponent as CloseIcon } from '../../../../components/BuyModal/img/close-icon.svg';
import './style.mobile.css';
import { COLORS } from '../../../../constants/colors';

interface IProps {
  onWalletAddressClick: () => void;
  isCopied: boolean;
  walletAddress: string;
}

const WalletAddressMobileLayout = ({ onWalletAddressClick, isCopied, walletAddress }: IProps) => {
  const [isQrOpened, setIsQrOpened] = useState(false);

  useEffect(() => {
    if (isQrOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'overlay';
    }
  }, [isQrOpened]);

  return (
    <>
      {isQrOpened && (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'absolute',
            zIndex: 4,
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              backgroundColor: COLORS.WHITE,
              borderRadius: 20,
              position: 'relative',
            }}
          >
            <button
              type="button"
              style={{
                position: 'absolute',
                right: 10,
                top: 15,
                outline: 0,
                border: 0,
                background: 'transparent',
                cursor: 'pointer',
              }}
              onClick={() => setIsQrOpened(false)}
            >
              <CloseIcon />
            </button>

            <QRCode
              style={{
                padding: '50px 40px 30px 40px',
              }}
              size={100}
              value={walletAddress}
            />
          </div>
        </div>
      )}
      <div className="wallet-address-container-mobile">
        <span className="wallet-address-header">
          <span className="wallet-address-title-mobile">ETH Wallet Address</span>
          <div className="wallet-address-header-icons">
            <Clipboard
              data-clipboard-text={walletAddress}
              onClick={onWalletAddressClick}
              className="wallet-address-copy-btn-mobile"
            >
              {isCopied ? (
                <DoneIcon width="15" height="15" />
              ) : (
                <CopyToClipboardIcon width="15" height="15" />
              )}
            </Clipboard>
            <button
              type="button"
              onClick={() => {
                window.scrollTo(0, 0);
                setIsQrOpened(true);
              }}
              className="wallet-address-copy-btn-mobile"
            >
              <QrIcon width="15" height="15" />
            </button>
          </div>
        </span>

        <Clipboard
          data-clipboard-text={walletAddress}
          className="wallet-address-text-container-mobile"
          onClick={onWalletAddressClick}
        >
          <span className="wallet-address-text-mobile">{walletAddress}</span>
        </Clipboard>
      </div>
    </>
  );
};

export default WalletAddressMobileLayout;

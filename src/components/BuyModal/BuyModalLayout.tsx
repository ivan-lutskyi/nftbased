
import QRCode from 'qrcode.react';
import { ReactComponent as CloseIcon } from './img/close-icon.svg';
import { IPlan } from '../../screens/Plans/PlansLayout.mobile';
import { ReactComponent as DoneIcon } from '../../screens/Account/img/done-icon.svg';
import { ReactComponent as CopyToClipboardIcon } from '../../screens/Account/img/copy-to-clipboard.svg';
import { generateId } from '../../utils';
import './style.css';
import { COLORS } from '../../constants/colors';
import { AppRoute } from '../../constants/routes';

interface IProps {
  selectedPlan: IPlan;
  onCloseBtnClick: () => void;
  ethToUsdCurrency: number;
  onWalletAddressClick: () => void;
  isCopied: boolean;
  children?: any;
}

const ETHWalletAddress = '0x9F93C6797113d5011883503c3fa1C00b29B239E7';

const BuyModalLayout = ({
  selectedPlan,
  onCloseBtnClick,
  ethToUsdCurrency,
  onWalletAddressClick,
  isCopied,
  children,
}: IProps) => (
  <div
    style={{
      width: '100vw',
      position: 'absolute',
      zIndex: 14,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    className="buyModal-offset"
  >
    <div
      className="buyModal-container"
      style={{
        backgroundColor: COLORS.WHITE,
        borderRadius: 20,
        padding: 30,
        position: 'relative',
      }}
    >
      <button
        type="button"
        style={{
          position: 'absolute',
          right: 30,
          outline: 0,
          border: 0,
          background: 'transparent',
          cursor: 'pointer',
        }}
        onClick={onCloseBtnClick}
      >
        <CloseIcon />
      </button>

      <div
        style={{
          marginBottom: 15,
        }}

        className="buyModal-title-container"
      >
        <span
          className="buyModal-title"
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
          }}
        >
          {selectedPlan.title} pack
        </span>
      </div>

      <div className="buyModal-subtitle">
        {selectedPlan.options.map(({ text, value }) => (
          <div
            style={{
              margin: '5px 0',
              color: '#878691',
            }}
            key={generateId()}
          >
            {text} <span style={{ fontWeight: 600 }}>{value}</span>
          </div>
        ))}
      </div>

      <div
        className="buyModal-subtitle"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #CCCCCC',
          borderBottom: '1px solid #CCCCCC',
          padding: '30px 0',
          margin: '20px 0',
        }}
      >
        <span
          style={{
            color: '#878691',
          }}
        >
          TOTAL AMOUNT:
        </span>
        <span
          style={{
            fontWeight: 600,
            fontSize: '1.6rem',
          }}
        >
          {ethToUsdCurrency
            ? `±${(selectedPlan.price.value / ethToUsdCurrency).toFixed(6)} ETH`
            : '–'}
        </span>
      </div>

      <div
        className="buyModal-qrcode"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          margin: '30px 0',
          position: 'relative',
        }}
      >
        <QRCode size={150} value={ETHWalletAddress} />
      </div>

      <button
        className="wallet-address-text-container"
        style={{
          width: '100%',
          margin: 0,
          padding: '15px 0px',
        }}
        type="button"
        onClick={onWalletAddressClick}
      >
        <span
          className="wallet-address-text"
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ marginRight: 20 }}>{ETHWalletAddress}</span>
          {isCopied ? (
            <DoneIcon width="15" height="15" />
          ) : (
            <CopyToClipboardIcon width="15" height="15" />
          )}
        </span>
      </button>

      {children}
    </div>
  </div>
);

export default BuyModalLayout;

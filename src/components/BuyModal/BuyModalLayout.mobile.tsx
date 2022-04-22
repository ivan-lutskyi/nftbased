import QRCode from 'qrcode.react';
import { ReactComponent as CloseIcon } from './img/close-icon.svg';
import { IPlan } from '../../screens/Plans/PlansLayout.mobile';
import { ReactComponent as DoneIcon } from '../../screens/Account/img/done-icon.svg';
import { ReactComponent as CopyToClipboardIcon } from '../../screens/Account/img/copy-to-clipboard.svg';
import Text from '../Text';
import { COLORS } from '../../constants/colors';

interface IProps {
  selectedPlan: IPlan;
  onCloseBtnClick: () => void;
  ethToUsdCurrency: number;
  onWalletAddressClick: () => void;
  isCopied: boolean;
  children: any;
}

const ETHWalletAddress = '0x9F93C6797113d5011883503c3fa1C00b29B239E7';

const BuyModalMobileLayout = ({
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
      height: '110vh',
      position: 'absolute',
      zIndex: 14,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        width: '80vw',
        backgroundColor: COLORS.WHITE,
        borderRadius: 20,
        padding: 20,
        position: 'relative',
      }}
      className="buyModal-container-mobile"
    >
      <button
        type="button"
        style={{
          position: 'absolute',
          right: 10,
          outline: 0,
          border: 0,
          background: 'transparent',
          cursor: 'pointer',
        }}
        onClick={onCloseBtnClick}
      >
        <CloseIcon />
      </button>

      <Text size="h2" bold style={{ marginBottom: 15 }}>
        {selectedPlan.title} pack
      </Text>

      <div>
        {selectedPlan.options.map(({ text, value }) => (
          <div
            style={{
              margin: '5px 0',
            }}
          >
            <Text size="h4" bold color="#878691">
              {text}
            </Text>

            <Text size="h4" bold>
              {value}
            </Text>
          </div>
        ))}
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #CCCCCC',
          borderBottom: '1px solid #CCCCCC',
          padding: '30px 0',
          fontSize: '14px',
        }}
      >
        <Text size="h3" style={{ textTransform: 'uppercase' }} color="#878691">
          TOTAL AMOUNT:
        </Text>

        <Text size="h3" style={{ textTransform: 'uppercase' }} bold>
          {ethToUsdCurrency
            ? `±${(selectedPlan.price.value / ethToUsdCurrency).toFixed(6)} ETH`
            : '–'}
        </Text>
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          margin: '30px 0',
        }}
      >
        <QRCode size={100} value={ETHWalletAddress} />
      </div>

      <button
        className="wallet-address-text-container"
        style={{
          width: '100%',
          margin: 0,
          padding: '15px 0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row-reverse',
        }}
        type="button"
        onClick={onWalletAddressClick}
      >
        {isCopied ? (
          <DoneIcon width="15" height="15" />
        ) : (
          <CopyToClipboardIcon width="15" height="15" />
        )}

        <Text size="h6" style={{ marginRight: 5 }}>
          {ETHWalletAddress}
        </Text>
      </button>

      {children}
    </div>
  </div>
);

export default BuyModalMobileLayout;

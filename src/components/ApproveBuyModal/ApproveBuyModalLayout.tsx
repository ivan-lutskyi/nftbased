import { FC } from 'react';
import { ReactComponent as DoneImg } from './img/42135-done 1.svg';
import { ReactComponent as CloseIcon } from './img/close-icon.svg';
import {
  getMaxLengthMessage,
  getMinLengthMessage,
  REQUIRED_FIELD_MESSAGE,
} from '../../constants/messages';
import { APPROVE_METHODS } from '../../screens/ManyStepsRegister';

import './style.scss';
import { generateId } from '../../utils';
import Text from '../Text';
import { COLORS } from '../../constants/colors';
import { AppRoute } from '../../constants/routes';

interface IProps {
  switchApproveMethod: (
    value: APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM | APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES,
  ) => void;
  approveMethod:
    | APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM
    | APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES;
  register: any;
  errors: any;
  handleSubmit: any;
  onSubmit: any;
  onCloseModalsClick: () => void;
  currentRoute: string;
}

const ETHWalletAddress = '0x9F93C6797113d5011883503c3fa1C00b29B239E7';

const ApproveBuyModalLayout: FC<IProps> = ({
  switchApproveMethod,
  approveMethod,
  register,
  errors,
  handleSubmit,
  onSubmit,
  onCloseModalsClick,
  currentRoute,
}) => (
  <div
    style={{
      width: '100vw',
      position: 'absolute',
      zIndex: 14,
      left: 0,
      top: currentRoute === AppRoute.REGISTER.route && window.innerHeight < 750 ? '1vh' : '',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}
    className="approval-offset"
  >
    <div
      className="approval-container"
      style={{
        width: '30vw',
        minWidth: '450px',
        backgroundColor: COLORS.WHITE,
        borderRadius: 20,
        padding: 30,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CloseIcon
        style={{
          position: 'absolute',
          right: 30,
          cursor: 'pointer',
        }}
        onClick={onCloseModalsClick}
      />
      <DoneImg className="approval-done-img" />

      <span
        className="approval-title"
        style={{
          fontWeight: 600,
          fontSize: 20,
          margin: '20px 0',
        }}
      >
        Thank you!
      </span>

      <div
        style={{
          margin: '20px 0',
        }}
      >
        <Text className="approval-subtitle" color="#878691" size="h4">
          You have successfully purchased NFTbased tokens. They will come to your ETH Wallet within
          24 hours.
        </Text>
      </div>

      <div
        className="approval-buttons-container"
        style={{
          width: '100%',
        }}
      >
        <button
          onClick={() => switchApproveMethod(APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM)}
          type="button"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            outline: 0,
            border: 0,
            padding: 0,
          }}
        >
          <div
            style={{
              maxWidth: 20,
              maxHeight: 20,
              width: 36, height: 36,
              borderRadius: 25,
              backgroundColor: '#DEDEE1',
              color: 'transparent',
              outline: 'none',
              border: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}
          >
            {approveMethod === APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM && (
              <div
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: COLORS.DARK_PURPLE,
                  borderRadius: 8,
                }}
              />
            )}
          </div>

          <Text size="h4" color="#878691">
            Send tokens to the wallet you made the payment from
          </Text>
        </button>

        <button
          type="button"
          onClick={() => switchApproveMethod(APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            outline: 0,
            border: 0,
            padding: 0,
          }}
        >
          <div
            style={{
              maxWidth: 20,
              maxHeight: 20,
              width: 36, height: 36,
              borderRadius: 25,
              backgroundColor: '#DEDEE1',
              color: 'transparent',
              outline: 'none',
              border: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}
          >
            {approveMethod === APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES && (
              <div
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: COLORS.DARK_PURPLE,
                  borderRadius: 7,
                }}
              />
            )}
          </div>

          <Text size="h4" color="#878691">
            Send tokens to a different wallet
          </Text>
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="login-form"
      >
        {approveMethod === APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM ? (
          <div style={{ position: 'relative', marginBottom: '10px '}}>
            <input
              className="field-text field-input"
              type="text"
              id={generateId()}
              defaultValue=""
              placeholder="Your ETH wallet"
              {...register(APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM, {
                required: REQUIRED_FIELD_MESSAGE,
                minLength: { value: 10, message: getMinLengthMessage('ETH wallet', 10) },
                maxLength: { value: 24, message: getMaxLengthMessage('ETH wallet', 24) },
              })}
            />
            {errors[APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM] && (
              <Text size="h4" color="red" style={{position: 'absolute'}}>
                {errors[APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM].message}
              </Text>
            )}
          </div>
        ) : (
          <>
            <div style={{ position: 'relative', marginBottom: '10px ' }}>
              <input
                className="field-text field-input"
                type="text"
                id={generateId()}
                placeholder="ETH wallet you paid with"
                {...register(APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM, {
                  required: REQUIRED_FIELD_MESSAGE,
                  minLength: { value: 10, message: getMinLengthMessage('ETH wallet', 10) },
                  maxLength: { value: 24, message: getMaxLengthMessage('ETH wallet', 24) },
                })}
              />
              {errors[APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM] && (
                <Text size="h4" color="red" style={{position: 'absolute'}}>
                  {errors[APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM].message}
                </Text>
              )}
            </div>

            <div style={{ position: 'relative', marginBottom: '10px ' }}>
              <input
                className="field-text field-input mt-4"
                type="text"
                id={generateId()}
                placeholder="ETH wallet to receive tokens"
                {...register(APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES, {
                  required: REQUIRED_FIELD_MESSAGE,
                  minLength: { value: 10, message: getMinLengthMessage('ETH wallet', 10) },
                  maxLength: { value: 24, message: getMaxLengthMessage('ETH wallet', 24) },
                })}
              />
              {errors[APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES] && (
                <Text size="h4" color="red" style={{position: 'absolute'}}>
                  {errors[APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES].message}
                </Text>
              )}
            </div>
          </>
        )}
        <button className="third-register-payment-done approval mt-5" type="submit">
          Done
        </button>
      </form>
    </div>
  </div>
);

export default ApproveBuyModalLayout;

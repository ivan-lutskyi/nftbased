import { ToastContainer } from 'react-toastify';
import { useTranslation } from '../../hooks/translation';
import './style.scss';
import FirstRegisterForm from './components/FirstRegisterForm';
import SecondRegisterForm from './components/SecondRegisterForm';
import ThirdRegisterFormMobile from './components/ThirdRegisterFormMobile';
import { APPROVE_METHODS } from '.';
import { plans } from '../../constants/plans';
import Text from '../../components/Text';
import { COLORS } from '../../constants/colors';

interface IProps {
  onSubmit: (data: any) => void;
  register: any;
  handleSubmit: any;
  errors: any;
  isLoading: boolean;
  activeStep: number;
  country: string;
  countryCode: string;
  onCountryChoose: (value: string) => void;
  countryError: string;
  phoneError: string;
  phone: string;
  phoneChangeHandler: (value: string) => void;
  setCountryCode: (phone: string) => void;
  switchApproveMethod: (
    value: APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM | APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES,
  ) => void;
  approveMethod:
    | APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM
    | APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES;
  userId: string;
}

const ManyStepsRegisterLayout = ({
  onSubmit,
  register,
  handleSubmit,
  errors,
  isLoading,
  activeStep,
  country,
  onCountryChoose,
  setCountryCode,
  countryCode,
  countryError,
  phoneError,
  phone,
  phoneChangeHandler,
  switchApproveMethod,
  approveMethod,
  userId,
}: IProps) => {
  const t = useTranslation();

  const getFormByStep = () => {
    switch (activeStep) {
      case 1:
        return (
          <FirstRegisterForm
            isLoading={isLoading}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
          />
        );

      case 2:
        return (
          <SecondRegisterForm
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            country={country}
            onCountryChoose={onCountryChoose}
            setCountryCode={setCountryCode}
            countryCode={countryCode}
            countryError={countryError}
            phone={phone}
            phoneChangeHandler={phoneChangeHandler}
            phoneError={phoneError}
          />
        );

      case 3:
        return (
          <ThirdRegisterFormMobile
            register={register}
            errors={errors}
            approveMethod={approveMethod}
            switchApproveMethod={switchApproveMethod}
            plansData={plans}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            userId={userId}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="login-background-mobile" />

      {activeStep === 3 ? (
        <div
          style={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: COLORS.WHITE,
              borderRadius: 20,
              padding: 25,
              border: '1px solid grey',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {/* Portfolio Notice */}
            <div
              style={{
                backgroundColor: '#fff3cd',
                border: '1px solid #ffc107',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '20px',
                fontSize: '11px',
                color: '#856404',
              }}
            >
              <strong>Portfolio Demo:</strong> This is a template copy of a closed project.
              Registration works with any data to demonstrate the interface.
            </div>

            <div className="many-steps-register-title-container">
              <span className="login-title-mobile">Purchase</span>

              <div className="many-steps-register-menu">
                <span
                  className={`many-steps-register-menu-item ${
                    activeStep >= 1 && 'many-steps-register-menu-item_active'
                  }`}
                />
                <span
                  className={`many-steps-register-menu-item ${
                    activeStep >= 2 && 'many-steps-register-menu-item_active'
                  }`}
                />
                <span
                  className={`many-steps-register-menu-item ${
                    activeStep === 3 && 'many-steps-register-menu-item_active'
                  }`}
                />
              </div>
            </div>
            {getFormByStep()}
          </div>
        </div>
      ) : (
        <div
          className={activeStep !== 3 ? 'login-container' : ''}
          style={
            activeStep === 3
              ? {
                  width: '90vw',
                  height: 'calc(100vh - 135px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
              : {}
          }
        >
          <div className="login-block-mobile">
            {/* Portfolio Notice */}
            <div
              style={{
                backgroundColor: '#fff3cd',
                border: '1px solid #ffc107',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '20px',
                fontSize: '11px',
                color: '#856404',
              }}
            >
              <strong>Portfolio Demo:</strong> This is a template copy of a closed project.
              Registration works with any data to demonstrate the interface.
            </div>

            <div className="login-title-container">
              <div className="many-steps-register-title-container">
                <Text size="h3" bold className="login-title-mobile">
                  Create an account
                </Text>

                <div className="many-steps-register-menu">
                  <span
                    className={`many-steps-register-menu-item ${
                      activeStep >= 1 && 'many-steps-register-menu-item_active'
                    }`}
                  />
                  <span
                    className={`many-steps-register-menu-item ${
                      activeStep >= 2 && 'many-steps-register-menu-item_active'
                    }`}
                  />
                  <span
                    className={`many-steps-register-menu-item ${
                      activeStep === 3 && 'many-steps-register-menu-item_active'
                    }`}
                  />
                </div>
              </div>
            </div>

            {getFormByStep()}
          </div>
        </div>
      )}
    </>
  );
};

export default ManyStepsRegisterLayout;

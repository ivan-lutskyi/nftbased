import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { AppRoute } from '../../constants/routes';
import {
  step1registerRequest,
  step2registerRequest,
  step3registerRequest,
} from '../../api/auth.service';
import { setUserId } from '../../store/actions/auth';
import { useAuth } from '../../hooks/auth.hook';
import { IRootState } from '../../store';
import ManyStepsRegisterLayout from './ManyStepsRegisterLayout';
import ManyStepsRegisterLayoutMobile from './ManyStepsRegisterLayout.mobile';
import {
  EMAIL_ALREADY_REGISTERED_MESSAGE,
  INCORRECT_DATA_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
} from '../../constants/messages';
import { generateId, handleResponseStatus } from '../../utils';
import { REGISTRATION_STEP_KEY, USER_ID_KEY } from '../../constants/localStorageKeys';
import { validatePhoneNumber } from '../../api/phoneValidation.service';
import {
  firstRegisterDataIntegromatRequest,
  secondRegisterDataIntegromatRequest,
} from '../../api/integromat.service';

export const stepByResponseString = {
  step2: 2,
  step3: 3,
};

export enum APPROVE_METHODS {
  'WALLET_ADDRESS_PAID_FROM' = 'walletAddressPayedFrom',
  'DIFFERENT_WALLET_ADDRESSES' = 'differentWalletAddresses',
}

const ManyStepsRegister = ({
  location,
}: {
  location: { state: { step: 2 | 3; userId: string } };
}) => {
  const { login } = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();

  const initialStep =
    location.state?.step || Number(localStorage.getItem(REGISTRATION_STEP_KEY)) || 1;

  const [activeStep, setActiveStep] = useState<number>(initialStep);
  const gotoNextStep = () => setActiveStep(activeStep + 1);

  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryError, setCountryError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const phoneChangeHandler = (value: string) => {
    if (typeof value === 'string' && value.length) {
      setPhone(value);
    }
  };

  const [approveMethod, setApproveMethod] = useState<
    APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM | APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES
  >(APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM);

  const switchApproveMethod = (
    value: APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM | APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES,
  ) => {
    setApproveMethod(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onCountryChoose = (inputValue: any) => {
    setCountryError('');
    setCountry(inputValue);
  };

  const userId = location.state?.userId || localStorage.getItem(USER_ID_KEY) || null;
  const onFrontSideError = () => toast(INCORRECT_DATA_MESSAGE);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    // Demo mode: Accept any data and proceed through steps
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (activeStep === 1) {
      // Step 1: Always succeed
      const mockUserId = 'demo-user-' + Date.now();
      localStorage.setItem(USER_ID_KEY, mockUserId);
      localStorage.setItem(REGISTRATION_STEP_KEY, '2');
      gotoNextStep();
    } else if (activeStep === 2) {
      // Step 2: Always succeed (skip phone validation in demo mode)
      setPhoneError('');
      setCountryError('');

      const currentUserId =
        userId || localStorage.getItem(USER_ID_KEY) || 'demo-user-' + Date.now();
      localStorage.setItem(USER_ID_KEY, currentUserId);
      localStorage.setItem(REGISTRATION_STEP_KEY, '3');
      gotoNextStep();
    } else if (activeStep === 3) {
      // Step 3: Complete registration and go to account
      const mockUserId = userId || 'demo-user-' + Date.now();
      const mockToken = 'demo-token-' + Date.now();

      dispatch(setUserId(mockToken));
      login(mockToken, mockUserId);
      history.push(AppRoute.ACCOUNT.route);
    }
    setIsLoading(false);
  };

  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return (
    <>
      {isDeviceMobile ? (
        <ManyStepsRegisterLayoutMobile
          userId={location?.state?.userId}
          isLoading={isLoading}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          activeStep={activeStep}
          country={country}
          onCountryChoose={onCountryChoose}
          setCountryCode={setCountryCode}
          countryCode={countryCode}
          countryError={countryError}
          phone={phone}
          phoneChangeHandler={phoneChangeHandler}
          phoneError={phoneError}
          approveMethod={approveMethod}
          switchApproveMethod={switchApproveMethod}
        />
      ) : (
        <ManyStepsRegisterLayout
          userId={location?.state?.userId}
          isLoading={isLoading}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          activeStep={activeStep}
          country={country}
          onCountryChoose={onCountryChoose}
          setCountryCode={setCountryCode}
          countryCode={countryCode}
          countryError={countryError}
          phone={phone}
          phoneChangeHandler={phoneChangeHandler}
          phoneError={phoneError}
          approveMethod={approveMethod}
          switchApproveMethod={switchApproveMethod}
        />
      )}
    </>
  );
};

// @ts-ignore
export default withRouter(ManyStepsRegister);

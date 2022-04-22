import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { SetStateAction, useEffect, useState, Dispatch } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import PlansLayout, { IPlan } from './PlansLayout';
import PlansMobileLayout from './PlansLayout.mobile';
import { plans } from '../../constants/plans';
import ApproveBuyModal from '../../components/ApproveBuyModal';
import { APPROVE_METHODS } from '../ManyStepsRegister';
import { AppRoute } from '../../constants/routes';
import { USER_ID_KEY } from '../../constants/localStorageKeys';
import { step3registerRequest } from '../../api/auth.service';
import { setUserId } from '../../store/actions/auth';
import {
  DONE_OPERATION_MESSAGE,
  INCORRECT_DATA_MESSAGE,
  LOGIN_AGAIN_MESSAGE,
} from '../../constants/messages';
import { handleResponseStatus } from '../../utils';
import { COLORS } from '../../constants/colors';

export type IPlanState = null | IPlan;

export interface IPlansLayoutProps {
  plansData: IPlan[];
  isBuyModalOpened: boolean;
  changeBuyModalOpenedStatus: (value: boolean) => void;
  selectedPlan: IPlanState;
  setSelectedPlan: Dispatch<SetStateAction<IPlanState>>;
  onDoneBtnClick: () => void;
  currentRoute: string;
  children: any;
}

const Plans = () => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';
  const currentRoute = useLocation().pathname;

  const [isBuyModalOpened, setIsBuyModalOpened] = useState(false);
  const [isApproveModalOpened, setIsApproveModalOpened] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState<IPlanState>(null);

  const changeBuyModalOpenedStatus = (isOpened: boolean) => {
    if (!isDeviceMobile) {
      document.body.style.overflow = isOpened ? 'hidden' : 'overlay';
    }
    setIsBuyModalOpened(isOpened);
  };

  useEffect(() => {
    if (isDeviceMobile) {
      const buyModal = document.querySelector('.buyModal-container-mobile');
      if (buyModal) {
        buyModal.scrollIntoView();
      }
    }
  }, [isBuyModalOpened]);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        changeBuyModalOpenedStatus(false);
      }
    });

    return () => {
      changeBuyModalOpenedStatus(false);
      window.removeEventListener('keydown', () => {}, true);
    };
  }, []);

  useEffect(() => {
    if (!isDeviceMobile) {
      document.body.style.overflow = isApproveModalOpened ? 'hidden' : 'overlay';
    } else if (isDeviceMobile) {
      const approvalModal = document.querySelector('.approval-done-img');
      if (approvalModal) {
        approvalModal.scrollIntoView();
      }
    }
  }, [isApproveModalOpened]);

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
  } = useForm();

  const onCloseModalsClick = () => {
    changeBuyModalOpenedStatus(false);
    setIsApproveModalOpened(false);
  };

  const userId = localStorage.getItem(USER_ID_KEY) || null;

  const onSubmit = async (data: any) => {
    const { walletAddressPayedFrom, differentWalletAddresses } = data;

    const reqBody = {
      userId,
      paymentMethod: approveMethod,
      paymentData:
        approveMethod === 'differentWalletAddresses'
          ? {
              walletAddress: walletAddressPayedFrom,
              walletAddressPayedFrom: differentWalletAddresses,
            }
          : {
              walletAddress: walletAddressPayedFrom,
            },
    };

    if (userId) {
      const response = await step3registerRequest(reqBody);

      const onSuccess = () =>
        toast(DONE_OPERATION_MESSAGE, {
          style: { backgroundColor: 'green', color: COLORS.WHITE },
        });
      const onFrontSideError = () => {
        toast(LOGIN_AGAIN_MESSAGE, {
          style: { backgroundColor: 'red', color: COLORS.WHITE },
        });
      };

      handleResponseStatus(response.status, onSuccess, onFrontSideError);
    }

    onCloseModalsClick();
  };

  const onDoneBtnClick = () => {
    changeBuyModalOpenedStatus(false);
    setIsApproveModalOpened(true);
  };

  return (
    <>
      {!isDeviceMobile ? (
        <>
          {isBuyModalOpened || isApproveModalOpened ? (
            <div
              className="overflow"
              style={{
                position: 'absolute',
                height: currentRoute === AppRoute.HOME.route ? document.body.clientHeight : 'calc(100vh + 200px)',
                width: '100vw',
                top: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 12,
              }}
            />
          ) : (
            ''
          )}
        </>
      ) : (
        <>
          {isBuyModalOpened || isApproveModalOpened ? (
            <div
              className="overflow"
              style={{
                position: 'absolute',
                height: document.body.clientHeight,
                width: '100vw',
                top: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 12,
              }}
            />
          ) : (
            ''
          )}
        </>
      )}

      {isDeviceMobile ? (
        <PlansMobileLayout
          plansData={plans}
          isBuyModalOpened={isBuyModalOpened}
          changeBuyModalOpenedStatus={changeBuyModalOpenedStatus}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          onDoneBtnClick={onDoneBtnClick}
          currentRoute={currentRoute}
        >
          {isApproveModalOpened && (
            <ApproveBuyModal
              switchApproveMethod={switchApproveMethod}
              approveMethod={approveMethod}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              onCloseModalsClick={onCloseModalsClick}
            />
          )}
        </PlansMobileLayout>
      ) : (
        <PlansLayout
          plansData={plans}
          isBuyModalOpened={isBuyModalOpened}
          changeBuyModalOpenedStatus={changeBuyModalOpenedStatus}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          onDoneBtnClick={onDoneBtnClick}
          currentRoute={currentRoute}
        >
          {isApproveModalOpened && (
            <ApproveBuyModal
              switchApproveMethod={switchApproveMethod}
              approveMethod={approveMethod}
              register={register}
              errors={errors}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              onCloseModalsClick={onCloseModalsClick}
            />
          )}
        </PlansLayout>
      )}
    </>
  );
};

export default Plans;

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { APPROVE_METHODS } from '../../screens/ManyStepsRegister';
import { IRootState } from '../../store';
import ApproveBuyModalLayout from './ApproveBuyModalLayout';
import ApproveBuyModalMobileLayout from './ApproveBuyModalLayout.mobile';

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
}

const ApproveBuyModal: FC<IProps> = ({
  switchApproveMethod,
  approveMethod,
  register,
  errors,
  handleSubmit,
  onSubmit,
  onCloseModalsClick,
}) => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  const currentRoute = useLocation().pathname;

  return isDeviceMobile ? (
    <ApproveBuyModalMobileLayout
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      approveMethod={approveMethod}
      switchApproveMethod={switchApproveMethod}
      onCloseModalsClick={onCloseModalsClick}
      currentRoute={currentRoute}
    />
  ) : (
    <ApproveBuyModalLayout
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      approveMethod={approveMethod}
      switchApproveMethod={switchApproveMethod}
      onCloseModalsClick={onCloseModalsClick}
      currentRoute={currentRoute}
    />
  );
};

export default ApproveBuyModal;

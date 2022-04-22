import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import AccountLayout from './AccountLayout';
import AccountMobileLayout from './AccountLayout.mobile';

const Account = () => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? <AccountMobileLayout /> : <AccountLayout />;
};

export default Account;

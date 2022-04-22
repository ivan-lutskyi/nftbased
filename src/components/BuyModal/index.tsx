import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { getETHToUSDCurrency } from '../../api/currency.service';
import { IPlan } from '../../screens/Plans/PlansLayout.mobile';
import { IRootState } from '../../store';
import BuyModalLayout from './BuyModalLayout';
import BuyModalMobileLayout from './BuyModalLayout.mobile';

const ETHWalletAddress = '0x9F93C6797113d5011883503c3fa1C00b29B239E7';
interface IProps {
  selectedPlan: IPlan;
  changeBuyModalOpenedStatus: (value: boolean) => void;
  children?: any;
}
const BuyModal = ({ selectedPlan, changeBuyModalOpenedStatus, children }: IProps) => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';
  const currentRoute = useLocation().pathname;

  const [isCopied, setIsCopied] = useState(false);
  const onWalletAddressClick = () => {
    if (!isDeviceMobile) {
      navigator.clipboard.writeText(ETHWalletAddress);
    } else if (!isDeviceMobile) {
      navigator.clipboard.writeText(ETHWalletAddress);
    }
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const [ethToUsdCurrency, setEthToUsdCurrency] = useState<any>(0);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getETHToUSDCurrency();
      response = await response.json();

      // @ts-ignore
      setEthToUsdCurrency(response.USD);
    }

    fetchMyAPI();
  });

  const onCloseBtnClick = () => changeBuyModalOpenedStatus(false);

  return isDeviceMobile ? (
    <BuyModalMobileLayout
      selectedPlan={selectedPlan}
      onCloseBtnClick={onCloseBtnClick}
      ethToUsdCurrency={ethToUsdCurrency}
      onWalletAddressClick={onWalletAddressClick}
      isCopied={isCopied}
    >
      {children}
    </BuyModalMobileLayout>
  ) : (
    <BuyModalLayout
      selectedPlan={selectedPlan}
      onCloseBtnClick={onCloseBtnClick}
      ethToUsdCurrency={ethToUsdCurrency}
      onWalletAddressClick={onWalletAddressClick}
      isCopied={isCopied}
    >
      {children}
    </BuyModalLayout>
  );
};

export default BuyModal;

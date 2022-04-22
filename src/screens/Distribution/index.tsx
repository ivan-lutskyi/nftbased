import { useEffect, useState } from 'react';
import { getETHToUSDCurrency } from '../../api/currency.service';
import { DimensionedComponent } from '../../utils/dimensions';
import DistributionLayout from './DIstributionLayout';
import DistributionLayoutMobile from './DIstributionLayout.mobile';

const Distribution = () => {
  const [ethToUsdCurrency, setEthToUsdCurrency] = useState<any>(0);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await getETHToUSDCurrency();
      response = await response.json();
      if (response.ok) {
        // @ts-ignore
        setEthToUsdCurrency(response.Data.Data[1].close);
      }
    }

    fetchMyAPI();
  }, []);

  return DimensionedComponent(
    <DistributionLayout ethPrice={ethToUsdCurrency} />,
    <DistributionLayoutMobile ethPrice={ethToUsdCurrency} />,
  );
};

export default Distribution;

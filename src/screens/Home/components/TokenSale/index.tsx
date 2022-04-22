import { useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import { IRootState } from '../../../../store';
import './style.css';
import './style.mobile.css';

import nftbCircle from './img/nftbcircle.png';
import nftbCircleMobile from './img/nftbcircleMobile.png';
import Text from '../../../../components/Text';

const TokenSale = () => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <div className="home-token-sale-container-mobile">
      <Element name='tokenomics' />
      <div style={{ margin: '20px auto' }}>
        <Text size="h1" className="home-token-sale-title-mobile" color="white" fontFamily="Suranna">
          Token sale
        </Text>
      </div>
      <div className="home-token-sale-figure-container-mobile">
        <img src={nftbCircleMobile} alt="" className="home-token-sale-figure-mobile" />
      </div>
    </div>
  ) : (
    <div className="home-token-sale-container">
      <div>
        <Text size="h1" className="home-token-sale-title" color="white" fontFamily="Suranna">
          Token sale
        </Text>
      </div>
      <div className="home-token-sale-figure-container">
        <img src={nftbCircle} alt="" className="home-token-sale-figure" />
      </div>
    </div>
  );
};

export default TokenSale;

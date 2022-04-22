import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';
import backgroundFigurePath from '../../img/background-figure.png';
import './style.css';
import './style.mobile.css';
import { useTranslation } from '../../../../hooks/translation';

const AmazingStart = () => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';
  const t = useTranslation();

  return isDeviceMobile ? (
    <div className="amazing-start-container-mobile">
      <div className="amazing-start-bg" />

      <div className="amazing-start-text-container-mobile">
        <span className="amazing-start-title-mobile">{t('AMAZING_START')}</span>
        <span className="amazing-start-get-started-mobile">{t('GET_STARTED')}</span>
        <p className="amazing-start-text-mobile">
          NFT Based is an experiment in decentralized spontaneous community building. This token is
          our first token and allows users to hold Billions or even Trillions of them. Popular
          worldwide, and already up thousands of percent, Shiba token ($Shib) is the first
          cryptocurrency token to be listed and incentivized on ShibaSwap, our decentralized
          exchange. The remaining 50% was burned to Vitalik Buterin and we were the first project
          following this path, so everyone has to buy on the open market, ensuring a fair and
          complete distribution where devs don&lsquo;t own team tokens they can dump on the
          community.
        </p>
      </div>

      <img src={backgroundFigurePath} alt="" className="amazing-start-figure-mobile" />
    </div>
  ) : (
    <div className="amazing-start-container">
      <div className="amazing-start-bg" />

      <img src={backgroundFigurePath} alt="" className="amazing-start-figure" />

      <div className="amazing-start-text-container">
        <span className="amazing-start-title">{t('AMAZING_START')}</span>
        <span className="amazing-start-get-started">{t('GET_STARTED')}</span>
        <p className="amazing-start-text">
          NFT Based is an experiment in decentralized spontaneous community building. This token is
          our first token and allows users to hold Billions or even Trillions of them. Popular
          worldwide, and already up thousands of percent, Shiba token ($Shib) is the first
          cryptocurrency token to be listed and incentivized on ShibaSwap, our decentralized
          exchange. The remaining 50% was burned to Vitalik Buterin and we were the first project
          following this path, so everyone has to buy on the open market, ensuring a fair and
          complete distribution where devs don&lsquo;t own team tokens they can dump on the
          community.
        </p>
      </div>

      <div className="home-lead-screen-learn_more">
        <span>Learn more</span>
      </div>
    </div>
  );
};

export default AmazingStart;

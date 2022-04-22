import { Dispatch, FC, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { chartRangeType, chartRangeTypes } from '.';
import { COLORS } from '../../../../constants/colors';
import { AppRoute } from '../../../../constants/routes';
import { TokenDataType } from '../../../../store/reducers/token';

import ApexChart from '../Chart';
import { ReactComponent as NFTtoken } from './img/nft-token.svg';
import './style.mobile.scss';

interface IProps {
  tokenData: TokenDataType;
  setCurrentTokenRange: Dispatch<SetStateAction<chartRangeType>>;
  currentTokenRange: chartRangeType;
}

const TokensMobileLayout: FC<IProps> = ({ tokenData, setCurrentTokenRange, currentTokenRange }) => {
  const tokensCount = 15000.72501;
  const dollarsPerToken = 0.015;
  const changesLastDay = 0.25;

  return (
    <div className="tokens-container-mobile">
      <div className="tokens-title-container-mobile">
        <span className="tokens-title-text-mobile">Your tokens</span>
      </div>

      <div className="tokens-count-mobile">
        <NFTtoken className="tokens-count-icon" />

        <span className="tokens-count-text-mobile">{`${tokensCount} NTFB`}</span>
      </div>

      <div className="tokens-in-dollars-mobile">
        <span className="tokens-in-dollars-text-mobile">{`= € ${(
          tokensCount * dollarsPerToken
        ).toFixed(2)}`}</span>
      </div>

      <div className="tokens-chart-container-mobile">
        <div className="tokens-chart-currency-mobile">
          <span>
            <span className="tokens-chart-currency-nft-mobile">1.00 NFB</span>
            <span className="tokens-chart-currency-dollars-mobile">{` = € ${dollarsPerToken}`}</span>
          </span>

          <div>
            <span className="tokens-chart-currency-changes-text-mobile">{`${changesLastDay}% 24 hours`}</span>
          </div>
        </div>

        <ApexChart chartData={tokenData} />

        <div className="tokens-chart-range-buttons-container-mobile">
          {chartRangeTypes.map((value: chartRangeType) => (
            <button
              onClick={() => setCurrentTokenRange(value)}
              type="button"
              className="tokens-chart-range-button-mobile"
              style={{
                backgroundColor: currentTokenRange === value ? '#323EC6' : 'inherit',
                color: currentTokenRange === value ? COLORS.WHITE : 'inherit',
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className="tokens-buttons-container-mobile">
        <Link
          to={AppRoute.BUY.route}
          className="tokens-btn tokens-btn-buy-mobile"
          onClick={() => {
            setTimeout(() => {
              document.getElementById('currency-area')?.scrollIntoView({
                block: 'center',
                inline: 'center',
              });
            }, 1000);
          }}
        >
          Buy
        </Link>
        <span className="tokens-btn-mobile tokens-btn-sell-mobile">Sell</span>
      </div>

      <span className="tokens-btn-mobile tokens-btn-trade-mobile">Trade</span>
    </div>
  );
};

export default TokensMobileLayout;

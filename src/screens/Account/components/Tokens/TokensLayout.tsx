import { Dispatch, FC, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { chartRangeType, chartRangeTypes } from '.';
import { COLORS } from '../../../../constants/colors';
import { AppRoute } from '../../../../constants/routes';
import { TokenDataType } from '../../../../store/reducers/token';
import { generateId } from '../../../../utils';
import ApexChart from '../Chart';
import { ReactComponent as NFTtoken } from './img/nft-token.svg';
import './style.scss';

interface IProps {
  tokenData: TokenDataType;
  setCurrentTokenRange: Dispatch<SetStateAction<chartRangeType>>;
  currentTokenRange: chartRangeType;
}

const TokensLayout: FC<IProps> = ({ tokenData, setCurrentTokenRange, currentTokenRange }) => {
  const tokensCount = 315000;
  const dollarsPerToken = 0.01;
  const changesLastDay = 0.25;

  return (
    <div className="tokens-container">
      <div className="tokens-title-container">
        <span className="tokens-title-text">Your tokens</span>
      </div>

      <div className="tokens-values-container">
        <div className="tokens-count">
          <NFTtoken className="tokens-count-icon" style={{ width: '10%' }} />

          <span className="tokens-count-text" style={{ width: '50%' }}>
            {`${tokensCount} NTFB`}
          </span>

          <div
            style={{
              width: '40%',
              height: '80%',
              display: 'flex',
              justifyContent: 'flex-end',
              paddingRight: 20,
            }}
          >
            <div
              style={{
                width: 100,
                padding: '4px 10px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#323EC6',
                color: COLORS.WHITE,
                justifyContent: 'center',
                borderRadius: 5,
                marginLeft: '20px',
                fontSize: '.8rem',
              }}
            >
              <Link
                style={{ color: COLORS.WHITE }}
                to={AppRoute.BUY.route}
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById('currency-area')?.scrollIntoView({
                      block: 'center',
                      inline: 'center',
                    });
                  }, 1000);
                }}
              >
                Buy more
              </Link>
            </div>
          </div>
        </div>

        <div className="tokens-in-dollars">
          <span className="tokens-in-dollars-text">{`= € ${(tokensCount * dollarsPerToken).toFixed(
            2,
          )}`}</span>
        </div>
      </div>

      <div className="tokens-chart-container">
        <div className="tokens-chart-currency">
          <span>
            <span className="tokens-chart-currency-nft">1.00 NFB</span>
            <span className="tokens-chart-currency-dollars">{` = € ${dollarsPerToken}`}</span>
          </span>

          <div>
            <span className="tokens-chart-currency-changes-text">{`${changesLastDay}% 24 hours`}</span>
          </div>
        </div>

        <ApexChart chartData={tokenData} />

        <div className="tokens-chart-range-buttons-container">
          {chartRangeTypes.map((value: chartRangeType) => (
            <button
              key={generateId()}
              onClick={() => setCurrentTokenRange(value)}
              type="button"
              className="tokens-chart-range-button"
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

      <div className="tokens-buttons-container">
        <Link
          to={AppRoute.BUY.route}
          className="tokens-btn tokens-btn-buy"
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

        <span className="tokens-btn tokens-btn-sell" style={{ opacity: 0.3 }}>
          Sell
        </span>
        <span className="tokens-btn tokens-btn-trade" style={{ opacity: 0.3 }}>
          Trade
        </span>
      </div>

      <div className="tokens-buttons-container tokens-buttons-container-footer">
        <div className="tokens-btn-container">
          <span className="tokens-btn-label">Get tokens from the emmiter</span>
        </div>
        <div className="tokens-btn-container">
          <span className="tokens-btn-label">Sell tokens OTC</span>
        </div>
        <div className="tokens-btn-container">
          <span className="tokens-btn-label">Trade tokens on exchanges</span>
        </div>
      </div>
    </div>
  );
};

export default TokensLayout;

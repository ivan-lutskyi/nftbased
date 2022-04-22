import { FC } from 'react';
import './style.mobile.css';

interface IProps {
  ethPrice: number;
}

const DistributionLayoutMobile: FC<IProps> = (props) => {
  const { ethPrice } = props;

  return (
    <div className="ditribution-container-mobile">
      <span className="ditribution-title-mobile">Distribution of tokens</span>

      <div className="jc-between_ai-center" style={{ marginTop: 40 }}>
        <span className="ditribution-grey-text-mobile">Remaining tokens</span>
        <span className="ditribution-grey-text-mobile">Tokens on sale</span>
      </div>

      {/* range */}
      <div className="ditribution-progress-mobile">
        <div className="ditribution-progress-mobile ditribution-progress-fill-mobile" />
      </div>

      <div className="jc-between_ai-center">
        <span className="ditribution-blue-text-mobile">388.456.670.436 NFB</span>
        <span className="ditribution-blue-text-mobile">500.000.000.000 NFB</span>
      </div>

      <div className="ditribution-price-block-mobile">
        <div className="ditribution-price-col aiStart">
          <span className="ditribution-grey-text-mobile ditribution-price-title">NFB Price:</span>
          <span className="ditribution-blue-text-mobile" style={{ margin: '15px 0' }}>
            1 NFB = 0.01€
          </span>
          <span className="ditribution-grey-text-mobile fs-12" style={{ fontSize: '8px' }}>
            (0,0000421 ETH)
          </span>
        </div>

        <div className="ditribution-price-col aiCenter" style={{ textAlign: 'center' }}>
          <span className="ditribution-grey-text-mobile ditribution-price-title">
            Accepted currency:
          </span>

          <span
            className="ditribution-blue-text-mobile"
            style={{
              marginTop: 10,
            }}
          >
            Ethereum
          </span>
        </div>

        <div className="ditribution-price-col aiEnd" style={{ textAlign: 'right' }}>
          <span className="ditribution-grey-text-mobile ditribution-price-title">
            Pre-sale end date:
          </span>

          <span
            className="ditribution-blue-text-mobile"
            style={{
              marginTop: 10,
            }}
          >
            01.10.21
          </span>
        </div>
      </div>
    </div>
  );
};

export default DistributionLayoutMobile;

import { FC } from 'react';
import Text from '../../components/Text';
import './style.css';

interface IProps {
  ethPrice: number;
}

const DistributionLayout: FC<IProps> = (props) => {
  const { ethPrice } = props;

  return (
    <div className="ditribution-container">
      <Text size="h1" fontFamily="Suranna" className="ditribution-title">
        Distribution of tokens
      </Text>

      <div className="jc-between_ai-center range-subtititle-container">
        <Text size="h3" color="#878691" className="ditribution-grey-text">
          Remaining tokens
        </Text>
        <Text size="h3" color="#878691" className="ditribution-grey-text">
          Tokens on sale
        </Text>
      </div>

      {/* range */}
      <div className="ditribution-progress">
        <div className="ditribution-progress ditribution-progress-fill" />
      </div>

      <div className="jc-between_ai-center">
        <Text size="h3" color="#20246B" className="ditribution-blue-text">
          388.456.670.436 NFB
        </Text>
        <Text size="h3" color="#20246B" className="ditribution-blue-text">
          500.000.000.000 NFB
        </Text>
      </div>

      <div className="ditribution-price-block">
        <div className="ditribution-price-col aiStart">
          <Text size="h3" color="#878691" className="ditribution-grey-text">
            NFB Price:
          </Text>
          <Text size="h3" color="#20246B" className="ditribution-blue-text my-3">
            1 NFB = 0.01€
          </Text>
          <Text size="h4" color="#878691" className="ditribution-grey-text">
            (0,0000421 ETH)
          </Text>
        </div>

        <div className="ditribution-price-col aiCenter">
          <Text size="h3" color="#878691" className="ditribution-grey-text my-1">
            Accepted currency:
          </Text>
          <Text size="h3" color="#20246B" className="ditribution-blue-text my-3">
            Ethereum
          </Text>
        </div>

        <div className="ditribution-price-col aiEnd">
          <Text size="h3" color="#878691" className="ditribution-grey-text my-1">
            Pre-sale end date:
          </Text>
          <Text size="h3" color="#20246B" className="ditribution-blue-text my-3">
            01.10.21
          </Text>
        </div>
      </div>
    </div>
  );
};

export default DistributionLayout;

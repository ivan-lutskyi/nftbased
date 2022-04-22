import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';
import { ReactComponent as TickIcon } from '../../img/tick-icon.svg';
import './style.scss';
import './style.mobile.scss';
import Button from '../../../../components/Button';
import { COLORS } from '../../../../constants/colors';

interface IProps {
  name: string;
  title: string;
  description: string;
  options: { text: string; value: string }[];
  price: string | number;
  figurePath: string;
}

const PlanItem = ({ name, title, description, options, price, figurePath }: IProps) => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <div className="plan-item-container-mobile">
      <div className="plan-item-info-mobile">
        <div className="plan-item-img-container-mobile">
          <img src={figurePath} alt="" className="plan-item-img-mobile" />
        </div>

        {/* <span className="plan-item-name-mobile">{name}</span> */}

        <span className="plan-item-title-mobile">{title}</span>

        <span className="plan-item-description-mobile">{description}</span>

        <ul className="plan-item-options-list">
          {options.map((option) => (
            <li className="plan-item-option-item-mobile">
              <TickIcon className="plan-item-option-item-icon" />
              {option}
            </li>
          ))}
        </ul>

        <span className="plan-item-price-mobile">${price}</span>

        <Button
          text="Select plan"
          bgColor={COLORS.DARK_PURPLE}
          textColor="white"
          rounded
          onClick={() => {}}
          size="m"
        />
      </div>
    </div>
  ) : (
    <div className="plan-item-container">
      <div className="plan-item-img-container">
        <img src={figurePath} alt="" className="plan-item-img" />
      </div>

      <div className="plan-item-info">
        {/* <span className="plan-item-name">{name}</span> */}
        <span className="plan-item-title">{title}</span>
        <span className="plan-item-description">{description}</span>
        <ul className="plan-item-options-list">
          {options.map((option) => (
            <li className="plan-item-option-item">
              <TickIcon className="plan-item-option-item-icon" />
              {option}
            </li>
          ))}
        </ul>
        <span className="plan-item-price">${price}</span>

        <Button
          text="Select plan"
          bgColor={COLORS.DARK_PURPLE}
          textColor="white"
          rounded
          onClick={() => {}}
          size="m"
        />
      </div>
    </div>
  );
};

export default PlanItem;

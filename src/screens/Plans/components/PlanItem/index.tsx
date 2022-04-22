import { Dispatch, SetStateAction, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';
import { IRootState } from '../../../../store';
import './style.scss';
import './style.mobile.scss';
import Button from '../../../../components/Button';
import { COLORS } from '../../../../constants/colors';
import { IPlanState } from '../..';
import { generateId } from '../../../../utils';
import { useAuth } from '../../../../hooks/auth.hook';
import { AppRoute } from '../../../../constants/routes';
import Text from '../../../../components/Text';

interface IProps {
  isRegisterForm?: boolean;
  title: string;
  description: string;
  options: { text: string; value: string }[];
  price: {
    value: number;
    formatted: string;
  };
  changeBuyModalOpenedStatus: (value: boolean) => void;
  setSelectedPlan: Dispatch<SetStateAction<IPlanState>>;
}

const PlanItem = ({
  isRegisterForm,
  title,
  description,
  options,
  price,
  changeBuyModalOpenedStatus,
  setSelectedPlan,
}: IProps) => {
  const history = useHistory();
  const { token } = useAuth();

  const isAuthenticated = Boolean(useSelector((state: IRootState) => state.auth.userId)) || !!token;
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <div className="plan-item-container-mobile">
      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 20,
        }}
      >
        <span className="plan-item-title-mobile">{title}</span>
        <span className="plan-item-price-mobile">${price.formatted}</span>
      </div>

      <ul className="plan-item-options-list-mobile">
        {options.map(({ text, value }, i) => (
          <li className="plan-item-option-item-mobile" key={generateId()}>
            {text} <span style={{ fontWeight: 600, paddingTop: 3, marginLeft: 3 }}>{value}</span>
          </li>
        ))}
      </ul>

      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Link to="buyModal" smooth delay={0} duration={100}>
          <Button
            text="Select plan"
            bgColor={COLORS.DARK_PURPLE}
            textColor="white"
            rounded
            onClick={() => {
              if (isAuthenticated || isRegisterForm) {
                changeBuyModalOpenedStatus(true);
                setSelectedPlan({
                  title,
                  description,
                  options,
                  price,
                });
              } else {
                history.push(AppRoute.REGISTER.route);
              }
            }}
            size="m"
            customWidth="100%"
          />
        </Link>
      </div>
    </div>
  ) : (
    <div className="plan-item-container">
      <div className="plan-item-title">
        <Text size="h4">{title}</Text>

        <div
          style={{
            width: 55,
            height: 1,
            backgroundColor: '#CCCCCC',
            marginBottom: 5,
            marginTop: 10,
          }}
        />
        <div
          style={{
            width: 30,
            height: 1,
            backgroundColor: '#CCCCCC',
            marginBottom: 30,
          }}
        />
      </div>

      <Text size="h2" className="plan-item-price" bold>
        ${price.formatted}
      </Text>

      <ul className="plan-item-options-list">
        {options.map(({ text, value }, i) => (
          <li
            key={generateId()}
            className="plan-item-option-item"
            style={{ backgroundColor: (i + 1) % 2 === 0 ? COLORS.WHITE : '#F1F1F3' }}
          >
            <Text size="h4" color="#878691" textAlign="center">
              {text}{' '}
            </Text>

            <Text size="h4" color="#878691" bold>
              {value}
            </Text>
          </li>
        ))}
      </ul>

      <Link to="buyModal" smooth delay={0} duration={100} offset={-50}>
        <Button
          text="Select plan"
          bgColor={COLORS.DARK_PURPLE}
          textColor="white"
          rounded
          onClick={() => {
            if (isAuthenticated || isRegisterForm) {
              changeBuyModalOpenedStatus(true);
              setSelectedPlan({
                title,
                description,
                options,
                price,
              });
            } else {
              history.push(AppRoute.REGISTER.route);
            }
          }}
          size="m"
          customWidth="80%"
        />
      </Link>
    </div>
  );
};

export default PlanItem;

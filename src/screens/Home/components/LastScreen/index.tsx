import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';
import backgroundFigurePath from '../../img/last-screen-figure.png';

import { useTranslation } from '../../../../hooks/translation';
import { AppRoute } from '../../../../constants/routes';
import { ReactComponent as RightArrowIcon } from '../../../GetStarted/img/rightArrow.svg';
import Button from '../../../../components/Button';
import { COLORS } from '../../../../constants/colors';

import Animated from '../Animated/Animated';

import './style.scss';
import './style.mobile.scss';
import Text from '../../../../components/Text';

const LastScreen = () => {
  // useEffect(() => animation(), []);
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <div className="home-last-screen-container-mobile">
      <span className="home-last-screen-title-mobile">
        Hurry up to buy a token at the best price
      </span>

      <Button
        text="Buy now"
        bgColor={COLORS.DARK_PURPLE}
        textColor="white"
        iconRight={<RightArrowIcon />}
        rounded
        link={AppRoute.PRICING.route}
        isLink
        onClick={() => {}}
        size="s"
      />

      <img src={backgroundFigurePath} alt="" className="home-last-screen-figure-mobile" />
    </div>
  ) : (
    <div className="home-last-screen-container">
      <Text className="home-last-screen-title" size="h3" color="white">
        Hurry up to buy a token at the best price
      </Text>

      <Button
        text="Buy now"
        bgColor={COLORS.DARK_PURPLE}
        textColor="white"
        iconRight={<RightArrowIcon />}
        rounded
        link={AppRoute.PRICING.route}
        isLink
        onClick={() => {}}
        size="m"
      />

      <Animated />
    </div>
  );
};

export default LastScreen;

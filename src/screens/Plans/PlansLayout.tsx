import { Element } from 'react-scroll';
import PlanItem from './components/PlanItem';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './style.scss';
import BuyModal from '../../components/BuyModal';
import { IPlansLayoutProps } from '.';
import { generateId } from '../../utils';
import Text from '../../components/Text';
import { COLORS } from '../../constants/colors';
import { AppRoute } from '../../constants/routes';

export interface IPlan {
  title: string;
  description: string;
  options: { text: string; value: string }[];
  price: {
    value: number;
    formatted: string;
  };
}

const PlansLayout = ({
  plansData,
  isBuyModalOpened,
  changeBuyModalOpenedStatus,
  selectedPlan,
  setSelectedPlan,
  onDoneBtnClick,
  currentRoute,
  children,
}: IPlansLayoutProps) => (
  <div
    className="full_screen-container plans-container"
    style={{
      position: currentRoute === AppRoute.HOME.route ? 'relative' : 'absolute',
    }}
  >
    {currentRoute === AppRoute.PRICING.route ? (
      <Element
        style={{ top: window.innerHeight < 700 ? '45px' : '-80px', position: 'absolute' }}
        name="buyModal"
      />
    ) : currentRoute === AppRoute.HOME.route ? (
      <Element
        style={{ top: window.innerHeight < 750 ? '25px' : '-80px', position: 'absolute' }}
        name="buyModal"
      />
    ) : (
      ''
    )}
    {isBuyModalOpened && selectedPlan && (
      <BuyModal changeBuyModalOpenedStatus={changeBuyModalOpenedStatus} selectedPlan={selectedPlan}>
        <button onClick={onDoneBtnClick} className="third-register-payment-done" type="button">
          Payment done
        </button>
      </BuyModal>
    )}

    {children}

    <div className="plans-title-container">
      <Text className="plans-title" size="h1" fontFamily="Suranna">
        Choose your plan
      </Text>

      <br />

      <Text className="plans-title-description" size="h4">
        Discover the world of NFTs through a token that succesfuly combines cryptocurrency
        investment with traditional dividends. Our packages are suitable for a wide range of
        investors that recognize the true potential and the direction the world is turning to. Enter
        into a new age of digitalized art.
      </Text>
    </div>

    <div className="plans-list">
      {plansData.map(({ title, description, options, price }) => (
        <PlanItem
          title={title}
          description={description}
          options={options}
          price={price}
          changeBuyModalOpenedStatus={changeBuyModalOpenedStatus}
          setSelectedPlan={setSelectedPlan}
          key={generateId()}
        />
      ))}
    </div>

    <Text className="plans-footer-title" size="h5" color="#878691">
      * Your tokens will go to your wallet within 20 minutes. If you think there is an error - write
      to
      <a href="mailto:support@nftbased.net" style={{ color: COLORS.DARK_PURPLE, marginLeft: 5 }}>
        support@nftbased.net
      </a>
    </Text>
  </div>
);

export default PlansLayout;

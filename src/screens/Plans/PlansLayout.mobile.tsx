import PlanItem from './components/PlanItem';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './style.mobile.scss';
import { IPlansLayoutProps } from '.';
import BuyModal from '../../components/BuyModal';
import { generateId } from '../../utils';
import { COLORS } from '../../constants/colors';

export interface IPlan {
  title: string;
  description: string;
  options: { text: string; value: string }[];
  price: {
    value: number;
    formatted: string;
  };
}

const PlansMobileLayout = ({
  plansData,
  isBuyModalOpened,
  changeBuyModalOpenedStatus,
  selectedPlan,
  setSelectedPlan,
  currentRoute,
  onDoneBtnClick,
  children,
}: IPlansLayoutProps) => (
  <div className="plans-container-mobile">
    {isBuyModalOpened && selectedPlan && (
      <BuyModal changeBuyModalOpenedStatus={changeBuyModalOpenedStatus} selectedPlan={selectedPlan}>
        <button onClick={onDoneBtnClick} className="third-register-payment-done" type="button">
          Payment done
        </button>
      </BuyModal>
    )}

    {children}

    <div className="plans-title-container-mobile">
      <span className="plans-title-mobile">Choose your plan</span>

      <p className="plans-title-description-mobile">
        Discover the world of NFTs through a token that succesfuly combines cryptocurrency
        investment with traditional dividends. Our packages are suitable for a wide range of
        investors that recognize the true potential and the direction the world is turning to. Enter
        into a new age of digitalized art.
      </p>
    </div>

    <div className="plans-list" style={{ display: 'flex', flexDirection: 'column' }}>
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

    <span className="plans-footer-title" style={{ marginTop: '0px', marginBottom: '30px' }}>
      * Your tokens will go to your wallet within 20 minutes.
      <br />
      If you think there is an error - write to
      <br />
      <a href="mailto:support@nftbased.io" style={{ color: COLORS.DARK_PURPLE, marginLeft: 5 }}>
        support@nftbased.io.
      </a>
    </span>
  </div>
);

export default PlansMobileLayout;

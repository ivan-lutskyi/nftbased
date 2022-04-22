import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link as ScrollLink } from 'react-scroll';
import { IRootState } from '../../../../store';
import backgroundFigurePath from '../../img/lead-screen-figure.png';
import { useTranslation } from '../../../../hooks/translation';
import { homeTitleScreenTitle } from '../../../../constants/texts';
import Text from '../../../../components/Text';
import './style.scss';
import './style.mobile.scss';

const LeadScreenMobileLayout = () => (
  <div className="home-lead-screen-container-mobile">
    <div className="home-lead-screen-text-container-mobile">
      <Text
        size="h1"
        className="home-lead-screen-title-mobile"
        style={{ lineHeight: '100%' }}
        fontFamily="Suranna"
      >
        {homeTitleScreenTitle}
      </Text>

      <Text size="h4" className="home-lead-screen-subtitle-mobile">
        Receive dividends from investing into artwork.
      </Text>
    </div>

    <div id="home-background-mobile">
      <div className="home-lead-screen-figure-container-mobile">
        <img src={backgroundFigurePath} alt="" className="home-lead-screen-figure-mobile" />
      </div>
    </div>
  </div>
);

const LeadScreenLayout: FC<{ onLearnMoreBtnClick: () => void, isLoaded: any }> = ({ onLearnMoreBtnClick, isLoaded}) => (
  <>  
    {isLoaded ? <div id="home-background" className='loaded'/> : <div id="home-background"/>}
    
    <div className="home-lead-screen-container">
      <div className="home-lead-screen-text-container">
        <Text size="h1" className="home-lead-screen-title" fontFamily="Suranna">
          {homeTitleScreenTitle}
        </Text>

        <Text size="h3" className="home-lead-screen-subtitle">
          Receive dividends from investing into artwork.
        </Text>
      </div>

      <div />

      {
        isLoaded ? '' : 
        <img src={backgroundFigurePath} alt='' className="home-lead-screen-figure" />
      }

      <button type="button" onClick={onLearnMoreBtnClick} className="home-lead-screen-learn_more">
        <ScrollLink to="home_article_1" smooth delay={0} duration={100}>
          <Text size="h4">Learn more</Text>
        </ScrollLink>
      </button>
    </div>
  </>
);

const LeadScreen = ({isLoaded} : any) => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';
  const t = useTranslation();

  const onLearnMoreBtnClick = () => window.scrollTo(0, window.innerHeight);

  return (
    <>
      {isDeviceMobile ? (
        <LeadScreenMobileLayout />
      ) : (
        <LeadScreenLayout onLearnMoreBtnClick={onLearnMoreBtnClick} isLoaded={isLoaded} />
      )}
    </>
  );
};

export default LeadScreen;

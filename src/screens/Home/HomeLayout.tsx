import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../../hooks/translation';
import { generateId } from '../../utils';
import HomeArticle from './components/HomeArticle';
import TokenSale from './components/TokenSale';
import TeamScreen from './components/Team';
import LeadScreen from './components/LeadScreen';
import VideoScreen from './components/VideoScreen';
import Roadmap from '../Roadmap/index';
import FixedHeader from '../../components/FixedHeader';
import LastScreen from './components/LastScreen';
import Plans from '../Plans';

import './style.css';
import Distribution from '../Distribution';
import backgroundScroll from '../../scripts/background-scroll';
import { IHomeArticle } from '.';

interface IProps {
  articles: IHomeArticle[];
  isLoaded: boolean;
  setIsLoaded(value: boolean): void;
}

const HomeLayout = ({ articles, isLoaded, setIsLoaded }: IProps) => {
  const t = useTranslation();

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    backgroundScroll(setIsLoaded, isLoaded);
  }, [dimensions, isLoaded]);

  return (
    <>
      { isLoaded ? <canvas id="hero-lightpass" /> : <canvas id="hero-lightpass" style={{display: 'none'}}/>}
      {/* <CoreLoader /> */}
      <div className="home-container">
        <FixedHeader />

        <LeadScreen isLoaded={isLoaded}/>

        {articles.map(({ title, text, imgPath, theme, direction }) => (
          <HomeArticle
            theme={theme}
            direction={direction}
            key={generateId()}
            title={t(title)}
            text={text}
            imgPath={imgPath}
          />
        ))}
        <VideoScreen />
        <Plans />
        <TokenSale />
        <Distribution />
        <TeamScreen />
        <Roadmap />
        {/* <LastScreen /> */}
      </div>
    </>
  );
};

export default HomeLayout;

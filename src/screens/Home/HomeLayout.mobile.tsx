import { useTranslation } from '../../hooks/translation';
import { generateId } from '../../utils';
import HomeArticle from './components/HomeArticle';
import TeamScreen from './components/Team';
import LeadScreen from './components/LeadScreen';
import VideoScreen from './components/VideoScreen';
import TokenSale from './components/TokenSale';
import LastScreen from './components/LastScreen';
import Roadmap from '../Roadmap';
import FixedHeader from '../../components/FixedHeader';
import Plans from '../Plans';
import './style.css';
import Distribution from '../Distribution';
import { IHomeArticle } from './index';

interface IProps {
  articles: IHomeArticle[];
}

const HomeMobileLayout = ({ articles }: IProps) => {
  const t = useTranslation();

  return (
    <div className="home-container-mobile"> 
      <FixedHeader />
      <LeadScreen />

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
  );
};

export default HomeMobileLayout;

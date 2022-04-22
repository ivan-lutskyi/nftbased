import { useState } from 'react';
import { useSelector } from 'react-redux';
import HomeLayout from './HomeLayout';
import { foundersNft, whatIsNft } from '../../constants/texts';
import figure2Path from './img/render_2.png';
import figureGif2Path from './img/FIGURE_1.gif';
import HomeMobileLayout from './HomeLayout.mobile';
import { IRootState } from '../../store';

export interface IHomeArticle {
  title: string;
  text: string;
  styles?: any | null;
  imgPath?: string;
  subTitle: string;
  isButton?: boolean;
  theme: 'light' | 'dark';
  direction: 'row_text-img' | 'row_img-text' | 'col_img-text' | 'col_text-img';
}

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

const articles: IHomeArticle[] = [
  {
    title: 'What is NFT?',
    subTitle: 'Read more',
    text: whatIsNft,
    imgPath: isLoaded ? '' : figure2Path,
    isButton: false,
    theme: 'light',
    direction: 'row_img-text',
  },
  {
    title: 'What is NFTbased?',
    subTitle: 'Founders',
    text: foundersNft,
    theme: 'dark',
    direction: 'col_text-img',
    imgPath: figureGif2Path,
    isButton: false,
  },
];
const articlesMobile: IHomeArticle[] = [
  {
    title: 'What is NFT?',
    subTitle: 'Read more',
    text: whatIsNft,
    imgPath: figure2Path,
    isButton: false,
    theme: 'light',
    direction: 'row_img-text',
  },
  {
    title: 'What is NFTbased?',
    subTitle: 'Founders',
    text: foundersNft,
    theme: 'dark',
    direction: 'col_text-img',
    imgPath: figureGif2Path,
    isButton: false,
  },
];

  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <HomeMobileLayout articles={articlesMobile} />
  ) : (
    <HomeLayout 
      articles={articles} 
      setIsLoaded={setIsLoaded} 
      isLoaded={isLoaded}
    />
  );
};

export default Home;

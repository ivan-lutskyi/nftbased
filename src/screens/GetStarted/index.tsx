import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from '../../hooks/translation';
import { IRootState } from '../../store';
import { generateId } from '../../utils';
import AmazingStart from './components/AmazingStart';
import GetStartedArticle from './components/GetStartedArticle';

import './style.css';
import GetStartedParallaxBg from './components/GetStartedParallaxBg';

const lorem = `Vestibulum eu, vitae feugiat nisl. Commodo dapibus orci, ac ultrices felis blandit.
Blandit tortor, justo quam at ut sapien dolor. Odio in volutpat, gravida venenatis
sed ullamcorper platea viverra. Dolor fringilla ultrices feugiat imperdiet leo
est. Sed sed felis odio tincidunt in leo. Vulputate pellentesque risus et morbi
ut imperdiet sit et. Felis non aliquam mattis cursus felis blandit sollicitudin arcu at.
Blandit mattis sed vitae pulvinar. Risus feugiat sit facilisi sed placerat blandit mauris
nulla amet. Feugiat pulvinar posuere lacus rhoncus est eget turpis. Vel libero libero
elit amet aliquam ornare pretium netus. Porttitor sit lectus duis in aliquet sit.
Sodales quam faucibus dui senectus sed in metus tempus mauris. Commodo hac tortor
ipsum, scelerisque mi suscipit malesuada. Ut aliquam id massa montes, sapien. Donec nec
senectus at lobortis ac eu, sed aliquam. Ipsum suspendisse arcu felis, neque tristique`;

const articles = [
  {
    title: 'WHAT_IS_NFB',
    text: lorem,
    styles: {
      container: {
        height: window.innerHeight - 140,
      },
    },
    id: 'whatIsNFB',
  },
  {
    title: 'FOUNDERS',
    text: lorem,
    styles: null,
    id: 'founders',
  },
  {
    title: 'POWER_OF_NFB',
    text: lorem,
    styles: null,
    id: 'powerOfNFB',
  },
  {
    title: 'EXPLORER',
    text: lorem,
    styles: null,
    id: 'explorer',
  },
  {
    title: 'HISTORY_OF_NFB',
    text: lorem,
    styles: null,
    id: 'history',
  },
];

const GetStarted = () => {
  const params = useParams<{ article: undefined | string }>();
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  useEffect(() => {
    if (params.article && !isDeviceMobile) {
      window.scrollTo({
        top:
          window.innerHeight * (articles.findIndex((element) => element.id === params.article) + 1),
        behavior: 'smooth',
      });
    }
  }, [params]);

  const t = useTranslation();

  return (
    <div className="get-started_container">
      <GetStartedParallaxBg />

      <AmazingStart />

      {articles.map(({ title, text, styles }, index) => (
        <GetStartedArticle
          key={generateId()}
          title={t(title)}
          text={text}
          styles={styles}
          index={index}
        />
      ))}
    </div>
  );
};

export default GetStarted;

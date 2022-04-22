import { Element } from 'react-scroll';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';
import './style.scss';
import './style.mobile.scss';
import Text from '../../../../components/Text';
import { COLORS } from '../../../../constants/colors';

interface IProps {
  title: string;
  text: string;
  imgPath?: string;

  theme: 'light' | 'dark';
  direction: 'row_text-img' | 'row_img-text' | 'col_img-text' | 'col_text-img';
}

const directionPropToFlexDirection = {
  'row_text-img': 'row',
  'row_img-text': 'row-reverse',
  'col_img-text': 'column-reverse',
  'col_text-img': 'column',
};
const directionPropToTextAlign = {
  'row_text-img': 'flex-end',
  'row_img-text': 'flex-start',
  'col_img-text': 'center',
  'col_text-img': 'center',
};

const HomeArticle = ({ title, text, imgPath, theme, direction }: IProps) => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <div
      className="home-article_container-mobile"
      style={{
        backgroundColor: theme === 'dark' ? '#090B2F' : COLORS.WHITE,
        flexDirection: 'column',
      }}
    >
      <div
        className="home-article_text-container-mobile"
        style={{
          alignItems: 'center',
        }}
      >
        <Text
          size="h1"
          color={theme === 'dark' ? COLORS.WHITE : 'black'}
          textAlign="center"
          fontFamily="Suranna"
        >
          {title}
        </Text>

        {/* @ts-ignore */}
        <Text size="h4" color={theme === 'dark' ? COLORS.WHITE : 'black'} textAlign="center">
          {text}
        </Text>
      </div>

      <div className="home-article_img-container-mobile">
        <img src={imgPath} alt="" className="home-article_img-mobile" />
      </div>
    </div>
  ) : (
    <Element name={title === 'What is NFT?' ? 'home_article_1' : 'home_article_2'}>
      <div
        className="home-article_container"
        style={{
          backgroundColor: theme === 'dark' ? '#090B2F' : 'transparent',
          // @ts-ignore
          flexDirection: directionPropToFlexDirection[direction],
        }}
      >
        <div
          className="home-article_text-container"
          style={{
            alignItems: directionPropToTextAlign[direction],
          }}
        >
          <Text
            size="h1"
            color={theme === 'dark' ? COLORS.WHITE : 'black'}
            // @ts-ignore
            textAlign={directionPropToTextAlign[direction]}
            fontFamily="Suranna"
          >
            {title}
          </Text>

          <Text
            size="h4"
            color={theme === 'dark' ? COLORS.WHITE : 'black'}
            // @ts-ignore
            textAlign={directionPropToTextAlign[direction]}
          >
            {text}
          </Text>
        </div>

        <div className="home-article_img-container">
          {imgPath && <img src={imgPath} alt="" className="home-article_img" />}
        </div>
      </div>
    </Element>
  );
};

export default HomeArticle;

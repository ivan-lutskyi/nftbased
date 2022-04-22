import { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';
import './style.scss';
import './style.mobile.scss';

interface IProps {
  title: string;
  text: string;
  styles?: {
    container: CSSProperties;
  } | null;
  index: number;
}

const GetStartedArticle = ({ title, text, styles, index }: IProps) => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <div className="get-started-article-container-mobile">
      <div className="get-started-article-text-block-mobile">
        <div style={{ marginBottom: 40 }}>
          <span className="get-started-article-title-mobile">{title}</span>
        </div>

        <p className="get-started-article-text-mobile">{text}</p>
      </div>
    </div>
  ) : (
    <div className="get-started-article-container">
      <div className="get-started-article-text-block">
        <div style={{ marginBottom: 40 }}>
          <span className="get-started-article-title">{title}</span>
        </div>

        <p className="get-started-article-text">{text}</p>
      </div>
    </div>
  );
};

export default GetStartedArticle;

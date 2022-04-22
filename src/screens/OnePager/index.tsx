import Text from '../../components/Text';
import { COLORS } from '../../constants/colors';
import { ReactComponent as DownloadIcon } from './img/download-icon.svg';
import './style.scss';

const OnePager = () => (
  <div className="one_pager-container">
    <div className="one_pager-text_block">
      <Text className="one_pager-title" size="h1" fontFamily="Suranna">
        One pager
      </Text>

      <Text className="one_pager-subtitle" size="h3" color={COLORS.DARK_PURPLE}>
        Lorem ipsum
      </Text>

      <Text size="h4">
        Sit consectetur eu eu voluptate amet labore. Tempor ad eu velit sint tempor aliqua
        adipisicing elit. Duis occaecat do do sint ullamco sunt laborum et sit deserunt aliquip
        irure consequat. Cillum magna id cillum occaecat duis culpa anim deserunt fugiat. Do
        consequat aute id cillum labore nulla eu amet esse minim pariatur.
      </Text>

      <a
        href="/1pagerEN.pdf"
        target="_blank"
        download="NFB_one-pager_EN.pdf"
        className="one_pager-download-link"
      >
        <DownloadIcon style={{ marginRight: 15 }} />
        <Text color={COLORS.WHITE} size="h4">
          Download One-pager
        </Text>
      </a>
    </div>
  </div>
);

export default OnePager;

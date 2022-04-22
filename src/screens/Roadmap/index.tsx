import { useSelector } from 'react-redux';
import RoadmapLayout from './RoadmapLayout';
import { IRootState } from '../../store';
import RoadmapMobileLayout from './RoadmapLayout.mobile';

const roadmapData = [
  {
    label: 'jun',
    year: '2021',
    title: 'PRIVATE SALE',
    value: 'For a limited number of clients. The sale is only on a personal invitation base.',
    isDone: true,
    isLast: false,
  },
  {
    label: 'oct',
    year: '2021',
    title: 'PRE SALE',
    value: 'For community clients. Active users of NFTbased forums and chats.',
    isDone: false,
    isLast: false,
  },
  {
    label: 'jan',
    year: '2022',
    title: 'CROWD SALE',
    value: 'Public sale. For private and retails client.',
    isDone: false,
    isLast: false,
  },
  {
    label: 'apr',
    year: '2022',
    title: 'Financial market listing “TIER 3”',
    value:
      'Listing on exchanges “Bithumb Global”, “Bittrex”, “Bitforex”, “HitBTC”, “Bibox” and “HotBit”.',
    isDone: false,
    isLast: false,
  },
  {
    label: 'jun',
    year: '2022',
    title: 'Financial market listing “TIER 2” ',
    value:
      'Listing on exchanges “EXMO”, “MXC”, “AscendEX (BitMax)”, “Liquid”, “Gate.io” and “KuCoin”',
    isDone: false,
    isLast: false,
  },
  {
    label: 'aug',
    year: '2022',
    title: 'Financial market listing "TIER 1"',
    value: 'Listing on exchanges “FTX”, “OKEx” and “Binance”.',
    isDone: false,
    isLast: true,
  },
];

const Roadmap = () => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <RoadmapMobileLayout roadmapData={roadmapData} />
  ) : (
    <RoadmapLayout roadmapData={roadmapData} />
  );
};

export default Roadmap;

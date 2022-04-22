import { generateId } from '../../utils';
import { useTranslation } from '../../hooks/translation';
import { ReactComponent as DoneIcon } from './img/done-icon.svg';
import { ReactComponent as RocketIcon } from './img/rocket-icon.svg';
import './style.mobile.scss';
import Text from '../../components/Text';
import { COLORS } from '../../constants/colors';

interface IProps {
  roadmapData: {
    label: string;
    year: string;
    title: string;
    value: string;
    isDone: boolean;
    isLast: boolean;
  }[];
}

const RoadmapMobileLayout = ({ roadmapData }: IProps) => {
  const t = useTranslation();

  return (
    <div className="roadmap-container-mobile">
      <Text className="roadmap-title-mobile" size="h1" fontFamily="Suranna">
        Our plans for the future
      </Text>

      <div className="roadmap-block-mobile">
        {roadmapData.map(({ label, year, value, isDone, title, isLast }) => (
          // @ts-ignore
          <div key={generateId()} className="roadmap-item-mobile scroll-animation">
            <div className="roadmap-section-title-container-mobile">
              <Text className="roadmap-title-text-mobile" size="h2" fontFamily="Suranna">
                {label}
                <span style={{ marginLeft: 10 }}>{year}</span>
              </Text>
            </div>

            {isDone ? (
              <div className="roadmap-item-circles-container">
                <div className="roadmap-item-circle" style={{ backgroundColor: COLORS.LIGHT_PURPLE }}>
                  <DoneIcon />
                </div>
                <div className="roadmap-item-stick" />
                {isLast ? (
                  <div className="roadmap-item-circle last" style={{ backgroundColor: COLORS.LIGHT_PURPLE }}>
                    <RocketIcon />
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              <div>
                <div className="roadmap-item-circle" style={{ backgroundColor: COLORS.WHITE }} />
                <div className="roadmap-item-stick dashed" />
                {isLast ? (
                  <div className="roadmap-item-circle last" style={{ backgroundColor: COLORS.LIGHT_PURPLE }}>
                    <RocketIcon />
                  </div>
                ) : (
                  ''
                )}
              </div>
            )}

            <div className="roadmap-item-description-container-mobile">
              <Text className="roadmap-item-title-mobile" size="h4" color={COLORS.DARK_PURPLE} bold>
                {title}
              </Text>
              <br />
              <Text className="roadmap-item-description-mobile" size="h4">
                {t(value)}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapMobileLayout;

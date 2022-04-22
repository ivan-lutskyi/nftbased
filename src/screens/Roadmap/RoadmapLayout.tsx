import { generateId } from '../../utils';
import { useTranslation } from '../../hooks/translation';
import { ReactComponent as DoneIcon } from './img/done-icon.svg';
import { ReactComponent as RocketIcon } from './img/rocket-icon.svg';
import './style.scss';
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

const RoadmapLayout = ({ roadmapData }: IProps) => {
  const t = useTranslation();

  return (
    <div className="roadmap-container">
      <Text className="roadmap-title" size="h1" fontFamily="Suranna">
        Our plans for the future
      </Text>

      <div className="roadmap-block">
        {roadmapData.map(({ label, year, value, isDone, title, isLast }) => (
          // @ts-ignore
          <div key={generateId()} className="roadmap-item scroll-animation">
            <div className="roadmap-section-title-container">
              <Text className="roadmap-title-text" size="h3" bold color={COLORS.DARK_PURPLE}>
                {label} {year}
              </Text>
            </div>

            {isDone ? (
              <div className="roadmap-item-circles-container">
                <div
                  className="roadmap-item-circle"
                  style={{ backgroundColor: COLORS.LIGHT_PURPLE }}
                >
                  <DoneIcon />
                </div>
                <div className="roadmap-item-stick" />
                {isLast ? (
                  <div
                    className="roadmap-item-circle last"
                    style={{ backgroundColor: COLORS.LIGHT_PURPLE }}
                  >
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
                  <div
                    className="roadmap-item-circle last"
                    style={{ backgroundColor: COLORS.LIGHT_PURPLE }}
                  >
                    <RocketIcon />
                  </div>
                ) : (
                  ''
                )}
              </div>
            )}

            <div className="road-map-item-description-container">
              <Text className="road-map-item-title" size="h4" color={COLORS.DARK_PURPLE} bold>
                {title}
              </Text>
              <br />
              <Text className="road-map-item-description" size="h4">
                {t(value)}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapLayout;

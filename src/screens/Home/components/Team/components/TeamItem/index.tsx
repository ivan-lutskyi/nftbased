import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../../../store';
import './style.scss';
import './style.mobile.scss';
import { ITeamState } from '../..';
import Text from '../../../../../../components/Text';
import { COLORS } from '../../../../../../constants/colors';

interface IProps {
  options: { name: string; description: string; text: string };
  imagePath: string;
  changeBuyModalOpenedStatus: (value: boolean) => void;
  setSelectedTeam: Dispatch<SetStateAction<ITeamState>>;
}

const TeamLayout = ({
  options,
  imagePath,
  changeBuyModalOpenedStatus,
  setSelectedTeam,
}: IProps) => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <div className="team-item-container-mobile">
      <img src={imagePath} alt="22" className="team-item-img" />

      <ul className="team-item-options-list-mobile">
        <li>
          <Text size="h3" color="white" className="team-item-option-item-mobile">
            {options.name}
          </Text>
        </li>
        <li>
          <Text size="h4" color={COLORS.LIGHT_PURPLE} className="team-item-option-item-mobile">
            {options.description}
          </Text>
        </li>
        <li>
          <Text size="h5" color="#F1F1F3" className="team-item-option-item-mobile">
            {options.text}
          </Text>
        </li>
      </ul>
    </div>
  ) : (
    <div className="team-item-container">
      <img src={imagePath} alt="22" className="team-item-img" />

      <ul className="team-item-options-list">
        <li>
          <Text size="h3" color="white" className="team-item-option-item">
            {options.name}
          </Text>
        </li>
        <li>
          <Text size="h4" color={COLORS.LIGHT_PURPLE} className="team-item-option-item">
            {options.description}
          </Text>
        </li>
        <li>
          <Text size="h5" color="#F1F1F3" className="team-item-option-item">
            {options.text}
          </Text>
        </li>
      </ul>
    </div>
  );
};

export default TeamLayout;

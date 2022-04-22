import { Dispatch, SetStateAction } from 'react';
import TeamItem from './components/TeamItem';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './style.scss';
import { ITeamState } from '.';
import { generateId } from '../../../../utils';
import Text from '../../../../components/Text';
import { ITeam } from '../../../../interfaces/team';

interface IProps {
  teamsData: ITeam[];
  isBuyModalOpened: boolean;
  changeBuyModalOpenedStatus: (value: boolean) => void;
  selectedTeam: ITeamState;
  setSelectedTeam: Dispatch<SetStateAction<ITeamState>>;
}

const TeamsLayout = ({
  teamsData,
  isBuyModalOpened,
  changeBuyModalOpenedStatus,
  selectedTeam,
  setSelectedTeam,
}: IProps) => (
  <div className="teams-container py-5">
    {/* {isBuyModalOpened && selectedTeam && (
    <BuyModal
      changeBuyModalOpenedStatus={changeBuyModalOpenedStatus}
      selectedTeam={selectedTeam}
    />
    )} */}

    <div className="teams-title-container mt-5">
      <Text className="teams-title" size="h1" color="white" fontFamily="Suranna">
        Meet our Team!
      </Text>

      <Text className="teams-title-description" size="h4" color="white">
        NFTbased employs the best specialists in the field. The company is managed by energetic and
        productive people with extensive experiences. So, here they are:
      </Text>
    </div>

    <div className="teams-list">
      {teamsData.map(({ options, imagePath }, i) => (
        <TeamItem
          key={generateId()}
          options={options}
          imagePath={imagePath}
          changeBuyModalOpenedStatus={changeBuyModalOpenedStatus}
          setSelectedTeam={setSelectedTeam}
        />
      ))}
    </div>
  </div>
);

export default TeamsLayout;

import { Dispatch, SetStateAction } from 'react';
import TeamItem from './components/TeamItem';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './style.mobile.scss';
import { ITeamState } from '.';
import { ITeam } from '../../../../interfaces/team';

interface IProps {
  teamsData: ITeam[];
  changeBuyModalOpenedStatus: (value: boolean) => void;
  setSelectedTeam: Dispatch<SetStateAction<ITeamState>>;
}

const TeamsMobileLayout = ({ teamsData, changeBuyModalOpenedStatus, setSelectedTeam }: IProps) => (
  <div className="teams-container-mobile">
    <div className="teams-title-container-mobile">
      <span className="teams-title-mobile">Meet our Team!</span>

      <p className="teams-title-description-mobile">
        NFTbased employs the best specialists in the field. The company is managed by energetic and
        productive people with extensive experiences. So, here they are:
      </p>
    </div>

    <div className="teams-list-mobile">
      {teamsData.map(({ options, imagePath }, i) => (
        <TeamItem
          options={options}
          imagePath={imagePath}
          changeBuyModalOpenedStatus={changeBuyModalOpenedStatus}
          setSelectedTeam={setSelectedTeam}
        />
      ))}
    </div>
  </div>
);

export default TeamsMobileLayout;

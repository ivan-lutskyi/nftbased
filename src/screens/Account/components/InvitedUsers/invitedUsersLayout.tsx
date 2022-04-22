import './style.css';
import { generateId } from '../../../../utils';
import ComingSoon from '../../../../components/ComingSoon';

interface IProps {
  invitedUsers: {
    // eslint-disable-next-line no-undef
    avatar: JSX.Element;
    name: string;
    nickname: string;
    broughtYou: string;
  }[];
}

const InvitedUsersLayout = ({ invitedUsers }: IProps) => (
  <div className="invited-users-container">
    <ComingSoon />

    <div className="invited-users-title-container">
      <span className="invited-users-title-text">Users you invited: 23</span>
    </div>

    <div className="invited-users-list">
      <div className="invited-users-titles">
        <span className="invited-users-item-value invited-users-item-value-photo" />
        <span className="invited-users-item-value">Name</span>
        <span className="invited-users-item-value">Nickname</span>
        <span className="invited-users-item-value">Brought you</span>
      </div>
      {[...invitedUsers, ...invitedUsers, ...invitedUsers].map(
        ({ avatar, name, nickname, broughtYou }) => (
          <div className="invited-users-item" key={generateId()}>
            <span className="invited-users-item-value invited-users-item-value-photo">
              {avatar}
            </span>
            <span className="invited-users-item-value">{name}</span>
            <span className="invited-users-item-value">{nickname}</span>
            <span className="invited-users-item-value">{broughtYou}</span>
          </div>
        ),
      )}
    </div>
  </div>
);

export default InvitedUsersLayout;

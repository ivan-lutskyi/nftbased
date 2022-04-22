import Clipboard from 'react-clipboard.js';
import { useState } from 'react';
import { generateId } from '../../../../utils';
import { ReactComponent as CopyToClipboardIcon } from '../../img/copy-to-clipboard.svg';
import { ReactComponent as DoneIcon } from '../../img/done-icon.svg';
import './style.mobile.css';
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

const yourReferralId = 'hellomotherfucker';
const referralURL = `http://localhost:3000/register/${yourReferralId}`;

const InvitedUsersMobileLayout = ({ invitedUsers }: IProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const onReferralURLClick = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="invited-users-container-mobile">
      <ComingSoon />

      <div className="invited-users-referral-container-mobile">
        <div className="invited-users-referral-header">
          <span className="invited-users-referral-title-mobile">Your referral URL:</span>
          <Clipboard
            data-clipboard-text={referralURL}
            className="invited-users-referral-copy-btn"
            onClick={onReferralURLClick}
          >
            {isCopied ? (
              <DoneIcon width="15" height="15" />
            ) : (
              <CopyToClipboardIcon width="15" height="15" />
            )}
          </Clipboard>
        </div>

        <Clipboard
          data-clipboard-text={referralURL}
          className="invited-users-referral-text-container"
          onClick={onReferralURLClick}
        >
          <span className="invited-users-referral-text">{referralURL}</span>
        </Clipboard>
      </div>

      <div className="invited-users-title-container-mobile">
        <span className="invited-users-title-text-mobile">Users you invited: 23</span>
      </div>

      <div className="invited-users-titles-mobile">
        <span className="invited-users-item-value-mobile">Name</span>
        <span className="invited-users-item-value-mobile">Nickname</span>
        <span className="invited-users-item-value-mobile">Brought you</span>
      </div>
      <div className="invited-users-list-mobile">
        {[...invitedUsers, ...invitedUsers, ...invitedUsers].map(
          ({ name, nickname, broughtYou }) => (
            <div className="invited-users-item-mobile" key={generateId()}>
              <span className="invited-users-item-value-mobile invited-users-item-value-name">
                {name}
              </span>
              <span className="invited-users-item-value-mobile invited-users-item-value">
                {nickname}
              </span>
              <span className="invited-users-item-value-mobile invited-users-item-value-brought">
                {broughtYou}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default InvitedUsersMobileLayout;

import { useState } from 'react';
import { ReactComponent as CopyToClipboardIcon } from '../../img/copy-to-clipboard.svg';
import { ReactComponent as DoneIcon } from '../../img/done-icon.svg';
import './style.css';

const yourReferralId = 'j1l3h1lj3nedj';
const referralURL = `https://nftbased.net/register/${yourReferralId}`;

const ReferralURL = () => {
  const [isCopied, setIsCopied] = useState(false);

  const onReferralURLClick = () => {
    navigator.clipboard.writeText(referralURL);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="referral-URL-container">
      <div className="referral-URL-coming_soon">
        <span className="referral-URL-coming_soon-text">Coming soon...</span>
      </div>

      <span className="referral-URL-title">Your referral URL:</span>
      <button className="referral-URL-text-container" type="button" onClick={onReferralURLClick}>
        <span className="referral-URL-text">{referralURL}</span>
        <div className="referral-URL-copy-btn">
          {isCopied ? (
            <DoneIcon width="15" height="15" />
          ) : (
            <CopyToClipboardIcon width="15" height="15" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ReferralURL;

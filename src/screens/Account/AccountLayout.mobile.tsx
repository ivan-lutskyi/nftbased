import InvitedUsers from './components/InvitedUsers';
import Tokens from './components/Tokens';
import WalletAddress from './components/WalletAddress';

import './style.mobile.css';

const AccountLayout = () => (
  <div className="account-container-mobile">
    <Tokens />

    <WalletAddress />

    <InvitedUsers />
  </div>
);

export default AccountLayout;

import Particles from 'react-particles-js';
import { particlesParams } from '../../constants/particlesParams';
import InvitedUsers from './components/InvitedUsers';
import QrWallet from './components/QrWallet';
import ReferralURL from './components/ReferralURL';
import Tokens from './components/Tokens';
import WalletAddress from './components/WalletAddress';

import './style.css';

const AccountLayout = () => (
  <div>
    <Particles params={particlesParams} canvasClassName="account-particles" />

    <div className="full_screen-container account-container">
      <Tokens />

      <InvitedUsers />
    </div>

    <div className="account-footer">
      <div className="account-footer-wallet-container">
        <QrWallet />

        <WalletAddress />
      </div>

      <ReferralURL />
    </div>
  </div>
);

export default AccountLayout;

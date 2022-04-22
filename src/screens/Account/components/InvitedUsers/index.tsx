import { useSelector } from 'react-redux';
import { ReactComponent as Avatar } from '../../img/user-avatar.svg';
import { IRootState } from '../../../../store';
import InvitedUsersLayout from './invitedUsersLayout';
import InvitedUsersMobileLayout from './InvitedUsersLayout.mobile';

import './style.css';

const invitedUsers = [
  {
    avatar: <Avatar />,
    name: 'Courtney Henry',
    nickname: 'TheSnake',
    broughtYou: '100.384 NTFB',
  },
  {
    avatar: <Avatar />,
    name: 'Brooklyn Simmons',
    nickname: 'Megatron',
    broughtYou: '100.384 NTFB',
  },
  {
    avatar: <Avatar />,
    name: 'Bessie Cooper',
    nickname: 'TheChief',
    broughtYou: '100.384 NTFB',
  },
  {
    avatar: <Avatar />,
    name: 'Jenny Wilson',
    nickname: 'MattyIce',
    broughtYou: '100.384 NTFB',
  },
  {
    avatar: <Avatar />,
    name: 'Courtney Henry',
    nickname: 'TheGrimReaper',
    broughtYou: '100.384 NTFB',
  },
  {
    avatar: <Avatar />,
    name: 'Courtney Henry',
    nickname: 'TheSnake',
    broughtYou: '100.384 NTFB',
  },
  {
    avatar: <Avatar />,
    name: 'Courtney Henry',
    nickname: 'TheSnake',
    broughtYou: '100.384 NTFB',
  },
];

const InvitedUsers = () => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <InvitedUsersMobileLayout invitedUsers={invitedUsers} />
  ) : (
    <InvitedUsersLayout invitedUsers={invitedUsers} />
  );
};

export default InvitedUsers;

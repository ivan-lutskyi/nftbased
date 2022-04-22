import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IRootState } from '../../../../store';
import TeamLayout from './TeamLayout';
import TeamsMobileLayout from './TeamLayout.mobile';

import firstHuman from './img/1.jpg';
import secondHuman from './img/2.jpg';
import thirdHuman from './img/3.jpg';
import fourthHuman from './img/4.jpg';
import fifthHuman from './img/5.jpg';
import sixthHuman from './img/6.jpg';
import { ITeam } from '../../../../interfaces/team';

const team = [
  {
    options: {
      name: 'Floyd Miles',
      description: 'Owner and Founder',
      text: `Owner and founder of NFTbased.
        Having more than 10 years of experience working in the Fintech field,
        Floyd quickly became the driving force of the crypto currency development,
        including Ethereum, Smart contracts, NFT and DeFi.`,
    },
    imagePath: thirdHuman,
  },
  {
    options: {
      name: 'Kristin Watson',
      description: 'Chief Executive Officer',
      text: `Kristin is an exemplary leader, experienced in managing the business.
        She has successfully launched a startup as CEO.
        She has a Master’s degree in Business Administration from the University of Boston.
        She has been working in the blockchain industry for 8 years.`,
    },
    imagePath: fourthHuman,
  },
  {
    options: {
      name: 'Brooklyn Simmons',
      description: 'Chief Technology Officer',
      text: `A talented engineer, Brooklyn is responsible for all technical NFTbased documentation.
        He’s been developing tokens for the last 6 years.
        He has a double Master’s degree in Software Engineering.`,
    },
    imagePath: sixthHuman,
  },
  {
    options: {
      name: 'Albert Flores',
      description: 'Chief Financial Officer',
      text: `Albert has a degree in Finance, and he is a real giant in his field.
        His wide range of experience in the financial sector lead him
        to the blockchain and crypto currency field – as a trader,
        a financial analytics and an advisor.`,
    },
    imagePath: fifthHuman,
  },
  {
    options: {
      name: 'Marvin McKinney',
      description: 'Owner and Founder',
      text: `Marvin is our lead business strategist, offering innovative solutions.
        He combines a 12 year experience in sales and digital technology
        marketing to take our company to new heights.`,
    },
    imagePath: firstHuman,
  },
  {
    options: {
      name: 'Jenny Wilson',
      description: 'Creative Director',
      text: `Our creative force and an optimist.
        Everything beautiful that you see on our website and on social media – 
        is the result of Jenny’s amazing work.
        She is also certified in Fine Arts.`,
    },
    imagePath: secondHuman,
  },
];

export type ITeamState = null | ITeam;

const Teams = () => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  const [isBuyModalOpened, setIsBuyModalOpened] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<ITeamState>(null);

  const changeBuyModalOpenedStatus = (isOpened: boolean) => {
    window.scrollTo(0, 0);
    document.body.style.overflow = isOpened ? 'hidden' : 'overlay';
    setIsBuyModalOpened(isOpened);
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        changeBuyModalOpenedStatus(false);
      }
    });

    return () => {
      // onCancelClick();
      changeBuyModalOpenedStatus(false);
      window.removeEventListener('keydown', () => {}, true);
    };
  }, []);

  return isDeviceMobile ? (
    <TeamsMobileLayout
      teamsData={team}
      changeBuyModalOpenedStatus={changeBuyModalOpenedStatus}
      setSelectedTeam={setSelectedTeam}
    />
  ) : (
    <TeamLayout
      teamsData={team}
      isBuyModalOpened={isBuyModalOpened}
      changeBuyModalOpenedStatus={changeBuyModalOpenedStatus}
      selectedTeam={selectedTeam}
      setSelectedTeam={setSelectedTeam}
    />
  );
};

export default Teams;

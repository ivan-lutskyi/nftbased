import { ReactComponent as LampIcon } from '../assets/img/menuIcons/lamp.svg';
import { ReactComponent as LeaderIcon } from '../assets/img/menuIcons/leader.svg';
import { ReactComponent as SolarEnergyIcon } from '../assets/img/menuIcons/solar-energy.svg';
import { ReactComponent as CompassIcon } from '../assets/img/menuIcons/compass.svg';
import { ReactComponent as HistoryIcon } from '../assets/img/menuIcons/history.svg';
import { ReactComponent as HotSaleIcon } from '../assets/img/menuIcons/hot-sale.svg';
import { ReactComponent as DealIcon } from '../assets/img/menuIcons/deal.svg';
import { ReactComponent as ExchangeIcon } from '../assets/img/menuIcons/exchange.svg';
import { ReactComponent as MailIcon } from '../assets/img/menuIcons/mail.svg';
import { ReactComponent as SecurityIcon } from '../assets/img/menuIcons/security.svg';
import { ReactComponent as HelpIcon } from '../assets/img/menuIcons/help.svg';
import { ReactComponent as RoadmapIcon } from '../assets/img/menuIcons/roadmap.svg';
import { ReactComponent as LightpaperIcon } from '../assets/img/menuIcons/lightpaper.svg';
import { ReactComponent as WhitepaperIcon } from '../assets/img/menuIcons/whitepaper.svg';
import { ReactComponent as TechDocsIcon } from '../assets/img/menuIcons/techdocs.svg';
import { ReactComponent as UserGuidesIcon } from '../assets/img/menuIcons/guides.svg';
import { ReactComponent as LegalDocsIcon } from '../assets/img/menuIcons/legaldoc.svg';
import { ReactComponent as DevelopersIcon } from '../assets/img/menuIcons/developers.svg';
import { ReactComponent as WalletIcon } from '../assets/img/menuIcons/wallet.svg';
import { ReactComponent as AppleIcon } from '../assets/img/menuIcons/apple.svg';
import { ReactComponent as AndroidIcon } from '../assets/img/menuIcons/android.svg';
import { ReactComponent as PhoneIcon } from '../assets/img/menuIcons/smartphone-icon.svg';
import { ReactComponent as PrivateSaleIcon } from '../assets/img/menuIcons/private-sale.svg';
import { ReactComponent as PreSaleIcon } from '../assets/img/menuIcons/pre-sale.svg';
import { ReactComponent as CrowdSaleIcon } from '../assets/img/menuIcons/crowd-sale.svg';
import { AppRoute } from './routes';

const AppleAndroidLogos = () => (
  <div style={{ transform: 'translateX(-8px)', display: 'flex' }}>
    <AppleIcon />
    <AndroidIcon />
  </div>
);

export default {
  GET_STARTED: [
    {
      icon: <LampIcon />,
      title: 'What is NFB',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/getStarted/whatIsNFB',
      isAvailable: false,
    },
    {
      icon: <LeaderIcon />,
      title: 'Founders',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/getStarted/founders',
      isAvailable: false,
    },
    {
      icon: <SolarEnergyIcon />,
      title: 'The power of NFB',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/getStarted/powerOfNFB',
      isAvailable: false,
    },
    {
      icon: <CompassIcon />,
      title: 'Explorer',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/getStarted/explorer',
      isAvailable: false,
    },
    {
      icon: <HistoryIcon />,
      title: 'History of NFB',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/getStarted/history',
      isAvailable: false,
    },
  ],
  BUY: [
    {
      icon: <PrivateSaleIcon width={20} height={20} />,
      title: 'Private-sale',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/plans',
      isAvailable: true,
    },
    {
      icon: <PreSaleIcon width={20} height={20} />,
      title: 'Pre-sale',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/plans',
      isAvailable: false,
    },
    {
      icon: <CrowdSaleIcon width={20} height={20} />,
      title: 'Crowd sale',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/plans',
      isAvailable: false,
    },
    {
      icon: <DealIcon />,
      title: 'OTC',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/OTC',
      isAvailable: false,
    },
    {
      icon: <ExchangeIcon />,
      title: 'Exchanges',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/exchanges',
      isAvailable: false,
    },
  ],
  SUPPORT: [
    {
      icon: <MailIcon />,
      title: 'Contact us',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/contactUs',
      isAvailable: false,
    },
    {
      icon: <SecurityIcon />,
      title: 'Security',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/security',
      isAvailable: false,
    },
    {
      icon: <HelpIcon />,
      title: 'FAQ',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/FAQ',
      isAvailable: false,
    },
  ],
  RESOURCES: [
    {
      icon: <RoadmapIcon />,
      title: 'Roadmap',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/roadmap',
      isAvailable: false,
    },
    {
      icon: <LightpaperIcon />,
      title: 'One-pager',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/onePager',
      isAvailable: false,
    },
    {
      icon: <WhitepaperIcon />,
      title: 'White paper',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/whitePaper',
      isAvailable: false,
    },
    {
      icon: <TechDocsIcon />,
      title: 'Technical Docs',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/techDocs',
      isAvailable: false,
    },
    {
      icon: <UserGuidesIcon />,
      title: 'User Guides',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/userGuides',
      isAvailable: false,
    },
    {
      icon: <LegalDocsIcon />,
      title: 'Legal Doc',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/legalDoc',
      isAvailable: false,
    },
    {
      icon: <DevelopersIcon />,
      title: 'Developers',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/developers',
      isAvailable: false,
    },
  ],
  DOWNLOADS: [
    {
      icon: <WalletIcon />,
      title: 'Wallets',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/wallets',
      isAvailable: false,
    },
    {
      icon: <PhoneIcon width="20" style={{ fill: '#8245E5' }} />,
      title: 'Mobile app',
      description: 'Euismod scelerisque eleifend mi aliquet quam viverra rutrum',
      route: '/mobileApp',
      isAvailable: false,
    },
  ],
};

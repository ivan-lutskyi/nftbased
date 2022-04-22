import menuSections from './menuSections';

export const ResourcesRoute = {
  ROADMAP: { route: '/roadmap', label: 'ROADMAP' },
  ONE_PAGER: { route: '/onePager', label: 'ONE_PAGER' },
};

export const AppRoute = {
  GET_STARTED: { route: '/getStarted/:article', label: 'GET_STARTED' },
  BUY: { route: '/pricing', label: 'BUY' },
  HOME: { route: '/home', label: 'HOME' },
  SUPPORT: { route: '/support', label: 'Support' },
  RESOURCES: { route: '/resources', label: 'RESOURCES' },
  ROADMAP: { route: '/roadmap', label: 'ROADMAP' },
  DOWNLOADS: { route: '/downloads', label: 'DOWNLOADS' },
  ACCOUNT: { route: '/account', label: 'PROFILE' },
  LOGIN: { route: '/login', label: 'LOGIN' },
  REGISTER: { route: '/register ', label: 'SIGN_UP' },
  SETTINGS: { route: '/settings', label: 'SETTINGS' },
  PRIVACY_POLICY: { route: '/privacy', label: 'PRIVACY_POLICY' },
  PLANS: { route: '/pricing', label: 'PLANS' },
  TOKENOMICS: { route: '', label: 'Tokenomics' },
  ADMIN: { route: '/admin', label: 'ADMIN' },
  PRICING: { route: '/pricing', label: 'Pricing' },
};

export const MenuRoute = (({ SUPPORT, PRICING, TOKENOMICS, DOWNLOADS }) => ({
  // GET_STARTED: {
  //   label: GET_STARTED.label,
  //   menuRoute: GET_STARTED.route,
  //   // @ts-ignore
  //   routes: <Array>menuSections.GET_STARTED.reduce((acc, el) => [...acc, el.route], []),
  //   isHovered: true,
  //   isRouteAvailable: false,
  // },
  // ONE_PAGER: {
  //   label: ONE_PAGER.label,
  //   menuRoute: ONE_PAGER.route,
  //   // @ts-ignore
  //   routes: <Array>menuSections.BUY.reduce((acc, el) => [...acc, el.route], []),
  //   isHovered: true,
  //   isRouteAvailable: true,
  // },
  PRICING: {
    label: PRICING.label,
    menuRoute: PRICING.route,
    // @ts-ignore
    routes: <Array>menuSections.BUY.reduce((acc, el) => [...acc, el.route], []),
    isHovered: true,
    isRouteAvailable: true,
  },
  SUPPORT: {
    label: SUPPORT.label,
    menuRoute: SUPPORT.route,
    // @ts-ignore
    routes: <Array>menuSections.SUPPORT.reduce((acc, el) => [...acc, el.route], []),
    isHovered: true,
    isRouteAvailable: true,
  },
}))(AppRoute);

export const MenuRouteMobile = (({ BUY, PRICING, TOKENOMICS, SUPPORT }) => ({
  // TOKENOMICS: {
  //   label: TOKENOMICS.label,
  //   menuRoute: TOKENOMICS.route,
  //   // @ts-ignore
  //   routes: <Array>menuSections.BUY.reduce((acc, el) => [...acc, el.route], []),
  //   isHovered: true,
  //   isRouteAvailable: true,
  // },
  PRICING: {
    label: PRICING.label,
    menuRoute: PRICING.route,
    // @ts-ignore
    routes: <Array>menuSections.BUY.reduce((acc, el) => [...acc, el.route], []),
    isHovered: true,
    isRouteAvailable: true,
  },
  SUPPORT: {
    label: SUPPORT.label,
    menuRoute: SUPPORT.route,
    // @ts-ignore
    routes: <Array>menuSections.SUPPORT.reduce((acc, el) => [...acc, el.route], []),
    isHovered: true,
    isRouteAvailable: true,
  },
}))(AppRoute);

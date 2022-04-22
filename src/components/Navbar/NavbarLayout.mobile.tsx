/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppRoute } from '../../constants/routes';
import { ReactComponent as Logo } from '../../assets/img/appLogo/logo.svg';
import { ReactComponent as LogoLight } from '../../assets/img/appLogo/logo-light.svg';
import { ReactComponent as HomeIcon } from './img/home-icon.svg';
import { ReactComponent as NotificationsIcon } from './img/notifications-icon.svg';
import { ReactComponent as ExitIcon } from './img/exit-icon.svg';
import Burger from '../Burger';
import Menu from '../Menu';
import './style.mobile.css';
import { INavbarLayoutProps } from '.';
import Toast from '../Toast';
import { COLORS } from '../../constants/colors';

const NavbarMobileLayout = ({
  shouldBeLight,
  currentLanguage,
  onChange,
  options,
  currentRoute,
  isExitToastOpened,
  setIsExitToastOpened,
  onLogoutBtnClick,
  darkTheme,
}: INavbarLayoutProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const history = useHistory();
  const redirectToHomePage = () => history.push(AppRoute.HOME.route);

  const switchIsMenuOpened = () => {
    if (isMenuOpened) {
      document.body.style.overflow = 'visible';
    } else {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    }
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header
      className={
        darkTheme && currentRoute !== '/home' ? 'navbar-container-mobile dark' : 'navbar-container-mobile'
      }
      style={shouldBeLight ? { color: COLORS.WHITE } : { color: 'black' }}
    >
      <Burger
        color={darkTheme ? 'white' : 'black'}
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={switchIsMenuOpened}
      />
      <Menu isMenuOpened={isMenuOpened} switchIsMenuOpened={switchIsMenuOpened} currentRoute={currentRoute}/>

      {/* <Dropdown
        shouldBeLight={shouldBeLight}
        onChange={onChange}
        options={options}
        initialValue={currentLanguage.label}
      /> */}

      {currentRoute === AppRoute.ACCOUNT.route || currentRoute === AppRoute.SETTINGS.route ? (
        <div className="navbar-account-controls-mobile">
          <button
            type="button"
            onClick={() => redirectToHomePage()}
            className="navbar-account-controls-btn-mobile"
          >
            <HomeIcon />
          </button>
          <button
            type="button"
            style={{ opacity: 0.7 }}
            disabled
            className="navbar-account-controls-btn-mobile"
          >
            <NotificationsIcon />
          </button>
          {/* <Link className="navbar-account-controls-btn-mobile" to={AppRoute.SETTINGS.route}>
            <SettingsIcon />
          </Link> */}
          <button
            type="button"
            onClick={() => setIsExitToastOpened(true)}
            className="navbar-account-controls-btn-mobile"
          >
            <ExitIcon />
          </button>

          {isExitToastOpened && (
            <Toast
              title="Exit"
              message="Are you sure you want to exit?"
              onCancelClick={() => setIsExitToastOpened(false)}
              onConfirmClick={onLogoutBtnClick}
              confirmText="Yes, exit"
            />
          )}
        </div>
      ) : (
        <Link to={AppRoute.HOME.route} className="logo-container-mobile">
          {currentRoute === AppRoute.LOGIN.route ||
          currentRoute === AppRoute.REGISTER.route ||
          currentRoute === AppRoute.SUPPORT.route ? (
            <LogoLight className="logo" />
          ) : (
            <Logo className="logo" />
          )}
        </Link>
      )}
    </header>
  );
};

export default NavbarMobileLayout;

/* eslint-disable no-nested-ternary */
import { useEffect, FC } from 'react';
import { Link, useHistory, useRouteMatch, withRouter } from 'react-router-dom';
import { AppRoute, MenuRoute } from '../../constants/routes';
import { generateId } from '../../utils';
import { ReactComponent as Logo } from '../../assets/img/appLogo/logo.svg';
import { ReactComponent as LogoLight } from '../../assets/img/appLogo/logo-light.svg';
import { useTranslation } from '../../hooks/translation';
import Toast from '../Toast';
import Button from '../Button';
import { ReactComponent as HomeIcon } from './img/home-icon.svg';
import { ReactComponent as NotificationsIcon } from './img/notifications-icon.svg';
import { ReactComponent as ExitIcon } from './img/exit-icon.svg';
import { ReactComponent as InvertedLogo } from './img/logo-inverted.svg';
import menuSections from '../../constants/menuSections';
import { COLORS } from '../../constants/colors';
import './style.scss';
import { INavbarLayoutProps } from '.';

const NavbarLayout: FC<
  INavbarLayoutProps & { location: { state: { scrollToTokenomics: boolean } } }
> = ({
  isAuthenticated,
  shouldBeLight,
  onChange,
  currentRoute,
  onLogoutBtnClick,
  isExitToastOpened,
  darkTheme,
  setIsExitToastOpened,
  location,
}: INavbarLayoutProps) => {
  const t = useTranslation();

  const shouldRightPartBeLight =
    currentRoute === AppRoute.HOME.route ||
    currentRoute === AppRoute.LOGIN.route ||
    currentRoute === AppRoute.REGISTER.route ||
    currentRoute === AppRoute.REGISTER.route;

  const history = useHistory();

  const rightPartOfMenu = Object.values(MenuRoute)
    .slice()
    // @ts-ignore
    .reduce((acc, route) => [...acc, route.menuRoute], []);

  useEffect(() => {}, []);

  const redirectToHomePage = () => history.push(AppRoute.HOME.route);

  const scrollToTokenomics = () => {
    if (currentRoute === AppRoute.HOME.route) {
      document.querySelector('.home-token-sale-container')?.scrollIntoView();
    } else {
      history.push(AppRoute.HOME.route);
      setTimeout(() => {
        document.querySelector('.home-token-sale-container')?.scrollIntoView();
      }, 1);
    }
  };

  return (
    <header
      className={darkTheme ? 'navbar-container dark' : 'navbar-container'}
      style={shouldBeLight ? { color: COLORS.WHITE } : { color: 'black' }}
    >
      <Link to={AppRoute.HOME.route} className="logo-container">
        <>
          {darkTheme ? (
            <InvertedLogo className="logo" />
          ) : shouldBeLight ? (
            <LogoLight className="logo" />
          ) : (
            <Logo className="logo" />
          )}
        </>
      </Link>

      <nav className="navbar">
        <div className="menu-item">
          <Link
            className={
              useRouteMatch(AppRoute.HOME.route)
                ? 'menu-item-label active-menu-item-label'
                : 'menu-item-label'
            }
            to={AppRoute.HOME.route}
            style={{ color: darkTheme ? COLORS.WHITE : '' }}
          >
            Home
          </Link>
        </div>

        <div className="menu-item">
          <button
            type="button"
            className="menu-item-label"
            onClick={scrollToTokenomics}
            style={{
              color: darkTheme ? COLORS.WHITE : '',
              outline: 'none',
              border: 0,
              backgroundColor: 'inherit',
              fontWeight: 600,
            }}
          >
            Tokenomics
          </button>
        </div>

        {Object.values(MenuRoute).map(
          ({ label, routes, menuRoute, isHovered, isRouteAvailable }) => (
            <div
              key={generateId()}
              className={isHovered ? 'menu-item' : 'menu-item-non-hovered'}
              style={{
                color:
                  // @ts-ignore
                  (shouldRightPartBeLight && rightPartOfMenu.includes(menuRoute)) || shouldBeLight
                    ? COLORS.WHITE
                    : 'black',
              }}
            >
              {isRouteAvailable ? (
                <Link
                  className={
                    useRouteMatch(menuRoute) || routes.includes(currentRoute)
                      ? 'menu-item-label active-menu-item-label'
                      : 'menu-item-label'
                  }
                  to={menuRoute}
                  style={{ color: darkTheme ? COLORS.WHITE : '' }}
                >
                  {label}
                </Link>
              ) : (
                <span
                  style={{
                    color: 'grey',
                  }}
                >
                  {label}
                </span>
              )}

              {
                // @ts-ignore
                menuSections[label] && isHovered && isRouteAvailable && (
                  <div className="menu-item-list-container">
                    <div className="menu-item-list">
                      {/* @ts-ignore */}
                      {menuSections[label].map(
                        ({ icon, title, description, route, isAvailable }: any) =>
                          isAvailable ? (
                            <Link
                              to={isAvailable ? route : ''}
                              className="menu-item-list-item"
                              key={generateId()}
                            >
                              <div style={{ display: 'flex', flexDirection: 'row' }}>
                                {icon}
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginLeft: 20,
                                    alignItems: 'flex-start',
                                  }}
                                >
                                  <span className="menu-item-list-item-link">{title}</span>
                                  <p className="menu-item-list-item-text">{description}</p>
                                </div>
                              </div>
                            </Link>
                          ) : (
                            <span className="menu-item-list-item" key={generateId()}>
                              <div style={{ display: 'flex', flexDirection: 'row' }}>
                                {icon}
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginLeft: 20,
                                    alignItems: 'flex-start',
                                  }}
                                >
                                  <span
                                    className="menu-item-list-item-link"
                                    style={{
                                      color: 'grey',
                                    }}
                                  >
                                    {title}
                                  </span>
                                  <p
                                    className="menu-item-list-item-text"
                                    style={{
                                      color: 'grey',
                                    }}
                                  >
                                    {description}
                                  </p>
                                </div>
                              </div>
                            </span>
                          ),
                      )}
                    </div>
                  </div>
                )
              }
            </div>
          ),
        )}
      </nav>

      <div
        className="navbar-right-block"
        style={{
          color:
            shouldRightPartBeLight || shouldBeLight || currentRoute === AppRoute.SUPPORT.route
              ? COLORS.WHITE
              : 'black',
        }}
      >
        {currentRoute !== AppRoute.ACCOUNT.route &&
          currentRoute !== AppRoute.SETTINGS.route &&
          (isAuthenticated ? (
            <div className="navbar-login-block">
              <Link
                to={AppRoute.ACCOUNT.route}
                style={{ zIndex: 2, color: darkTheme ? COLORS.WHITE : '' }}
              >
                Profile
              </Link>
              <div style={{ width: '70%', display: 'flex', marginLeft: '1vw' }}>
                <Button
                  text="Buy now"
                  bgColor={COLORS.DARK_PURPLE}
                  textColor="white"
                  rounded={false}
                  link={isAuthenticated ? AppRoute.BUY.route : AppRoute.REGISTER.route}
                  isLink
                  onClick={() => {}}
                  size="s"
                  centered
                />
              </div>
            </div>
          ) : (
            <div className="navbar-login-block">
              <Link className="navbar-login-block-link" to={AppRoute.LOGIN.route}>
                Log in
              </Link>
              <Link className="navbar-login-block-link" to={AppRoute.REGISTER.route}>
                Sign up
              </Link>
            </div>
          ))}

        {(currentRoute === AppRoute.ACCOUNT.route || currentRoute === AppRoute.SETTINGS.route) && (
          <div className="navbar-account-controls">
            <button type="button" className="navbar-account-controls-btn" onClick={() => redirectToHomePage()}>
              <HomeIcon />
            </button>

            <button style={{ opacity: 0.7 }} type="button" className="navbar-account-controls-btn">
              <NotificationsIcon />
            </button>

            <button
              type="button"
              onClick={() => setIsExitToastOpened(true)}
              className="navbar-account-controls-btn"
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
        )}
      </div>
    </header>
  );
};

// @ts-ignore
export default withRouter(NavbarLayout);

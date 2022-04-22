import { useSelector } from 'react-redux';
import { useRouteMatch, Link, useHistory } from 'react-router-dom';
import { AppRoute, MenuRouteMobile } from '../../constants/routes';
import { useAuth } from '../../hooks/auth.hook';
import { useTranslation } from '../../hooks/translation';
import { IRootState } from '../../store';
import { generateId } from '../../utils';
import './style.scss';

interface IProps {
  isMenuOpened: boolean;
  switchIsMenuOpened: () => void;
  currentRoute: string;
}

const Menu = ({ isMenuOpened, switchIsMenuOpened, currentRoute }: IProps) => {
  const history = useHistory();
  const t = useTranslation();

  const { token } = useAuth();

  const isAuthenticated = Boolean(useSelector((state: IRootState) => state.auth.userId)) || !!token;

  const scrollToTokenomics = () => {
    if (currentRoute === AppRoute.HOME.route) {
      document.querySelector('.home-token-sale-container-mobile')?.scrollIntoView();
      switchIsMenuOpened();
    } else {
      history.push(AppRoute.HOME.route);
      setTimeout(() => {
        document.querySelector('.home-token-sale-container-mobile')?.scrollIntoView();
        switchIsMenuOpened()
      }, 1);
    }
  };

  return (
    <div className={`menu-container ${isMenuOpened && 'menu-container-active'}`}>
      <Link
        to={AppRoute.HOME.route}
        key={generateId()}
        className="menu-item-mobile"
        onClick={switchIsMenuOpened}
      >
        <span className={useRouteMatch(AppRoute.HOME.route) ? 'active-menu-item-text-mobile' : ''}>
          Home
        </span>
      </Link>


      <div className="menu-item-mobile">
          <button
            type="button"
            style={{
              outline: 'none',
              border: 0,
              background: 'inherit',
              color: 'inherit',
              padding: 0,
            }}
            onClick={scrollToTokenomics}
          >
            Tokenomics
          </button>
        </div>

      {Object.values(MenuRouteMobile).map(({ label, routes, menuRoute, isRouteAvailable }) => (
        <>
          {isRouteAvailable ? (
            <Link className="menu-item-mobile" to={menuRoute} onClick={switchIsMenuOpened}>
              <span className={useRouteMatch(menuRoute) ? 'active-menu-item-text-mobile' : ''}>
                {t(label)}
              </span>
            </Link>
          ) : (
            <span className="menu-item-mobile">
              <span
                className="menu-item-text-mobile"
                style={{
                  color: 'grey',
                }}
              >
                {label}
              </span>
            </span>
          )}
        </>
      ))}

      {isAuthenticated ? (
        <Link
          to={AppRoute.ACCOUNT.route}
          key={generateId()}
          className="menu-item-mobile"
          onClick={switchIsMenuOpened}
        >
          <span
            className={useRouteMatch(AppRoute.ACCOUNT.route) ? 'active-menu-item-text-mobile' : ''}
          >
            {t(AppRoute.ACCOUNT.label)}
          </span>
        </Link>
      ) : (
        <>
          <Link
            to={AppRoute.LOGIN.route}
            key={generateId()}
            className="menu-item-mobile"
            onClick={switchIsMenuOpened}
          >
            <span
              className={useRouteMatch(AppRoute.LOGIN.route) ? 'active-menu-item-text-mobile' : ''}
            >
              {t(AppRoute.LOGIN.label)}
            </span>
          </Link>

          <Link
            to={AppRoute.REGISTER.route}
            key={generateId()}
            className="menu-item-mobile"
            onClick={switchIsMenuOpened}
          >
            <span
              className={
                useRouteMatch(AppRoute.REGISTER.route) ? 'active-menu-item-text-mobile' : ''
              }
            >
              {t(AppRoute.REGISTER.label)}
            </span>
          </Link>
        </>
      )}
    </div>
  );
};
export default Menu;

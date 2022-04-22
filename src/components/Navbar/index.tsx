import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { LANGUAGES_LIST } from '../../constants/languages';
import { REGISTRATION_STEP_KEY, USER_ID_KEY } from '../../constants/localStorageKeys';
import { AppRoute } from '../../constants/routes';
import { useAuth } from '../../hooks/auth.hook';
import { IRootState } from '../../store';
import { logoutAction } from '../../store/actions/auth';
import { changeLanguage } from '../../store/actions/core';
import { DimensionedComponent } from '../../utils/dimensions';
import NavbarLayout from './NavbarLayout';
import NavbarMobileLayout from './NavbarLayout.mobile';

interface IProps {
  isAuthenticated: boolean;
}

export interface INavbarLayoutProps {
  isAuthenticated?: boolean;
  shouldBeLight: boolean;
  darkTheme: boolean;
  currentLanguage: {
    label: string;
    value: string;
  };
  onChange: (value: any) => void;
  options: {
    label: string;
    value: string;
  }[];
  currentRoute: string;
  onLogoutBtnClick: () => void;
  isExitToastOpened: boolean;
  setIsExitToastOpened: (value: boolean) => void;
  location?: { state: { scrollToTokenomics: boolean } };
}

const Navbar = ({ isAuthenticated }: IProps) => {
  const currentRoute = useLocation().pathname;
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const history = useHistory();

  const currentLanguage = useSelector((state: IRootState) => state.core.language);

  const darkTheme = Boolean(
    useRouteMatch(AppRoute.SUPPORT.route) || useRouteMatch(AppRoute.ACCOUNT.route),
  );

  const shouldBeLight = Boolean(
    useRouteMatch(AppRoute.ACCOUNT.route) || useRouteMatch(AppRoute.SETTINGS.route),
  );

  const [isExitToastOpened, setIsExitToastOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isExitToastOpened ? 'hidden' : 'overlay';
  }, [isExitToastOpened]);

  const changeIsExitToastOpenedStatus = (isOpened: boolean) => {
    setIsExitToastOpened(isOpened);
  };

  const onChange = (choosenValue: { label: string; value: string } | null) => {
    dispatch(changeLanguage(choosenValue));
  };
  const options = Object.values(LANGUAGES_LIST);

  const onLogoutBtnClick = () => {
    logout();
    localStorage.removeItem(REGISTRATION_STEP_KEY);
    localStorage.removeItem(USER_ID_KEY);

    dispatch(logoutAction());
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    history.push(AppRoute.LOGIN.route);
  };

  return DimensionedComponent(
    <NavbarLayout
      // @ts-ignore
      isAuthenticated={isAuthenticated}
      shouldBeLight={shouldBeLight}
      darkTheme={darkTheme}
      currentLanguage={currentLanguage}
      onChange={onChange}
      options={options}
      currentRoute={currentRoute}
      onLogoutBtnClick={onLogoutBtnClick}
      isExitToastOpened={isExitToastOpened}
      setIsExitToastOpened={changeIsExitToastOpenedStatus}
    />,
    <NavbarMobileLayout
      shouldBeLight={shouldBeLight}
      darkTheme={darkTheme}
      currentLanguage={currentLanguage}
      onChange={onChange}
      options={options}
      onLogoutBtnClick={onLogoutBtnClick}
      currentRoute={currentRoute}
      isExitToastOpened={isExitToastOpened}
      setIsExitToastOpened={changeIsExitToastOpenedStatus}
    />,
  );
};

export default Navbar;

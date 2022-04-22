import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { AppRoute, ResourcesRoute } from '../constants/routes';
import { useAuth } from '../hooks/auth.hook';
import { useTranslation } from '../hooks/translation';
import Account from '../screens/Account';
import Support from '../screens/Support';
import Roadmap from '../screens/Roadmap';
import Settings from '../screens/Settings';
import { IRootState } from '../store';
import Register from '../screens/Register';
import Login from '../screens/Login';
import { setUserId } from '../store/actions/auth';
import Plans from '../screens/Plans';
import Home from '../screens/Home';
import OnePager from '../screens/OnePager';
import Admin from '../screens/Admin';
import ManyStepsRegister from '../screens/ManyStepsRegister';
import CoreLoader from '../components/CoreLoader';

export default function App() {
  const { token, userId } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(setUserId(userId));
    }
  }, [userId]);

  const isAuthenticated = Boolean(useSelector((state: IRootState) => state.auth.userId)) || !!token;

  const t = useTranslation();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar isAuthenticated={isAuthenticated} />
          <Redirect to={AppRoute.HOME.route} />
          <Footer />
        </Route>

        <Route exact path={AppRoute.HOME.route}>
          <Navbar isAuthenticated={isAuthenticated} />
          <Home />
          <Footer />
        </Route>

        <Route exact path={ResourcesRoute.ONE_PAGER.route}>
          <Navbar isAuthenticated={isAuthenticated} />
          <OnePager />
        </Route>

        <Route path={AppRoute.SUPPORT.route}>
          <Navbar isAuthenticated={isAuthenticated} />
          <Support />
        </Route>

        <Route path={AppRoute.PLANS.route}>
          <Navbar isAuthenticated={isAuthenticated} />
          <Plans />
        </Route>

        <Route path={AppRoute.ROADMAP.route} exact>
          <Navbar isAuthenticated={isAuthenticated} />
          <Roadmap />
          <Footer />
        </Route>

        <Route path={AppRoute.ACCOUNT.route} exact>
          <Navbar isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <Account /> : <Redirect to={AppRoute.LOGIN.route} />}
        </Route>

        <Route path={AppRoute.LOGIN.route} exact>
          <Navbar isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <Redirect to={AppRoute.ACCOUNT.route} /> : <Login />}
        </Route>

        <Route path={AppRoute.REGISTER.route} exact>
          <Navbar isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <Redirect to={AppRoute.ACCOUNT.route} /> : <ManyStepsRegister />}
        </Route>

        <Route path={AppRoute.SETTINGS.route} exact>
          <Navbar isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <Settings /> : <Redirect to={AppRoute.LOGIN.route} />}
        </Route>

        <Route path={AppRoute.ADMIN.route} exact>
          <Admin />
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

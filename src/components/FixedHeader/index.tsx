import { useSelector } from 'react-redux';
import { AppRoute } from '../../constants/routes';
import { useAuth } from '../../hooks/auth.hook';
import { IRootState } from '../../store';
import Button from '../Button';

import './style.scss';

const FixedHeader = () => {
  document.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 1000 && window.pageYOffset < 3200) {
      document.querySelector('.fixed-header')?.classList.add('fixed');
    } else if (window.pageYOffset > 3200 && window.pageYOffset < 4000) {
      document.querySelector('.fixed-header')?.classList.remove('fixed');
    } else if (window.pageYOffset > 4000) {
      document.querySelector('.fixed-header')?.classList.add('fixed');
    } else {
      document.querySelector('.fixed-header')?.classList.remove('fixed');
    }
  });
  const { token } = useAuth();

  const isAuthenticated = Boolean(useSelector((state: IRootState) => state.auth.userId)) || !!token;

  return (
    <div className="fixed-header">
      <span>Hurry up to buy tokens at the lowest price</span>
      <div className="fixed-header-button">
        <Button
          text="Buy Now"
          bgColor="white"
          textColor="black"
          rounded
          link={isAuthenticated ? AppRoute.BUY.route : AppRoute.REGISTER.route}
          isLink
          onClick={() => {}}
          size="s"
          customWidth="fit-content"
          centered
        />
      </div>
    </div>
  );
};

export default FixedHeader;

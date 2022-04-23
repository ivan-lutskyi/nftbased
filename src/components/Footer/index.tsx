import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast, ToastContainer } from 'react-toastify';
import { ReactComponent as Logo } from '../../assets/img/appLogo/logo-light.svg';
import { ReactComponent as InstagramLogo } from './img/instagram.svg';
import { ReactComponent as FacebookLogo } from './img/facebook.svg';
import { ReactComponent as LinkedinLogo } from './img/linkedin.svg';
import { ReactComponent as MediumLogo } from './img/medium.svg';
import { ReactComponent as TelegramLogo } from './img/telegram.svg';
import { ReactComponent as TwitterLogo } from './img/twitter.svg';
import { AppRoute } from '../../constants/routes';
import './style.scss';
import './style.mobile.scss';
import { IRootState } from '../../store';
import { generateId } from '../../utils';
import { useTranslation } from '../../hooks/translation';
import { subscribeRequest } from '../../api/subscribe.service';
import {
  SERVER_ERROR_MESSAGE,
  SUCCESSFUL_SUBSCTIPTION_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
  INVALID_EMAIL,
} from '../../constants/messages';

import FormInput from '../FormInput';
import Text from '../Text';
import { COLORS } from '../../constants/colors';

const socials = [
  {
    link: 'https://www.instagram.com/nftbased.en/',
    icon: <InstagramLogo />,
  },
  {
    link: 'https://www.facebook.com/nftbased.net',
    icon: <FacebookLogo />,
  },
  {
    link: 'https://www.linkedin.com/company/nftbased-en/',
    icon: <LinkedinLogo />,
  },
  {
    link: 'https://medium.com/nftbased-io',
    icon: <MediumLogo />,
  },
  {
    link: 'https://t.me/NFTbased_EN',
    icon: <TelegramLogo />,
  },
  {
    link: 'https://twitter.com/nftbased',
    icon: <TwitterLogo />,
  },
];

const Footer = () => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';
  const t = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    subscribeRequest(data.email).then(
      (res: AxiosResponse<any> | { status: number; response: { message: string } }) => {
        if (res.status === StatusCodes.OK) {
          toast(SUCCESSFUL_SUBSCTIPTION_MESSAGE, {
            style: { backgroundColor: 'green', color: COLORS.WHITE },
          });
        } else if (res.status === StatusCodes.BAD_REQUEST) {
          // @ts-ignore
          toast(res.response.message, { style: { backgroundColor: 'red', color: COLORS.WHITE } });
        } else {
          toast(SERVER_ERROR_MESSAGE);
        }
      },
    );
  };

  return isDeviceMobile ? (
    <footer className="footer-container-mobile">
      <div className="footer-logo-container">
        <Logo className="footer-logo" />
      </div>

      <div className="footer-socials-mobile">
        <span className="footer-follow-title-mobile">Follow us:</span>

        <ul className="footer-socials-list-mobile">
          {socials.map(({ link, icon }) => (
            <a
              key={generateId()}
              href={link}
              target="_blank"
              className="footer-social-item-mobile"
              rel="noreferrer"
            >
              {icon}
            </a>
          ))}
        </ul>
      </div>

      <span className="footer-menu-subscribe-title-mobile">Subscribe to receive update</span>

      <form className="footer-menu-subscribe-mobile" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          label=""
          error={errors.email ? errors.email.message : null}
          placeholder="Enter your email"
          validation={register('email', {
            required: REQUIRED_FIELD_MESSAGE,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: INVALID_EMAIL,
            },
          })}
        />
        <button className="footer-menu-subscribe-btn-mobile" type="submit">
          Subscribe
        </button>
      </form>

      <span className="footer-menu-subscribe-note-mobile">
        * By submitting this form, you are agreeing to receive communications from NFT Based. To see
        how we use your information, please see our privacy policy.
      </span>

      <div className="footer-resources-mobile">
        <span className="footer-resources-text">Disclaimer</span>
        <Link to={AppRoute.PRIVACY_POLICY.route} className="footer-resources-text">
          Privacy
        </Link>
      </div>

      <span className="footer-resources-text-mobile">© 2021 NFT Based</span>
    </footer>
  ) : (
    <footer className="footer-container">
      <div className="footer-menu">
        <div className="footer-logo-socials-block">
          <Logo className="footer-logo" />

          <div className="footer-socials">
            <ul className="footer-socials-list">
              {socials.map(({ link, icon }) => (
                <a
                  key={generateId()}
                  href={link}
                  target="_blank"
                  className="footer-social-item"
                  rel="noreferrer"
                >
                  {icon}
                </a>
              ))}
            </ul>
          </div>

          <div className="footer-resources">
            <div className="footer-resources-info">
              <span className="footer-resources-text">© 2021 NFT Based</span>
              <span className="footer-resources-text">Disclaimer</span>
              <Link to={AppRoute.PRIVACY_POLICY.route} className="footer-resources-text">
                Privacy
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-menu-subscribe">
          <Text size="h3" className="footer-menu-subscribe-title" color={COLORS.LIGHT_PURPLE} bold>
            Subscribe to receive update
          </Text>

          <form className="footer-menu-subscribe-form" onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              type="text"
              label=""
              error={errors.email ? errors.email.message : null}
              placeholder="Enter your email"
              validation={register('email', {
                required: REQUIRED_FIELD_MESSAGE,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: INVALID_EMAIL,
                },
              })}
            />
            <button className="footer-menu-subscribe-btn" type="submit">
              Subscribe
            </button>
          </form>

          <span className="footer-menu-subscribe-note">
            * By submitting this form, you are agreeing to receive communications from NFT Based. To
            see how we use your information, please see our privacy policy.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

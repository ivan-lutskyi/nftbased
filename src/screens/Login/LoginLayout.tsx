import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import { AppRoute } from '../../constants/routes';
import FormInput from '../../components/FormInput';
import { useTranslation } from '../../hooks/translation';
import { particlesParams } from '../../constants/particlesParams';
import Loader from '../../components/Loader';
import { ReactComponent as CancelIcon } from './img/cancel-icon.svg';

import './style.scss';
import {
  getMaxLengthMessage,
  getMinLengthMessage,
  INVALID_EMAIL,
  REQUIRED_FIELD_MESSAGE,
} from '../../constants/messages';
import Text from '../../components/Text';
import { COLORS } from '../../constants/colors';

interface IProps {
  onSubmit: (data: any) => void;
  register: any;
  handleSubmit: any;
  errors: any;
  isLoading: boolean;
}

const LoginLayout = ({ onSubmit, register, handleSubmit, errors, isLoading }: IProps) => {
  const t = useTranslation();

  return (
    <>
      <Particles params={particlesParams} canvasClassName="login-particles" />

      <div className="login-container">
        <div className="login-block">
          <div className="login-title-container">
            <Text className="login-title" size="h3" bold>
              {t('LOGIN_WELCOME')}
            </Text>

            <Link to={AppRoute.HOME.route}>
              <CancelIcon width={20} height={20} />
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <FormInput
              type="text"
              label="Email"
              error={errors.email ? errors.email.message : null}
              validation={register('email', {
                required: REQUIRED_FIELD_MESSAGE,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: INVALID_EMAIL,
                },
              })}
            />
            <FormInput
              type="password"
              label={t('PASSWORD')}
              error={errors.password ? errors.password.message : null}
              validation={register('password', {
                required: REQUIRED_FIELD_MESSAGE,
                minLength: { value: 6, message: getMinLengthMessage('Password', 6) },
                maxLength: { value: 12, message: getMaxLengthMessage('Password', 12) },
              })}
            />

            <div className="login-forget_pwd-container">
              {/* <Link className="login-forget_pwd-text" to={AppRoute.DOWNLOADS.route}>
                {t('FORGET_PASSWORD_LINK')}
              </Link> */}
            </div>

            <button type="submit" disabled={isLoading} className="login-btn">
              {isLoading ? (
                <Loader />
              ) : (
                <Text size="h4" color={COLORS.WHITE}>
                  {t('LOGIN')}
                </Text>
              )}
            </button>

            <Link to={AppRoute.REGISTER.route} className="login-btn goto-register-btn">
              <Text size="h4" color={COLORS.DARK_PURPLE}>
                {t('REGISTRATION')}
              </Text>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginLayout;

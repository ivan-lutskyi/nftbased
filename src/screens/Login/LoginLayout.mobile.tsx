import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppRoute } from '../../constants/routes';
import FormInput from '../../components/FormInput';
import { useTranslation } from '../../hooks/translation';
import Loader from '../../components/Loader';
import { ReactComponent as CancelIcon } from './img/cancel-icon.svg';
import {
  getMaxLengthMessage,
  getMinLengthMessage,
  REQUIRED_FIELD_MESSAGE,
} from '../../constants/messages';
import Text from '../../components/Text';
import './style.mobile.scss';
import { COLORS } from '../../constants/colors';

interface IProps {
  onSubmit: (data: any) => void;
  register: any;
  handleSubmit: any;
  errors: any;
  isLoading: boolean;
}

const LoginMobileLayout = ({ onSubmit, register, handleSubmit, errors, isLoading }: IProps) => {
  const t = useTranslation();

  return (
    <>
      <div className="login-background-mobile" />

      <div className="login-container login-container-mobile">
        <div className="login-block-mobile" style={{ marginTop: 0 }}>
          <div className="login-title-container-mobile">
            <Text size="h3" className="login-title-mobile" bold>
              {t('LOGIN_WELCOME')}
            </Text>

            <Link to={AppRoute.HOME.route}>
              <CancelIcon width={20} height={20} />
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="login-form-mobile">
            <FormInput
              type="text"
              label="Email"
              error={errors.email ? errors.email.message : null}
              validation={register('email', {
                required: REQUIRED_FIELD_MESSAGE,
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

            <button type="submit" className="login-btn-mobile">
              {isLoading ? (
                <Loader />
              ) : (
                <Text size="h4" color="white">
                  {t('LOGIN')}
                </Text>
              )}
            </button>

            <Link
              to={AppRoute.REGISTER.route}
              className="login-btn-mobile goto-register-btn-mobile"
            >
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

export default LoginMobileLayout;

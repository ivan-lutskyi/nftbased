import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../constants/colors';
import { AppRoute } from '../../../constants/routes';
import FormInput from '../../../components/FormInput';
import { useTranslation } from '../../../hooks/translation';
import Loader from '../../../components/Loader';
import {
  getMaxLengthMessage,
  getMinLengthMessage,
  INVALID_EMAIL,
  REQUIRED_FIELD_MESSAGE,
} from '../../../constants/messages';
import Text from '../../../components/Text';

interface IProps {
  onSubmit: (data: any) => void;
  register: any;
  handleSubmit: any;
  errors: any;
  isLoading: boolean;
}

const FirstRegisterForm = ({ onSubmit, register, handleSubmit, errors, isLoading }: IProps) => (
  <form onSubmit={handleSubmit(onSubmit)} className="login-form first-step">
    <FormInput
      type="text"
      label="First name"
      error={errors.firstName ? errors.firstName.message : null}
      validation={register('firstName', {
        required: REQUIRED_FIELD_MESSAGE,
        minLength: { value: 2, message: getMinLengthMessage('First name', 6) },
        maxLength: { value: 12, message: getMaxLengthMessage('First name', 12) },
      })}
    />
    <FormInput
      type="text"
      label="Last name"
      error={errors.lastName ? errors.lastName.message : null}
      validation={register('lastName', {
        required: REQUIRED_FIELD_MESSAGE,
        minLength: { value: 2, message: getMinLengthMessage('Last name', 6) },
        maxLength: { value: 12, message: getMaxLengthMessage('Last name', 12) },
      })}
    />
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

    <button type="submit" disabled={isLoading} className="login-btn-mobile continue-btn">
      {isLoading ? (
        <Loader />
      ) : (
        <Text size="h4" color="white">
          Continue
        </Text>
      )}
    </button>

    <Link
      to={AppRoute.LOGIN.route}
      className="login-btn goto-register-btn many-steps-register-goto-login"
    >
      <Text size="h4" color={COLORS.DARK_PURPLE}>
        Already have an account
      </Text>
    </Link>
  </form>
);

export default FirstRegisterForm;

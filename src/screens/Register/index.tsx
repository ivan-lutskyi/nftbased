import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import { registerRequest } from '../../api/auth.service';
import { IRootState } from '../../store';
import RegisterLayout from './RegisterLayout';
import RegisterMobileLayout from './RegisterLayout.mobile';
import './style.css';
import { generateId } from '../../utils';
import { setUserId } from '../../store/actions/auth';
import { AppRoute } from '../../constants/routes';
import { useAuth } from '../../hooks/auth.hook';
import { REQUIRED_FIELD_MESSAGE, SERVER_ERROR_MESSAGE } from '../../constants/messages';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const params = useParams<{ referral?: string }>();

  const [countryError, setCountryError] = useState('');

  const registerFormFields = {
    leftSide: [
      {
        label: 'FIRST_NAME',
        id: 'firstName',
        type: 'text',
        validation: register('firstName', {
          required: REQUIRED_FIELD_MESSAGE,
        }),
      },
      {
        label: 'USERNAME',
        id: 'username',
        type: 'text',
        validation: register('username', {
          required: REQUIRED_FIELD_MESSAGE,
        }),
      },
      {
        label: 'PHONE_NUMBER',
        id: 'phoneNumber',
        type: 'tel',
        validation: register('phoneNumber', {
          required: REQUIRED_FIELD_MESSAGE,
        }),
      },
    ],
    rightSide: [
      {
        label: 'LAST_NAME',
        id: 'lastName',
        type: 'text',
        validation: register('lastName', {
          required: REQUIRED_FIELD_MESSAGE,
        }),
      },
      {
        label: 'PASSWORD',
        id: 'password',
        type: 'password',
        validation: register('password', {
          required: REQUIRED_FIELD_MESSAGE,
        }),
      },
      {
        label: 'EMAIL',
        id: 'email',
        type: 'email',
        validation: register('email', {
          required: REQUIRED_FIELD_MESSAGE,
        }),
      },
      {
        label: 'ADDRESS',
        id: 'address',
        type: 'text',
        validation: register('address', {
          required: REQUIRED_FIELD_MESSAGE,
        }),
      },
    ],
  };

  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [country, setCountry] = useState('');
  const { login } = useAuth();

  const checkIfCountryIsSelected = () => {
    if (!country.length) {
      setCountryError(REQUIRED_FIELD_MESSAGE);
    }
  };
  const dispatch = useDispatch();
  const history = useHistory();

  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  const onSubmit = handleSubmit(async (data: any) => {
    const response = await registerRequest({ ...data, country, referral: generateId() });
    const responseData = await response.data;

    if (response.status === StatusCodes.CREATED) {
      if (responseData.userId) {
        dispatch(setUserId(responseData.userId));
        login(responseData.token, responseData.userId);
        history.push(AppRoute.ACCOUNT.route);
      }
    } else if (
      response.status === StatusCodes.BAD_REQUEST ||
      response.status === StatusCodes.UNAUTHORIZED ||
      response.status === StatusCodes.FORBIDDEN
    ) {
      // toast('Your email/username/phone is already used...');
    } else if (response.status === StatusCodes.INTERNAL_SERVER_ERROR) {
      toast(SERVER_ERROR_MESSAGE);
    }
  }, checkIfCountryIsSelected);

  const onCountryChoose = (newCountry: string) => {
    setIsDropdownActive(false);
    setCountryError('');
    setCountry(newCountry);
  };
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    if (document.documentElement.scrollHeight + 30 > totalHeight) {
      setTotalHeight(document.documentElement.scrollHeight + 30);
    }
  }, []);

  return (
    <div className={isDeviceMobile ? 'register-container-mobile' : 'register-container'}>
      {isDeviceMobile ? (
        <RegisterMobileLayout
          formFields={registerFormFields}
          onSubmit={onSubmit}
          onCountryChoose={onCountryChoose}
          errors={errors}
          country={country}
          countryError={countryError}
        />
      ) : (
        <RegisterLayout
          formFields={registerFormFields}
          onSubmit={onSubmit}
          onCountryChoose={onCountryChoose}
          errors={errors}
          country={country}
          countryError={countryError}
        />
      )}
    </div>
  );
};

export default Register;

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StatusCodes } from 'http-status-codes';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { AppRoute } from '../../constants/routes';
import { loginRequest } from '../../api/auth.service';
import { setUserId } from '../../store/actions/auth';
import { useAuth } from '../../hooks/auth.hook';
import { IRootState } from '../../store';
import LoginLayout from './LoginLayout';
import LoginMobileLayout from './LoginLayout.mobile';
import { SERVER_ERROR_MESSAGE } from '../../constants/messages';
import { stepByResponseString } from '../ManyStepsRegister';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { login, logout } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const response = await loginRequest(data);

    if (response.status === StatusCodes.OK) {
      const responseData = await response.data;

      if (responseData.tokens.accessToken) {
        if (responseData.step === 'complete') {
          dispatch(setUserId(responseData.tokens.accessToken));
          login(responseData?.tokens?.accessToken, responseData?.userId);

          history.push(AppRoute.ACCOUNT.route);
        } else if (responseData.step === 'step2') {
          history.push({
            pathname: AppRoute.REGISTER.route,
            state: { step: stepByResponseString.step2, userId: responseData.userId },
          });
        } else if (responseData.step === 'step3') {
          history.push({
            pathname: AppRoute.REGISTER.route,
            state: { step: stepByResponseString.step3, userId: responseData.userId },
          });
          // history.push(AppRoute.REGISTER.route, { step: responseData.step });
        }

        // dispatch(setUserId(responseData.tokens.accessToken));
        // history.push(AppRoute.ACCOUNT.route);
        // login(responseData.tokens.accessToken,
        //   responseData.tokens.accessToken);
      }
    } else if (
      response.status === StatusCodes.BAD_REQUEST ||
      response.status === StatusCodes.UNAUTHORIZED ||
      response.status === StatusCodes.FORBIDDEN
    ) {
      setError('email', {
        type: 'manual',
        message: 'Incorrect email or password!',
      });
    } else {
      toast(SERVER_ERROR_MESSAGE);
    }
    setIsLoading(false);
  };

  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return (
    <>
      {isDeviceMobile ? (
        <LoginMobileLayout
          isLoading={isLoading}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
      ) : (
        <LoginLayout
          isLoading={isLoading}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default Login;

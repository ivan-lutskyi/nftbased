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

    // Demo mode: Accept any credentials and proceed to account page
    // Simulate a short delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Always succeed with mock data
    const mockUserId = 'demo-user-' + Date.now();
    const mockToken = 'demo-token-' + Date.now();

    dispatch(setUserId(mockToken));
    login(mockToken, mockUserId);
    history.push(AppRoute.ACCOUNT.route);

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

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import { REQUIRED_FIELD_MESSAGE } from '../../constants/messages';
import { AppRoute } from '../../constants/routes';
import './style.scss';

const Admin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm();
  const history = useHistory();

  const onSubmit = (data: { login: string; password: string }) => {
    if (data.login === 'admin' && data.password === '1111') {
      history.push(AppRoute.ACCOUNT.route);
    } else {
      setError('login', {
        type: 'manual',
        message: 'Incorrect login or password!',
      });
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-block">
        <div className="admin-title-container">
          <span className="admin-title">Admin Panel</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            error={errors.login ? errors.login.message : null}
            type="text"
            label="Login: "
            validation={register('login', {
              required: REQUIRED_FIELD_MESSAGE,
            })}
          />

          <FormInput
            error={errors.password ? errors.password.message : null}
            type="password"
            label="Password: "
            validation={register('password', {
              required: REQUIRED_FIELD_MESSAGE,
            })}
          />

          <div className="admin-btn-container">
            <button type="submit" className="admin-btn">
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;

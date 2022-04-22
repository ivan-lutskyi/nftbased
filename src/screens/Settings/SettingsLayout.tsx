import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/translation';
import { generateId } from '../../utils';
import FormInput from '../../components/FormInput';
import Avatar from './img/avatar.png';
import './style.css';
import { useAuth } from '../../hooks/auth.hook';
import { AppRoute } from '../../constants/routes';
import { REQUIRED_FIELD_MESSAGE } from '../../constants/messages';

const Settings = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [countryError, setCountryError] = useState('');
  const { logout } = useAuth();

  const t = useTranslation();

  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [country, setCountry] = useState('');
  const onDropdownClick = () => setIsDropdownActive(!isDropdownActive);

  const checkIfCountryIsSelected = () => {
    if (!country.length) {
      setCountryError(REQUIRED_FIELD_MESSAGE);
    }
  };
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    // await registerRequest({ ...data, country });
  };

  const onCountryChoose = (newCountry: string) => {
    setIsDropdownActive(false);
    setCountryError('');
    setCountry(newCountry);
  };

  const onLogoutBtnClick = () => {
    logout();
    dispatch(logout());
  };

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

  return (
    <div>
      <div
        style={{
          backgroundColor: '#FAFAFA',
          height: '100vh',
          position: 'absolute',
          zIndex: -2,
          top: 0,
          width: '100%',
        }}
      />

      <div>
        <div className="settings-container">
          <span className="settings-title">Your profile</span>

          <div className="settings-photo-container">
            <img src={Avatar} alt="" className="settings-avatar" />

            <button type="button" className="settings-upload-btn">
              Upload new photo
            </button>
            <Link
              to={AppRoute.LOGIN.route}
              className="settings-leave-btn"
              onClick={onLogoutBtnClick}
            >
              Leave account
            </Link>
          </div>

          <div className="settings-fields-left" style={{ marginRight: 30 }}>
            {registerFormFields.leftSide.map(({ label, id, type, validation }) => (
              <FormInput
                containerClassName="settings-field-container"
                inputClassName="settings-field-input"
                type={type}
                key={generateId()}
                label={t(label)}
                error={errors[id] ? errors[id].message : null}
                validation={validation}
              />
            ))}

            {/* <div className="settings-country-container" style={{ position: 'relative', zIndex: 2 }}>
              <span className="field-text field-label">{t('COUNTRY')}</span>
              <button
                style={{ zIndex: 2, position: 'relative', marginTop: 10 }}
                type="button"
                className="field-input field-input-dropdown-text field-input-dropdown"
                onClick={onDropdownClick}
              >
                {country || t('SELECT_A_COUNTRY')}
                {isDropdownActive ? (
                  <DropdownIcon style={{ transform: 'rotate(180deg)' }} />
                ) : (
                  <DropdownIcon />
                )}
              </button>

              {isDropdownActive && (
                <div className="settings-countries-list">
                  {countries.map((countryValue) => (
                    <button
                      key={generateId()}
                      type="button"
                      onClick={() => onCountryChoose(countryValue)}
                      className="settings-country-option"
                    >
                      {countryValue}
                    </button>
                  ))}
                </div>
              )}
              {countryError.length ? (
                <span className="field-error-text">{countryError}</span>
              ) : null}
            </div> */}
          </div>

          <div className="settings-fields-left">
            {registerFormFields.rightSide.map(({ label, id, type, validation }) => (
              <FormInput
                containerClassName="settings-field-container"
                inputClassName="settings-field-input"
                type={type}
                key={generateId()}
                label={t(label)}
                error={errors[id] ? errors[id].message : null}
                validation={validation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

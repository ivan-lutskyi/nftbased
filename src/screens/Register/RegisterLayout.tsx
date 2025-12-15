import Select from 'react-select/src/Select';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Grid } from '@material-ui/core';
import FormInput from '../../components/FormInput';
import './style.css';
import { generateId } from '../../utils';
import countries from '../../constants/countries';
import { useTranslation } from '../../hooks/translation';
import { AppRoute } from '../../constants/routes';
import { ReactComponent as CancelIcon } from '../Login/img/cancel-icon.svg';
import { COLORS } from '../../constants/colors';

interface IProps {
  onSubmit: () => void;
  formFields: {
    leftSide: {
      label: string;
      id: string;
      type: string;
      validation: UseFormRegisterReturn;
    }[];
    rightSide: {
      label: string;
      id: string;
      type: string;
      validation: UseFormRegisterReturn;
    }[];
  };
  errors: {
    [key: string]: {
      message?: string;
    };
  };
  country: string;
  onCountryChoose: (value: string) => void;
  countryError: string;
}

const RegisterLayout = ({
  onSubmit,
  formFields,
  errors,
  country,
  onCountryChoose,
  countryError,
}: IProps) => {
  const t = useTranslation();

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const onDropdownClick = () => setIsDropdownActive(!isDropdownActive);

  const onCountryItemClick = (countryValue: string) => {
    setIsDropdownActive(false);

    onCountryChoose(countryValue);
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <div
        className="register-particles"
        style={{
          position: 'fixed',
          zIndex: -1,
          top: 0,
          right: 0,
          width: '50vw',
          height: '100vh',
          backgroundColor: 'rgb(9, 11, 47)',
        }}
      />
      <div className="register-block">
        <div className="login-title-container">
          <span className="register-title">Create an account</span>

          <Link to={AppRoute.HOME.route}>
            <CancelIcon width={20} height={20} />
          </Link>
        </div>

        <form onSubmit={onSubmit} className="register-form">
          <div className="form-fields">
            <div className="form-fields-left">
              {formFields.leftSide.map(({ label, id, type, validation }) => (
                <FormInput
                  type={type}
                  key={generateId()}
                  label={t(label)}
                  // @ts-ignore
                  error={errors[id] ? errors[id].message : null}
                  validation={validation}
                />
              ))}

              {/* <div className="field-container">
                <span className="field-text field-label">{t('COUNTRY')}</span>
                <button
                  style={{ zIndex: 2 }}
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
                  <div className="countries-list">
                    {countries.map((countryValue) => (
                      <button
                        key={generateId()}
                        type="button"
                        onClick={() => onCountryItemClick(countryValue)}
                        className="country-option"
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

            <Select options={countries} />

            <div style={{ width: '50%' }}>
              {formFields.rightSide.map(({ label, id, type, validation }) => (
                <FormInput
                  type={type}
                  key={generateId()}
                  label={t(label)}
                  // @ts-ignore
                  error={errors[id] && errors[id].message}
                  validation={validation}
                />
              ))}
            </div>
          </div>

          <button type="submit" className="register-btn">
            {t('REGISTER')}
          </button>
          <Link to={AppRoute.LOGIN.route} className="register-btn goto-login-btn">
            {t('ALREADY_HAVE_AN_ACC')}
          </Link>
        </form>
      </div>
    </Grid>
  );
};

export default RegisterLayout;

import { UseFormRegisterReturn } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select/src/Select';
import Particles from 'react-particles-js';
import { ToastContainer } from 'react-toastify';
import { ReactComponent as DropdownIcon } from '../../assets/img/dropdownIcon.svg';
import FormInput from '../../components/FormInput';
import { generateId } from '../../utils';
import countries from '../../constants/countries';
import { useTranslation } from '../../hooks/translation';
import { AppRoute } from '../../constants/routes';
import './style.mobile.css';
import { particlesMobileParams, particlesParams } from '../../constants/particlesParams';
import { ReactComponent as CancelIcon } from '../Login/img/cancel-icon.svg';

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

const RegisterMobileLayout = ({
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
    <>
      <Particles params={particlesMobileParams} canvasClassName="register-particles-mobile" />
      <div className="register-block-mobile">
        <div className="login-title-container-mobile">
          <span className="register-title-mobile">Create an account</span>

          <Link to={AppRoute.HOME.route}>
            <CancelIcon width={20} height={20} />
          </Link>
        </div>

        <form onSubmit={onSubmit} className="register-form-mobile">
          <div className="form-fields-mobile">
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

            {/* <div className="field-container-mobile">
              <span className="field-text-mobile field-label-mobile">{t('COUNTRY')}</span>
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
                <div className="countries-list-mobile">
                  {countries.map((countryValue) => (
                    <button
                      key={generateId()}
                      type="button"c
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
            <Select options={countries} />

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

          <button type="submit" className="register-btn-mobile">
            {t('REGISTER')}
          </button>
          <Link to={AppRoute.LOGIN.route} className="register-btn-mobile goto-login-btn-mobile">
            {t('ALREADY_HAVE_AN_ACC')}
          </Link>
        </form>
      </div>
    </>
  );
};

export default RegisterMobileLayout;

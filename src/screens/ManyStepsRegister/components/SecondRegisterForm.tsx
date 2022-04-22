import { useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import Select from 'react-select';
import Loader from '../../../components/Loader';
import countries from '../../../constants/countries';
import 'react-phone-input-2/lib/style.css';
import { getGeoRequest } from '../../../api/geo.service';

interface IProps {
  onSubmit: (data: any) => void;
  handleSubmit: any;
  isLoading: boolean;
  countryCode: string;
  country: string;
  onCountryChoose: (value: string) => void;
  setCountryCode: (value: string) => void;
  countryError: string;
  phone: string;
  phoneError: string;
  phoneChangeHandler: (value: string) => void;
}

const SecondRegisterForm = ({
  onSubmit,
  handleSubmit,
  isLoading,
  countryCode,
  country,
  onCountryChoose,
  setCountryCode,
  countryError,
  phone,
  phoneError,
  phoneChangeHandler,
}: IProps) => {
  useEffect(() => {
    (async () => {
      const { response: geo } = await getGeoRequest();
      if (geo) {
        const {
          country_name: countryName,
          country_code: code,
          country_calling_code: countryCallingCode,
        } = geo;

        onCountryChoose(countryName);
        setCountryCode(code);
      }
    })();
  }, []);

  const handleChange = (selectedOption: any) => {
    onCountryChoose(selectedOption.label);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <div style={{ position: 'relative', marginBottom: 30 }}>
        <span className="field-label">Phone number</span>
        <PhoneInput
          enableSearch
          country={countryCode.toLocaleLowerCase()}
          value={phone}
          onChange={(newPhone: any, countryObj: any) => {
            const { countryCode: code } = countryObj;
            setCountryCode(code);
            phoneChangeHandler(newPhone);
          }}
          containerStyle={{
            zIndex: 10,
            margin: '10px 0px 10px 0px',
          }}
          inputStyle={{
            width: '100%',
            height: 'fit-content',
            backgroundColor: '#F6F6F6',
            borderRadius: 10,
            border: '1px solid #DEDEE1',
            padding: '15px 40px',
          }}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}
        />

        {/* {isPhoneNumberValid === false && phone ? (
          <span className="field-error-text">Invalid phone number</span>
        ) : null} */}
        {phoneError ? <span className="field-error-text">{phoneError}</span> : null}
      </div>

      <Select
        value={{ label: country }}
        className="field-container"
        options={countries}
        onChange={handleChange}
      >
        {countryError.length ? <span className="field-error-text">{countryError}</span> : null}
      </Select>

      <button type="submit" className="login-btn continue-btn">
        {isLoading ? <Loader /> : 'Continue'}
      </button>
    </form>
  );
};

export default SecondRegisterForm;

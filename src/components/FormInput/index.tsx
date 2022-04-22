import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from '../../hooks/translation';
import './style.scss';
import './style.mobile.css';
import { IRootState } from '../../store';
import Text from '../Text';

interface IProps {
  label: string;
  error: string;
  type: string;
  validation: any;
  containerClassName?: string;
  inputClassName?: string;
  onChange?: (value: any) => void;
  placeholder?: string;
}

const FormInput = ({
  label,
  error,
  type,
  validation,
  containerClassName,
  inputClassName,
  onChange,
  placeholder,
}: IProps) => {
  const t = useTranslation();
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return isDeviceMobile ? (
    <div className={`field-container-mobile ${containerClassName || ''}`}>
      <label className="field-text-mobile field-label-mobile">
        <Text size="h4">{label}</Text>
      </label>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e.target?.value);
          }
        }}
        type={type}
        className={`field-text-mobile field-input-mobile ${inputClassName || ''}`}
        placeholder={placeholder}
        {...validation}
      />
      {error && (
        <Text size="h4" color="red" className="field-error-text-mobile">
          {error}
        </Text>
      )}
    </div>
  ) : (
    <div className={`field-container ${containerClassName || ''}`}>
      <label className="field-text field-label">{label}</label>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e.target?.value);
          }
        }}
        type={type}
        className={`field-text field-input ${inputClassName || ''}`}
        placeholder={placeholder}
        {...validation}
      />
      {error && (
        <Text size="h4" color="red" className="field-error-text">
          {error}
        </Text>
      )}
    </div>
  );
};

export default FormInput;

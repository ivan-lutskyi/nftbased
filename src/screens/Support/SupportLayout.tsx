import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Button from '../../components/Button';
import { COLORS } from '../../constants/colors';
import './style.scss';

import { ReactComponent as MailImg } from './img/mail.svg';
import { ReactComponent as PhoneImg } from './img/phone.svg';
import FormInput from '../../components/FormInput';
import { REQUIRED_FIELD_MESSAGE } from '../../constants/messages';
import Loader from '../../components/Loader';
import Text from '../../components/Text';
import { useTranslation } from '../../hooks/translation';

export interface ISupportLayout {
  headerHeight: number | undefined;
}

interface IProps {
  onSubmit: (data: any) => void;
  register: any;
  handleSubmit: any;
  errors: any;
  isLoading: boolean;
  setCheckedStatus: (data: boolean) => void;
  isChecked: boolean;
  handleChange: (data: any) => void;
  textArea: any;
}

const SupportLayout = ({
  onSubmit,
  register,
  handleSubmit,
  errors,
  isLoading,
  isChecked,
  setCheckedStatus,
  handleChange,
  textArea,
}: IProps) => {
  const t = useTranslation();
  useEffect(() => {
    document.body.style.backgroundColor = '#090b2f';

    return () => {
      document.body.style.backgroundColor = 'white';
    };
  }, []);

  function handleCheckbox() {
    if (isChecked) {
      setCheckedStatus(false);
    } else {
      setCheckedStatus(true);
    }
  }
  return (
    <div className="full_screen-container support-container">
      <div className="support-title">
        <span>Support</span>
      </div>
      <div className="support-footer">
        <span className="input-container-title">
          <MailImg />
          <span>support@nftbased (disabled)</span>
        </span>
        <span className="input-container-title">
          <PhoneImg />
          <span>+XXXXXXXXXXX (disabled)</span>
        </span>
      </div>
      <form className="support-forms" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          containerClassName="support-input-container"
          type="text"
          label="First name"
          error={errors.firstname ? errors.firstname.message : null}
          validation={register('firstName', {
            required: REQUIRED_FIELD_MESSAGE,
          })}
        />

        <FormInput
          containerClassName="support-input-container"
          type="text"
          label="Last name"
          error={errors.secondname ? errors.secondname.message : null}
          validation={register('lastName', {
            required: REQUIRED_FIELD_MESSAGE,
          })}
        />

        <FormInput
          containerClassName="support-input-container"
          type="text"
          label="Email"
          error={errors.email ? errors.email.message : null}
          validation={register('email', {
            required: REQUIRED_FIELD_MESSAGE,
          })}
        />

        <div className="support-input-container">
          <div className="input-container-title">
            <span>I am a content creator</span>
          </div>
          <div className="custom-checkbox-container">
            <input type="checkbox" onClick={() => handleCheckbox()} />
            <span className="checkmark" />
            <div className={classNames('stick-one', isChecked ? 'active-stick-one' : '')} />
            <div className={classNames('stick-two', isChecked ? 'active-stick-two' : '')} />
          </div>
        </div>

        <div className="support-text-area-container">
          <div className="input-container-title">
            <span>Your message</span>
          </div>
          <textarea name="message" className="text-area" value={textArea} onChange={handleChange} />
        </div>

        <button type="submit" disabled={isLoading} className="support-button-container">
          {isLoading ? (
            <Loader />
          ) : (
            <Text size="h4" color={COLORS.WHITE}>
              Submit
            </Text>
          )}
        </button>
      </form>
    </div>
  );
};

export default SupportLayout;

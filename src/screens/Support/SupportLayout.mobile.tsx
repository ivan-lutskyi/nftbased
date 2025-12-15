import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Button from '../../components/Button';
import { COLORS } from '../../constants/colors';
import './style.mobile.scss';

import { ReactComponent as MailImg } from './img/mail.svg';
import { ReactComponent as PhoneImg } from './img/phone.svg';
import FormInput from '../../components/FormInput';
import { REQUIRED_FIELD_MESSAGE } from '../../constants/messages';
import Loader from '../../components/Loader';
import Text from '../../components/Text';

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
  setCheckedStatus,
  isChecked,
  handleChange,
  textArea,
}: IProps) => {
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
    <div className="full-container-mobile">
      <div className="support-container-mobile">
        <div className="support-title-mobile">
          <span>Support</span>
        </div>
        <div className="support-footer-mobile">
          <span className="input-container-title-mobile">
            <PhoneImg />
            <span>+XXXXXXXXXXX</span>
          </span>
          <span className="input-container-title-mobile">
            <MailImg />
            <span>support@nftbased</span>
          </span>
        </div>
        <form className="support-forms-mobile" onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="support-input-container-mobile">
            <div className="input-container-title-mobile">
              <span>First name</span>
            </div>
            <input />
          </div> */}

          <FormInput
            containerClassName="support-input-container-mobile"
            type="text"
            label="First name"
            error={errors.firstname ? errors.firstname.message : null}
            validation={register('firstName', {
              required: REQUIRED_FIELD_MESSAGE,
            })}
          />

          {/* <div className="support-input-container-mobile">
            <div className="input-container-title-mobile">
              <span>Last name</span>
            </div>
            <input />
          </div> */}

          <FormInput
            containerClassName="support-input-container-mobile"
            type="text"
            label="Last name"
            error={errors.secondname ? errors.secondname.message : null}
            validation={register('lastName', {
              required: REQUIRED_FIELD_MESSAGE,
            })}
          />

          {/* <div className="support-input-container-mobile">
            <div className="input-container-title-mobile">
              <span>Email</span>
            </div>
            <input />
          </div> */}

          <FormInput
            containerClassName="support-input-container-mobile"
            type="text"
            label="Email"
            error={errors.email ? errors.email.message : null}
            validation={register('email', {
              required: REQUIRED_FIELD_MESSAGE,
            })}
          />

          <div className="support-input-container-mobile">
            <div className="input-container-title-mobile">
              <span>I am a content creator</span>
            </div>
            <div className="custom-checkbox-container-mobile">
              <input type="checkbox" onClick={() => handleCheckbox()} />
              <span className="checkmark-mobile" />
              <div
                className={classNames(
                  'stick-one-mobile',
                  isChecked ? 'active-stick-one-mobile' : '',
                )}
              />
              <div
                className={classNames(
                  'stick-two-mobile',
                  isChecked ? 'active-stick-two-mobile' : '',
                )}
              />
            </div>
          </div>

          <div className="support-text-area-container-mobile">
            <div className="input-container-title-mobile">
              <span>Your message</span>
            </div>
            <textarea
              className="text-area-mobile"
              name="message"
              value={textArea}
              onChange={handleChange}
            />
          </div>

          <button type="submit" disabled={isLoading} className="support-button-container-mobile">
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
    </div>
  );
};

export default SupportLayout;

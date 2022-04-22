import { StatusCodes } from 'http-status-codes';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { supportRequest } from '../../api/auth.service';
import { DONE_OPERATION_MESSAGE, SERVER_ERROR_MESSAGE } from '../../constants/messages';
import { IRootState } from '../../store';
import SupportLayout from './SupportLayout';
import SupportMobileLayout from './SupportLayout.mobile';

const Support = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [textArea, setTextArea] = useState('');
  const [isChecked, setCheckedStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (event: any) => {
    setTextArea(event.target.value);
  };

  const onSubmit = async (data: any) => {
    const requestData =  {...data, message: textArea, isContentCreator: isChecked}
    setIsLoading(true);

    const response = await supportRequest(requestData);

    if (response.status === StatusCodes.OK) {
      toast(DONE_OPERATION_MESSAGE);
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

  return isDeviceMobile ? 
    <SupportMobileLayout
      isLoading={isLoading}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      setCheckedStatus={setCheckedStatus}
      isChecked={isChecked}
      handleChange={handleChange}
      textArea={textArea}
    /> 
    : 
    <SupportLayout
      isLoading={isLoading}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      setCheckedStatus={setCheckedStatus}
      isChecked={isChecked}
      handleChange={handleChange}
      textArea={textArea}
    />
};

export default Support;

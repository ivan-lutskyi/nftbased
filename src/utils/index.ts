import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { SERVER_ERROR_MESSAGE } from '../constants/messages';

export const generateId = () => uuidv4();
export const handleResponseStatus = (
  status: number,
  onSuccess: () => void,
  onFrontSideError: () => void,
) => {
  if (status === StatusCodes.OK) {
    onSuccess();
  } else if (
    status === StatusCodes.BAD_REQUEST ||
    status === StatusCodes.UNAUTHORIZED ||
    status === StatusCodes.FORBIDDEN
  ) {
    onFrontSideError();
  } else {
    toast(SERVER_ERROR_MESSAGE);
  }
};

export const validateEmail = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
export const validatePassword = (password: string) => password.length;

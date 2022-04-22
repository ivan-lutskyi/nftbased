import { register1stepDto, register2stepDto } from '../interfaces/auth';
import api from './xhr';

const FIRST_REGISTER_DATA = 'https://hook.integromat.com/fbsxk2463jfws34rc4bf503l6ek6a54p';
const SECOND_REGISTER_DATA = 'https://hook.integromat.com/ndiv9huak7gh3bp331ppltldz748xiyl';

export const firstRegisterDataIntegromatRequest = (data: register1stepDto) =>
  api.post(FIRST_REGISTER_DATA, {
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
  });

export const secondRegisterDataIntegromatRequest = (
  firstStepData: register1stepDto,
  secondStepData: {
    phoneNumber: string;
    country: string;
  },
) =>
  api.post(SECOND_REGISTER_DATA, {
    email: firstStepData.email,
    firstName: firstStepData.firstName,
    lastName: firstStepData.lastName,
    country: secondStepData.country,
    phoneNumber: secondStepData.phoneNumber,
  });

import { register1stepDto, register2stepDto } from '../interfaces/auth';
import api from './xhr';

const FIRST_REGISTER_DATA = 'https://hook.integromat.com/fbsxk2463jfws34rc4bf503l6ek6a54p';
const SECOND_REGISTER_DATA = 'https://hook.integromat.com/ndiv9huak7gh3bp331ppltldz748xiyl';

// Network requests disabled - returns mock responses
export const firstRegisterDataIntegromatRequest = (data: register1stepDto) =>
  Promise.resolve({ status: 200, data: { message: 'First step data sent (mock)' } });

export const secondRegisterDataIntegromatRequest = (
  firstStepData: register1stepDto,
  secondStepData: {
    phoneNumber: string;
    country: string;
  },
) => Promise.resolve({ status: 200, data: { message: 'Second step data sent (mock)' } });

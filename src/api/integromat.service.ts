import { register1stepDto, register2stepDto } from '../interfaces/auth';
import api from './xhr';

// Webhook URLs removed for security - services are mocked
// const FIRST_REGISTER_DATA = 'https://hook.integromat.com/YOUR_WEBHOOK_ID_1';
// const SECOND_REGISTER_DATA = 'https://hook.integromat.com/YOUR_WEBHOOK_ID_2';

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

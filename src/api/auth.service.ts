import {
  register1stepDto,
  register2stepDto,
  register3stepDto,
  registerDto,
} from '../interfaces/auth';
import api from './xhr';

interface loginDto {
  email: string;
  password: string;
}

const AUTH_API = '/app/auth';
const REGISTER_API = '/app/register';

// Network requests disabled - all functions return mock responses
export const registerRequest = (data: registerDto) =>
  Promise.resolve({ status: 201, data: { userId: 'mock-user-id', token: 'mock-token' } });

export const step1registerRequest = (data: register1stepDto) =>
  Promise.resolve({ status: 200, data: { _id: 'mock-user-id' } });

export const step2registerRequest = (data: register2stepDto) =>
  Promise.resolve({ status: 200, data: { _id: 'mock-user-id' } });

export const step3registerRequest = (data: register3stepDto) =>
  Promise.resolve({
    status: 200,
    data: {
      _id: 'mock-user-id',
      tokens: { accessToken: 'mock-token' },
    },
  });

export const loginRequest = (data: loginDto) =>
  Promise.resolve({
    status: 200,
    data: {
      step: 'complete',
      userId: 'mock-user-id',
      tokens: { accessToken: 'mock-token' },
    },
  });

export const supportRequest = (data: any) =>
  Promise.resolve({ status: 200, data: { message: 'Support request received (mock)' } });

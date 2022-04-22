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

export const registerRequest = (data: registerDto) =>
  api.post(`${AUTH_API}/register`, data).catch(() => ({ status: 400, data: {} }));
export const step1registerRequest = (data: register1stepDto) =>
  api
    .post(`${REGISTER_API}/step1`, data)
    .catch(({ response }) => ({ status: response.status, data: {} }))
    .catch(() => ({ status: 500, data: {} }));
export const step2registerRequest = (data: register2stepDto) =>
  api
    .post(`${REGISTER_API}/step2`, data)
    .catch(({ response }) => ({ status: response.status, data: {} }))
    .catch(() => ({ status: 500, data: {} }));
export const step3registerRequest = (data: register3stepDto) =>
  api
    .post(`${REGISTER_API}/step3`, data)
    .catch(({ response }) => ({ status: response.status, data: {} }))
    .catch(() => ({ status: 500, data: {} }));

export const loginRequest = (data: loginDto) =>
  api
    .post(`${AUTH_API}/login`, data)
    .catch(({ response }) => ({ status: response.status, data: {} }));

export const supportRequest = (data: any) =>
  api
    .post(`/app/support`, data)
    .catch(({ response }) => ({ status: response.status, data: {} }));

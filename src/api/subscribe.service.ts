import { AxiosError, AxiosResponse } from 'axios';
import api from './xhr';

const SUBSCRIBE_API = '/app/subscription';

export const subscribeRequest = (email: string) =>
  api
    .post(`${SUBSCRIBE_API}/subscribe`, { email })
    .then((value: AxiosResponse) => value)
    .catch((error: AxiosError) => ({ status: 400, response: error.response?.data }));

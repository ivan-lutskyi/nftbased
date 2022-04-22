import { AxiosError, AxiosResponse } from 'axios';
import api from './xhr';

const TOKEN_DATA_URL = '/app/chart';

export const tokenDataRequest = (range: string) =>
  api
    .get(`${TOKEN_DATA_URL}/?range=${range}`)
    .then((value: AxiosResponse) => ({ status: value.status, response: value.data }))
    .catch((error: AxiosError) => ({ status: 400, response: error.response?.data }));

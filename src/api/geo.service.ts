import { AxiosError, AxiosResponse } from 'axios';
import api from './xhr';

const GEO_API_URL = 'https://ipapi.co/json/';

export const getGeoRequest = () =>
  api
    .get(GEO_API_URL)
    .then((value: AxiosResponse) => ({
      status: value.status,
      response: value.data,
    }))
    .catch((error: AxiosError) => ({
      status: 400,
      response: error.response?.data,
    }));

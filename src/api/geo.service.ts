import { AxiosError, AxiosResponse } from 'axios';
import api from './xhr';

const GEO_API_URL = 'https://ipapi.co/json/';

// Network requests disabled - returns mock response
export const getGeoRequest = () =>
  Promise.resolve({
    status: 200,
    response: {
      country_name: 'United States',
      country_code: 'US',
      city: 'New York',
    },
  });

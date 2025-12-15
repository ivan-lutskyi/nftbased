import { AxiosError, AxiosResponse } from 'axios';
import api from './xhr';

const TOKEN_DATA_URL = '/app/chart';

// Network requests disabled - returns mock response
export const tokenDataRequest = (range: string) =>
  Promise.resolve({
    status: 200,
    response: {
      data: [
        { time: Date.now() - 86400000, value: 100 },
        { time: Date.now(), value: 105 },
      ],
    },
  });

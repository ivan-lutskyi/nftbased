import axios, { AxiosError, AxiosResponse } from 'axios';
import HttpCode from 'http-status-codes';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8000';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (
  onSuccessCallback?: (response: AxiosResponse) => AxiosResponse,
  onFailCallback?: (err: AxiosError) => void,
) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = onSuccessCallback || ((response: AxiosResponse) => response);

  const onFail =
    onFailCallback ||
    ((err: AxiosError) => {
      const { response } = err;

      if (response && response.status === HttpCode.UNAUTHORIZED) {
        throw err;
      }

      throw err;
    });

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

const api = createAPI();
export default api;

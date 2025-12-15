import axios, { AxiosError, AxiosResponse } from 'axios';
import HttpCode from 'http-status-codes';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8000';
const REQUEST_TIMEOUT = 5000;

// Mock response function - prevents all network requests
const createMockResponse = (url: string, method: string, data?: any): Promise<AxiosResponse> => {
  return Promise.resolve({
    status: 200,
    statusText: 'OK',
    data: {},
    headers: {},
    config: {} as any,
  });
};

export const createAPI = (
  onSuccessCallback?: (response: AxiosResponse) => AxiosResponse,
  onFailCallback?: (err: AxiosError) => void,
) => {
  // Create a mock API object that intercepts all requests
  const mockApi = {
    get: (url: string) => createMockResponse(url, 'GET'),
    post: (url: string, data?: any) => createMockResponse(url, 'POST', data),
    put: (url: string, data?: any) => createMockResponse(url, 'PUT', data),
    delete: (url: string) => createMockResponse(url, 'DELETE'),
    patch: (url: string, data?: any) => createMockResponse(url, 'PATCH', data),
  } as any;

  return mockApi;
};

const api = createAPI();
export default api;

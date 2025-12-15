import { AxiosError, AxiosResponse } from 'axios';
import api from './xhr';

const SUBSCRIBE_API = '/app/subscription';

// Network requests disabled - returns mock response
export const subscribeRequest = (email: string) =>
  Promise.resolve({ status: 200, data: { message: 'Subscribed (mock)' } });

import axios from 'axios';
import * as Types from './types';
import { env } from '@/env';

export const api = axios.create({
  baseURL: env.VITE_API_URL,
}) as Types.ICustomAxiosInstance;

api.customInterceptor = signOut => {
  const interceptTokenManager = api.interceptors.response.use(
    response => response,
    async error => {
      if (error.response?.status === 401) {
        signOut();
      }

      return Promise.reject(error);
    },
  );

  return () => {
    api.interceptors.response.eject(interceptTokenManager);
  };
};

import axios from 'axios';
import * as Types from './types';

export const api = axios.create({
  baseURL: 'http://167.249.227.198:8080/',
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

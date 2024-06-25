import { AxiosError, type AxiosInstance } from 'axios';
import type { ISession } from '@/contexts/session/types';

interface IFailedRequestQueue {
  onSuccess: (newToken: string) => void;
  onFailure: (error: AxiosError) => void;
}

interface ICustomAxiosInstance extends AxiosInstance {
  customInterceptor: (signOut: () => void) => () => void;
}

export { AxiosError, ISession };  export type { IFailedRequestQueue, ICustomAxiosInstance };


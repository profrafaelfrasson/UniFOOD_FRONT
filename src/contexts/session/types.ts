import { type UseMutationResult } from '@tanstack/react-query';
import { type ReactNode } from 'react';

interface ISession {
  token: string;
}


interface ISessionContext {
  session: ISession | null;
  signIn: UseMutationResult<
    ISession,
    Error,
    {
      email: string;
      password: string;
    },
    unknown
  >;
  signOut: () => void;
}

interface ISessionProvider {
  children: ReactNode;
}

export type { ISession, ISessionContext, ISessionProvider };

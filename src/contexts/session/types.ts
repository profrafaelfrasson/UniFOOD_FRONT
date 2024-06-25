import { type UseMutationResult } from '@tanstack/react-query';
import { type ReactNode } from 'react';

interface ISession {
  user: IUser;
  token: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  roles: ['USER'];
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

export type { ISession, IUser, ISessionContext, ISessionProvider };

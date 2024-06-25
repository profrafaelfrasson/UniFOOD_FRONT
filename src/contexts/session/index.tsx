import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createContext, useEffect, useState } from 'react';
import * as Types from './types';
import { api } from '@/lib/axios';
import { jwtDecode } from "jwt-decode";
import { SESSION_STORAGE_KEY } from '@/constants';


export const SessionContext = createContext<Types.ISessionContext>(
  {} as Types.ISessionContext,
);

export function SessionProvider({ children }: Types.ISessionProvider) {
  const queryClient = useQueryClient();

  const [session, setSession] = useState<Types.ISession | null>(null);

  const saveSession = (session: Types.ISession) => {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  };

  const removeSession = () => {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  };

  const signIn = useMutation({
    mutationKey: ['sign-in'],
    mutationFn: async (params: { email: string; password: string }) => {
      const { data } = await api.post('/login', params);

      const { token } = data;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const user = jwtDecode<Types.IUser>(token);

      const session: Types.ISession = { token, user };
      saveSession(session);
      return session;
    },
    onSuccess: async session => {
      setSession(session);
    },
  });

  function signOut() {
    api.defaults.headers.common['Authorization'] = undefined;
    removeSession();
    queryClient.removeQueries();
    setSession(null);
  }

  function loadSession() {
    const sessionString = localStorage.getItem(SESSION_STORAGE_KEY);
    if (sessionString) {
      const session = JSON.parse(sessionString) as Types.ISession;
      const { token } = session;
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setSession(session);
    }
  }

  useEffect(loadSession, []);

  useEffect(() => {
    const unsubscribe = api.customInterceptor(signOut);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SessionContext.Provider value={{ session, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
}

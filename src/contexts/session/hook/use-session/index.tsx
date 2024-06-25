import { useContext } from 'react';
import { SessionContext } from '../..';

export function useSession() {
  return useContext(SessionContext);
}

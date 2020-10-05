import { createContext, useContext } from 'react';

export const VoteContext = createContext();

export function useStore() {
  return useContext(VoteContext);
}

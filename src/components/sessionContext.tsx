import React, { createContext, useContext, ReactNode, useState } from 'react';
import { SessionDto } from '../api/generated-sources/ocgClientFetch'


interface SessionContextProps {
  session: SessionDto | null;
  setSession: React.Dispatch<React.SetStateAction<SessionDto | null>>;
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined);

export const SessionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<SessionDto | null>(null);

  const contextValue: SessionContextProps = {
    session,
    setSession,
  };

  return <SessionContext.Provider value={contextValue}>{children}</SessionContext.Provider>;
};

export const useSessionContext = (): SessionContextProps => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error('useSessionContext must be used within a SessionProvider');
  }

  return context;
};
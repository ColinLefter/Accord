import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define an interface for your context state
interface CacheContextState {
  lastFetched: number | null;
  setLastFetched: (value: number | null) => void;
}

// Define a default context state
const defaultContextState: CacheContextState = {
  lastFetched: null,
  setLastFetched: () => {}, // noop function
};

// Create the context with the default state
const CacheContext = createContext<CacheContextState>(defaultContextState);

// Type the props for CacheProvider
interface CacheProviderProps {
  children: ReactNode;
}

export const CacheProvider: React.FC<CacheProviderProps> = ({ children }) => {
  const [lastFetched, setLastFetched] = useState<number | null>(null);

  // Provide the state and updater function to the context
  return (
    <CacheContext.Provider value={{ lastFetched, setLastFetched }}>
      {children}
    </CacheContext.Provider>
  );
};

// Custom hook to use the context
export const useCache = (): CacheContextState => useContext(CacheContext);

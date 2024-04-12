import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CacheContextState {
  lastFetched: number | null;
  setLastFetched: (value: number | null) => void;
}

const defaultContextState: CacheContextState = {
  lastFetched: null,
  setLastFetched: () => {},
};

const CacheContext = createContext<CacheContextState>(defaultContextState);

interface CacheProviderProps {
  children: ReactNode;
}

/**
 * CacheProvider is a React context provider designed to manage and provide access to cache-related state across the application.
 * It specifically manages the `lastFetched` timestamp state, indicating the last time data was fetched,
 * which can be utilized to optimize data fetching strategies and minimize unnecessary requests.
 *
 * The context's state includes:
 * - lastFetched: A timestamp (number or null) indicating the last time data was fetched.
 * - setLastFetched: A function to update the `lastFetched` state, allowing components to signal when new data has been fetched.
 *
 * This context aims to centralize the management of cache-related state to facilitate efficient data fetching and updating mechanisms.
 * By providing this state through context, components throughout the application can access and update cache state without prop drilling,
 * improving code readability and maintainability.
 *
 * The `useCache` custom hook abstracts away the useContext hook for consuming the CacheContext,
 * providing components a straightforward and error-safe method to access cache-related state and functions.
 * It ensures the context is consumed within a component tree that includes the CacheProvider, throwing an error if not.
 *
 * Props:
 * - children: The child components of the CacheProvider, which will have access to the cache context.
 *
 * This setup supports creating a responsive and efficient user experience by enabling components to react to and dictate caching behavior
 * based on data fetching activities.
 *
 * @param {ReactNode} children The child components that the CacheProvider will wrap, granting them access to the cache context.
 * @returns {JSX.Element} The CacheProvider component that provides cache context to its child components.
 */
export const CacheProvider: React.FC<CacheProviderProps> = ({ children }) => {
  const [lastFetched, setLastFetched] = useState<number | null>(null);

  return (
    <CacheContext.Provider value={{ lastFetched, setLastFetched }}>
      {children}
    </CacheContext.Provider>
  );
};

export const useCache = (): CacheContextState => useContext(CacheContext);

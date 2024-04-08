import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define a type for the context value
type ActiveViewContextType = {
  activeView: string;
  setActiveView: (view: string) => void; // Correct the type to match useState
};

// Create context with an initial value that matches the type
const ActiveViewContext = createContext<ActiveViewContextType>({
  activeView: 'friends',
  setActiveView: () => {}, // This is a placeholder function
});

export const useActiveView = () => useContext(ActiveViewContext);

// Define a type for the provider props
type ActiveViewProviderProps = {
  children: ReactNode; // Correct type for children
};

export const ActiveViewProvider: React.FC<ActiveViewProviderProps> = ({ children }) => {
  const [activeView, setActiveView] = useState<string>('friends');
  
  return (
    <ActiveViewContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </ActiveViewContext.Provider>
  );
};

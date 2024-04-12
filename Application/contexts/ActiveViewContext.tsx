import React, { createContext, useContext, useState, ReactNode } from 'react';

type ActiveViewContextType = {
  activeView: string;
  setActiveView: (view: string) => void;
};

const ActiveViewContext = createContext<ActiveViewContextType>({
  activeView: 'friends',
  setActiveView: () => {}, // This is a placeholder function
});

export const useActiveView = () => useContext(ActiveViewContext);

type ActiveViewProviderProps = {
  children: ReactNode;
};

export const ActiveViewProvider: React.FC<ActiveViewProviderProps> = ({ children }) => {
  const [activeView, setActiveView] = useState<string>('friends');
  
  return (
    <ActiveViewContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </ActiveViewContext.Provider>
  );
};

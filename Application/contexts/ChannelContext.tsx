import React, { useState, createContext, useContext, Dispatch, SetStateAction } from 'react';

interface ChannelContextType {
  selectedChannelId: string | null;
  setSelectedChannelId: Dispatch<SetStateAction<string | null>>;
}

const defaultContextValue: ChannelContextType = {
  selectedChannelId: null,
  setSelectedChannelId: () => {} // Placeholder function
};

const ChannelContext = createContext<ChannelContextType>(defaultContextValue);

export const useChannelContext = () => useContext(ChannelContext);

export { ChannelContext };

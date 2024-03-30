import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MessageProps } from "@/accordTypes"; // Adjust the path as necessary

interface ChatContextType {
  chatHistory: MessageProps[];
  updateChatHistory: (messages: MessageProps[]) => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chatHistory, setChatHistory] = useState<MessageProps[]>([]);

  const updateChatHistory = (messages: MessageProps[]) => {
    setChatHistory(messages);
  };

  return (
    <ChatContext.Provider value={{ chatHistory, updateChatHistory }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

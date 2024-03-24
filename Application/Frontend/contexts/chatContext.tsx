import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Message } from "@/components/Messaging/MessagingInterface"; // Adjust the path as necessary

interface ChatContextType {
  chatHistory: Message[];
  updateChatHistory: (messages: Message[]) => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const updateChatHistory = (messages: Message[]) => {
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

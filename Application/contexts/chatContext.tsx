import { createContext, useContext, useState, ReactNode } from 'react';
import { DisplayedMessageProps } from "@/accordTypes"; // Make sure this path is correct
import { ChatProps } from "@/accordTypes"; // Make sure this path is correct

interface ChatContextType {
  chatHistory: DisplayedMessageProps[];
  updateChatHistory: (messages: DisplayedMessageProps[]) => void;
  chatProps: ChatProps | null; // Include chat props
  setChatProps: (props: ChatProps | null) => void; // Function to update chat props
}

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chatHistory, setChatHistory] = useState<DisplayedMessageProps[]>([]);
  const [chatProps, setChatProps] = useState<ChatProps | null>(null);

  const updateChatHistory = (messages: DisplayedMessageProps[]) => {
    setChatHistory(messages);
  };

  return (
    <ChatContext.Provider value={{ chatHistory, updateChatHistory, chatProps, setChatProps }}>
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

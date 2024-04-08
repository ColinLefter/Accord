import { createContext, useContext, useState, ReactNode } from 'react';
import { DisplayedMessageProps, ChatProps } from "@/accordTypes"; // Consolidated import

interface ChatContextType {
  chatHistory: DisplayedMessageProps[];
  updateChatHistory: (messages: DisplayedMessageProps[]) => void;
  chatProps: ChatProps | null;
  setChatProps: (props: ChatProps | null) => void;
  selectedChannelId: string | null;
  setSelectedChannelId: (id: string | null) => void;
  updateContext: (channelId: string | null, props: ChatProps | null) => void; // New method
}

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chatHistory, setChatHistory] = useState<DisplayedMessageProps[]>([]);
  const [chatProps, setChatProps] = useState<ChatProps | null>(null);
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(null);

  const updateChatHistory = (messages: DisplayedMessageProps[]) => {
    setChatHistory(messages);
  };

  // New method to update both selectedChannelId and chatProps
  const updateContext = (channelId: string | null, props: ChatProps | null) => {
    setSelectedChannelId(channelId);
    setChatProps(props);
  };

  return (
    <ChatContext.Provider value={{ chatHistory, updateChatHistory, chatProps, setChatProps, selectedChannelId, setSelectedChannelId, updateContext }}>
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

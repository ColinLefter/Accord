import { createContext, useContext, useState, ReactNode } from 'react';
import { DisplayedMessageProps, ChatProps } from "@/accordTypes";

interface ChatContextType {
  chatHistory: DisplayedMessageProps[];
  updateChatHistory: (messages: DisplayedMessageProps[]) => void;
  chatProps: ChatProps | null;
  setChatProps: (props: ChatProps | null) => void;
  selectedChannelId: string | null;
  setSelectedChannelId: (id: string | null) => void;
  updateContext: (channelId: string | null, props: ChatProps | null) => void;
  activeView: string;
  setActiveView: (view: string) => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chatHistory, setChatHistory] = useState<DisplayedMessageProps[]>([]);
  const [chatProps, setChatProps] = useState<ChatProps | null>(null);
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState('friends');

  const updateChatHistory = (messages: DisplayedMessageProps[]) => {
    setChatHistory(messages);
  };

  const updateContext = (channelId: string | null, props: ChatProps | null) => {
    setSelectedChannelId(channelId);
    setChatProps(props); // This updates chatProps, including isAdmin
  };

  return (
    <ChatContext.Provider value={{ chatHistory, updateChatHistory, chatProps, setChatProps, selectedChannelId, setSelectedChannelId, updateContext, activeView, setActiveView }}>
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

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MessageProps } from "@/accordTypes"; // Adjust the path as necessary

interface ChatContextType {
  chatHistory: MessageProps[];
  updateChatHistory: (messages: MessageProps[]) => void;
}

const ChatContext = createContext<ChatContextType | null>(null);

/**
 * ChatProvider is a React context provider that facilitates global state management for chat history within the application.
 * It allows components deeper in the tree to access and manipulate the chat history state without prop drilling.
 * This context maintains a list of chat messages and provides a function to update this list, enabling real-time communication features across the platform.
 *
 * The context's state includes:
 * - chatHistory: An array of MessageProps objects, representing individual chat messages with associated metadata.
 * - updateChatHistory: A function that updates the chatHistory state with a new array of MessageProps, facilitating the dynamic addition of new messages to the chat.
 *
 * ChatProvider wraps the application's component tree, making the chat context available to all child components.
 * This design pattern enhances the application's scalability and maintainability by centralizing chat state management.
 *
 * The useChat custom hook abstracts the useContext hook for consuming the ChatContext, providing a convenient and safe way to access the context's value.
 * It ensures that the hook is used within a component tree that has ChatProvider at a higher level, throwing an error if the context is accessed outside of a ChatProvider.
 *
 * Props:
 * - children: The child components of the ChatProvider, which will have access to the ChatContext.
 *
 * This setup is instrumental in building a feature-rich, real-time chat application by efficiently managing chat history state and facilitating communication between components.
 *
 * @param {ReactNode} children The child components that the ChatProvider will wrap, granting them access to the chat context.
 * @returns {JSX.Element} The ChatProvider component that provides chat context to its child components.
 */
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

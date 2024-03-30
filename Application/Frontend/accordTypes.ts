export interface FriendsTabProps {
  senderUsername: string;
  senderID: string;
  privateChat: boolean;
  onMessageExchange: () => void;
}

export interface IconProps {
  color: string;
}

export interface ChatProps extends FriendsTabProps {
  receiverUsername: string;
  receiverID: string;
  onMessageExchange: () => void; // Function type that doesn't take arguments and returns void
}

export interface MessageProps {
  username: string,
  message: string,
  firstMessage?: boolean,
  date?: string
}

export interface MessageProps {
  username: string,
  message: string,
  firstMessage?: boolean,
  date?: string,
  connectionId?: string,
  data?: string,
}

export interface MessagingInterfaceProps {
  sender: string;
  receiver: string;
  senderID: string;
  receiverID: string;
  privateChat: boolean;
  onMessageExchange: () => void; // Include in the props of MessagingInterface
}
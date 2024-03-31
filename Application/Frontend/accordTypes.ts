export interface FetchStatusProps {
  lastFetched: number | null;
  setLastFetched: (value: number | null) => void;
}

export interface MessageProps {
  username: string;
  message: string;
  firstMessage?: boolean;
  date: string;
  connectionId?: string; // This only exists when we receive a message, not when we send one, hence it is optional
  userProfileURL: string;
}

export interface NewFriendModalProps {
  senderID: string;
}

export interface FriendsTabProps extends FetchStatusProps, NewFriendModalProps {
  senderUsername: string;
  privateChat: boolean;
  onMessageExchange: () => void;
}

export interface GeneralChatProps {
  receiverIDs: string[];
  onMessageExchange: () => void;
}

export interface ChatProps extends FriendsTabProps {
  receiverIDs: string[];
}

export interface IconProps {
  color: string;
}

export interface NewChatModalProps extends NewFriendModalProps {
  onCreateChat: (recipients: string[]) => void;
}
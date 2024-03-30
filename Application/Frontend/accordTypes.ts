export interface FetchStatusProps {
  lastFetched: number | null;
  setLastFetched: (value: number | null) => void;
}

export interface MessageProps {
  username: string;
  message: string;
  firstMessage?: boolean;
  date?: string;
  connectionId?: string;
  data?: string;
}

export interface FriendsTabProps extends FetchStatusProps {
  senderUsername: string;
  senderID: string;
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

export interface NewChatModalProps {
  onCreateChat: (recipients: string[]) => void;
}

export interface NewFriendModalProps {
  onAddFriend: (friendUsername: string) => void;
}
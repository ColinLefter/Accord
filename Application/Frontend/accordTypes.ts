export interface FetchStatusProps {
  lastFetched: number | null;
  setLastFetched: (value: number | null) => void;
}

export interface MessageProps {
  myMessage: boolean; // This is a boolean flag that is acts as a calculated field.
  username: string;
  message: string;
  firstMessage?: boolean;
  date: string;
  connectionID?: string; // This only exists when we receive a message, not when we send one, hence it is optional
  userProfileURL: string;
  onDeleteMessage: (id: string) => void
}

export interface DisplayedMessageProps extends MessageProps, PrivacySettingsProps {
  id: string; // ABSOLUTELY CRITICAL: The reason this is an OPTIONAL paramter is because we only have the ID when we receive a message, not when we send one
  clientID: string;
}

export interface MessageDropdownProps extends PrivacySettingsProps {
  myMessage: boolean;
  onDelete: () => void;
}

export interface NewFriendModalProps extends FetchStatusProps {
  senderID: string;
}

export interface FriendsTabProps extends FetchStatusProps, NewFriendModalProps, PrivacySettingsProps {
  senderUsername: string;
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

// The client Id is from Ably and it is associated with each stream rather than the current user who is logged in.
// This means that we can't obtain the clientID elsewhere as we would have to open a duplicate message stream which CANNOT be done.
// Therefore, the soliution is to treat myMessage as a calculated field, which is why it is a boolean flag.
// It takes some high-level system design to come to this realisation, but it is a very elegant solution.
export interface PrivacySettingsProps {
  privateChat: boolean;
  onMessageExchange: () => void;
}
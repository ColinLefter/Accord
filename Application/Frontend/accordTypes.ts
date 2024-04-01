import { privateDecrypt } from "crypto";

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
  onDeleteMessage: (id: string) => void
}

export interface DisplayedMessageProps extends MessageProps, PrivacySettingsProps {
  id: string; // ABSOLUTELY CRITICAL: The reason this is an OPTIONAL paramter is because we only have the ID when we receive a message, not when we send one
}

export interface MessageDropdownProps extends PrivacySettingsProps {
  onDelete: () => void;
}

export interface NewFriendModalProps extends FetchStatusProps {
  senderID: string;
}

export interface FriendsTabProps extends FetchStatusProps, NewFriendModalProps, PrivacySettingsProps {
  senderUsername: string;
}

export interface GeneralChatProps extends PrivacySettingsProps {
  receiverIDs: string[];
}

export interface ChatProps extends FriendsTabProps, PrivacySettingsProps {
  receiverIDs: string[];
}

export interface IconProps {
  color: string;
}

export interface NewChatModalProps extends NewFriendModalProps {
  onCreateChat: (recipients: string[]) => void;
}

export interface PrivacySettingsProps {
  privateChat: boolean;
  onMessageExchange: () => void;
}
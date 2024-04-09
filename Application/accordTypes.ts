export interface FetchStatusProps {
  lastFetched: number | null;
  setLastFetched: (value: number | null) => void;
}

export interface MessageProps {
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
  clientID: string;
  onDelete: () => void;
}

export interface NewFriendModalProps extends FetchStatusProps {
  senderID: string;
}

export interface RelinquishAdminModalProps extends FetchStatusProps {
  senderID: string;
  currentChannelKey: string;
}

export interface FriendsTabProps extends NewFriendModalProps, PrivacySettingsProps {
  senderUsername: string;
}

export interface ChatProps extends FriendsTabProps {
  receiverIDs: string[];
  channelKey?: string;
  channelName?: string; // Adding channelName as optional
  captureHistory: boolean; // Renamed and now required
}

export interface IconProps {
  color: string;
}

export interface NewChatModalProps extends NewFriendModalProps {
  onCreateChat: (selectedFriendIDs: string[], selectedAdminIDs: string[]) => void;
}

export interface PrivacySettingsProps {
  captureHistory: boolean; // Renamed from privateChat
  onMessageExchange: () => void;
}

export interface FriendsLoadingProps {
  numFriends: number;
}

export interface LogoProps {
  size?: string;
  fw?: number;
}

export interface DotsProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
  radius?: number;
}

export interface TextChannelItemProps {
  id: string;
  index: number;
  channelName: string;
  numberOfMembers: number;
  captureHistory: boolean;
  onClick: (id: string) => void;
}

export interface TextChannel {
  channelKey: string;
  channelName: string;
  memberIDs: string[];
  captureHistory: boolean; // Ensure this field is included
}

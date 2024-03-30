export interface FetchStatusProps {
  lastFetched: number | null;
  setLastFetched: (value: number | null) => void;
}

export interface FriendsTabProps extends FetchStatusProps {
  sender: string;
  senderID: string;
  privateChat: boolean;
  onMessageExchange: () => void;
}
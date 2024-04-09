import { createHash } from 'crypto';

export const generateChannelKey = (channelName: string | null, memberIDs: string[]) => {
  // Ensure memberIDs are sorted to maintain consistency
  memberIDs.sort(); 
  // Create the rawChannelKey string, including the channel name if provided
  const rawChannelKey = channelName ? `text-channel:${channelName}:${memberIDs.join(",")}` : `direct-message:${memberIDs.join(",")}`;
  // Generate and return the SHA-256 hash of the rawChannelKey
  return createHash('sha256').update(rawChannelKey).digest('hex');
};

export const formatDate = (date: Date) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const day = date.getDate();
  const daySuffix = suffixes[(day % 10) - 1] || suffixes[0];
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  
  return `${day}${daySuffix} ${month} ${year}`;
};

export const getSystemsChannelID = () => {
  return "accord-systems";
}

export function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
}

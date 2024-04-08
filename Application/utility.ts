import { createHash } from 'crypto';

export const generateHash = (memberIDs: string[]) => { // Member IDs must include the sender ID as well
  memberIDs.sort(); // CRITICAL: Sorts in-place. We need to sort the key to counteract the swapping mechanism where sender and receiver becomes flipped.
  const rawChannelKey = `chat:${memberIDs.join(",")}`;
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
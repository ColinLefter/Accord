import { createHash } from 'crypto';

export const generateHash = (memberIDs: string[]) => { // Member IDs must include the sender ID as well
  memberIDs.sort(); // CRITICAL: Sorts in-place. We need to sort the key to counteract the swapping mechanism where sender and receiver becomes flipped.
  const rawChannelKey = `chat:${memberIDs.join(",")}`;
  return createHash('sha256').update(rawChannelKey).digest('hex');
};
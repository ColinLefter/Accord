import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { FetchStatusProps } from '@/accordTypes';

export function useFriendList({ lastFetched, setLastFetched }: FetchStatusProps) {
  const [IDs, setIDs] = useState<string[]>([]);
  const [usernames, setusernames] = useState<string[]>([]);
  const { user } = useUser();

  const CACHE_DURATION = 60 * 1000; // Establishing a 1-minute cache duration
  useEffect(() => {
    if (user && (lastFetched === null || Date.now() - lastFetched >= CACHE_DURATION)) {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/get-ids-of-friends', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: user.id })
          });

          if (response.ok) {
            const data = await response.json();
            setIDs(data.friendList);
            setLastFetched(Date.now()); // Updating the last fetched time
          } else {
            console.error('Failed to fetch friend list');
          }
        } catch (error) {
          console.error('Error fetching friend list:', error);
        }
      };

      fetchData();
    }
  }, [user, lastFetched]); // Now this effect depends on when  the data was last fetched as well

  useEffect(() => {
    if (IDs.length > 0) {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/get-usernames-of-friends', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ IDs }),
          });

          if (response.ok) {
            const data = await response.json();
            setusernames(data);
            // No need to update lastFetched here as it's already set in the previous useEffect
          } else {
            console.error('Failed to fetch friend usernames');
          }
        } catch (error) {
          console.error('Error fetching friend usernames:', error);
        }
      };

      fetchData();
    }
  }, [IDs]); // Removed lastFetched from dependency array to prevent re-fetching due to its update

  // We need to return both the usernames and the IDs
  // The usernames are required for display purposes such as in displaying the list of friends that user has
  // However, the IDs need to be used to maintain text channels because if a user changes their username, all channels will be lost
  // IDs are persistent across all changes and are guaranteed to be both unique and unchanged as they are assigned by our authentication provider
  const friends = {
    usernames: usernames,
    IDs: IDs,
  }

  return friends;
}
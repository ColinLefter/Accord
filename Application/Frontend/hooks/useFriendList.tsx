import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { FetchStatusProps } from '@/types/accordTypes';

export function useFriendList({ lastFetched, setLastFetched }: FetchStatusProps) {
  const [friendIDList, setfriendIDList] = useState<string[]>([]);
  const [friendUsernames, setFriendUsernames] = useState<string[]>([]);
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
            setfriendIDList(data.friendList);
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
    if (friendIDList.length > 0) {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/get-usernames-of-friends', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ friendIDList }),
          });

          if (response.ok) {
            const data = await response.json();
            setFriendUsernames(data);
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
  }, [friendIDList]); // Removed lastFetched from dependency array to prevent re-fetching due to its update

  return friendUsernames;
}
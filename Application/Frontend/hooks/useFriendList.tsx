import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { FetchStatusProps } from '@/accordTypes';

export function useFriendList({ lastFetched, setLastFetched }: FetchStatusProps) {
  // If we never update the IDs or usernames, we still get an array, just that it's empty, so no errors will be thrown.
  const [friends, setFriends] = useState<{ username: string; id: string; }[]>([]);
  const [IDs, setIDs] = useState<string[]>([]);
  const { user } = useUser();

  const CACHE_DURATION = 5 * 1000; // Establishing a 5-second cache duration

  // Fetch IDs of friends
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
            setIDs(data.friendList); // friendList is now an array if user IDs
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
  }, [user, lastFetched]); // Dependencies listed here are correct
  
  // Fetch usernames using IDs
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
            const usernames = await response.json();
            // Map IDs to usernames to form the friends array
            const updatedFriends = IDs.map((id, index) => ({
              id,
              username: usernames[index], // Assuming the order of usernames matches the order of IDs
            }));
            setFriends(updatedFriends);
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

  // Return both the usernames and the IDs
  return { list: friends };
}
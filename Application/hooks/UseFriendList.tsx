import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { FetchStatusProps } from '@/accordTypes';

/**
 * Provides a custom hook, `useFriendList`, to fetch and manage a user's friend list within a React component.
 * This hook leverages the user's ID to first fetch their friends' IDs and then their corresponding usernames,
 * encapsulating the process into a streamlined state management flow. 
 * The hook utilizes the Clerk library for user authentication and access to the user context.

 * IMPORTANT: To avoid potential infinite loops, especially when utilizing state updates that could trigger re-renders or re-fetches,
this implementation specifically omits `setLastFetched` from its parameters, focusing solely on the use of `lastFetched`
to control fetch operations based on cache duration logic.

 * The hook is designed with efficiency and practicality in mind, fetching the friends' IDs and usernames in sequence
and ensuring data freshness through controlled fetches, driven by the `lastFetched` timestamp. By doing so, it supports a dynamic
and responsive friend list feature in applications, enhancing the social interactivity component.

 * Usage:
 * This hook can be utilized in components that require displaying a user's friend list, offering real-time updates and seamless
 * integration with the application's overall user experience. The returned `list` from the hook provides an array of friend objects,
 * each containing a username and ID, ready to be rendered in the UI.

 * Note:
 * The hook relies on specific API endpoints (`/api/get-ids-of-friends` and `/api/get-usernames-of-friends`) to fetch the necessary data.
 * These endpoints must be appropriately implemented and secured on the server side to ensure correct functionality and data integrity.

 * @param {FetchStatusProps} lastFetched - An object containing a `lastFetched` timestamp to manage caching and re-fetch logic.
 * @returns {Object} An object containing a `list` array of friends, each friend being an object with `username` and `id` properties.
 */
export function useFriendList({ lastFetched }: FetchStatusProps) {
  // If we never update the IDs or usernames, we still get an array, just that it's empty, so no errors will be thrown.
  // CRITICAL: Notice how we are not including setLastFetched as part of the props here. If you use it here, you get an INFINITE LOOP. BE WARNED.
  const [friends, setFriends] = useState<{ username: string; id: string; }[]>([]);
  const [IDs, setIDs] = useState<string[]>([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  // Fetch IDs of friends
  useEffect(() => {
    if (user) {
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
            setIDs(data.friendList); // If IDs are fetched
            if(data.friendList.length === 0) setLoading(false); // If no IDs, then we're not loading anymore
        } else {
            console.error('Failed to fetch friend list');
            setLoading(false); // If the fetch fails, we're not loading anymore
        }
        } catch (error) {
          console.error('Error fetching friend list:', error);
        }
      };

      fetchData();
    }
  }, [user, lastFetched]);

  useEffect(() => {
    if (user && IDs.length > 0) {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/get-id-username-pairs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ friendList: IDs }),
          });
  
          if (response.ok) {
            const data = await response.json(); 
            setFriends(data); // After setting friends based on usernames
            setLoading(false); // Data has been fetched and set, loading is complete
        } else {
            console.error('Failed to fetch friend usernames');
            setLoading(false); // If the fetch fails, we're not loading anymore
        }
        } catch (error) {
          console.error('Error fetching friend usernames:', error);
        }
      };
  
      fetchData();
    }
  }, [user, IDs]); // Adding 'IDs' as a dependency ensures this runs when IDs are fetched/updated

  // Return both the usernames and the IDs
  return { list: friends, isLoading: loading };
}
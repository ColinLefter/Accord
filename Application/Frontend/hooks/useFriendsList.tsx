// hooks/useFriendsList.js
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

export function useFriendsList() {
  const [friendsList, setFriendsList] = useState<string[]>([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/get-friends', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: user.id })
          });

          if (response.ok) {
            const data = await response.json();
            setFriendsList(data.friendsList);
          } else {
            console.error('Failed to fetch friend list');
          }
        } catch (error) {
          console.error('Error fetching friend list:', error);
        }
      };

      fetchData();
    }
  }, [user]);

  return friendsList;
}

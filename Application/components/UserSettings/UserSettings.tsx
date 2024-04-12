import { FormEvent, useEffect, useState } from "react";
import { useUser } from '@clerk/nextjs';

export function UserSetting() {
  const { user } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user && user.username) { // Ensure user and user.username are not null
      const fetchUserData = async () => {
        try {
          const response = await fetch('/api/userSettings', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'username': user.username as string, // TypeScript now understands this cannot be null (Clerk does not allow null usernames)
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUserData(data);
          } else {
            console.error('Failed to fetch user settings:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching user settings:', error);
        }
      };

      fetchUserData();
    }
  }, [user]); // Depend on user
}
import { Avatar, Group, Card, Tooltip, Text, Stack, ActionIcon } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { AppLink } from  "@/components/AppLink";
import { useRouter } from 'next/router';
import { useUser, UserButton, UserProfile } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import InboxDropdown from '@/components/FriendsColumn/FriendRequestManager';
/**
 * FooterProfile renders a user profile component typically used in the footer area of the application.
 * It displays an avatar that links to the user's profile and provides a quick navigation option to view
 * the profile. Additionally, it features a settings action icon, allowing users to access and modify
 * their settings easily.
 *
 * The component is structured using the Card and Group components from Mantine to arrange content
 * horizontally with space between elements. The Avatar is made clickable via the AppLink component,
 * enhancing user interaction and connectivity within the application. The Tooltip components are used
 * to provide additional context for the avatar and settings icon, improving the overall user experience.
 *
 * @returns The JSX element representing a user profile section with quick access links to the user's profile
 * and settings, encapsulated within a card layout for distinct visual separation.
 */
export function FooterProfile() {
  const [userID, setUserID] = useState<string>(''); // Initialize with empty string
  const { user } = useUser();

  useEffect(() => {
    if (user && user.username && user.id) {
      // Set sender to user's username if user exists and username is not null/undefined
      setUserID(user.id);
    }
  }, [user]); // Dependency array ensures this runs whenever `user` changes

  return (
    <Card>
      <Group justify="space-between">
        <Group>
          <UserButton/>
          <Text>{user?.username}</Text>
        </Group>
        {user && user.id && <InboxDropdown userId={user.id} />}
      </Group>
    </Card>
  );
}
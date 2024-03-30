import React from 'react';
import { Avatar, Group, Text, TextInput, TextInputProps, ActionIcon, useMantineTheme, Stack, Paper  } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import { Chat } from '@/components/Messaging/Chat';
import { useFriendList } from '@/hooks/useFriendList';
import { FriendsTabProps } from '@/accordTypes';
/**
 * FriendsTab provides a dedicated section within the application for displaying and interacting with
 * the user's friends list. It features a search bar allowing users to filter or search through their
 * list of friends quickly. Below the search bar, it enumerates the user's friends, showcasing a
 * hardcoded list for now, with the intention to integrate dynamic friend retrieval in the future.
 *
 * Each friend is displayed within its own paper component to emphasize separation and enhance
 * visual appeal. The component utilizes a Stack layout to organize its child components vertically
 * and maintain a structured and consistent spacing between them.
 *
 * @param {TextInputProps} props - Props inherited from TextInputProps to be passed to the search bar,
 * allowing for customization and functionality extension of the TextInput component within the FriendsTab.
 * 
 * @returns The JSX element representing the friends tab section, including a search bar and a list of friends.
 */

// Function to call to go back to the last previous URL
function goBack() {
window.history.back();
}

export function FriendsTab({senderUsername, senderID, privateChat, onMessageExchange}: FriendsTabProps) {
    const { user } = useUser();
    const router = useRouter();
    const [lastFetched, setLastFetched] = useState<number | null>(null);
    const friends = useFriendList({lastFetched, setLastFetched});
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [receiverUsername, setreceiverUsername] = useState<string>('');
    const [receiverID, setreceiverID] = useState<string>('');
    
      /**
       * Handles form submission, sending the login request to the server and processing
       * the response to either proceed to the application or show error messages.
       *
       * @param event - The form submission event
       */
  
      /**
       * Updates form data state on user input.
       *
       * @param evt - The input change event
       */
    const filteredfriendList = friends.usernames.filter((friendUsername: string) =>
      friendUsername.toLowerCase().includes(searchQuery.toLowerCase()) // This means that the search is case-insensitive
    );

    const handleFriendClick = (friendUsername: string) => {
      setreceiverUsername(friendUsername);
    };

    if (receiverUsername && user?.id) { // Ensure both receiverUsername and user.id are defined
      return (
        <Chat
          senderID={senderID}
          senderUsername={senderUsername}
          receiverIDs={[receiverUsername]} // The Chat component will always expect an array of IDs, even if it's just one
          privateChat={privateChat}
          lastFetched={lastFetched}
          setLastFetched={setLastFetched}
          onMessageExchange={onMessageExchange}  // Pass the handler to detect message exchanges
        />
      );
  }
    
      return (
        <Stack>
            {/** Search Box*/}
            <TextInput
                style={{ width: '100%' }}
                radius="xl"
                size="md"
                placeholder="Search..."
                leftSection={<IconSearch color="orange" stroke={1.5} />}
                rightSection={
                    <ActionIcon radius="xl" variant="filled">
                        <IconArrowRight stroke={1.5} />
                    </ActionIcon>
                }
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.currentTarget.value)}
            />
        
            {/** "All friends" text*/}
            <Text
                fw={500}
                className="text-xl"
                component="span"
                size="xl" 
            >
                All friends
            </Text>
            {/** Users that are in the friendList*/}
            {filteredfriendList.map((friendUsername: string, index: number) => (
                <Paper color="black" shadow="xs" p="xs" radius="md" key={`friend-${index}`} onClick={() => handleFriendClick(friendUsername)}>
                    <Group py="10">
                        <Avatar alt={`Friend ${index + 1}`} radius="xl"/>
                        <Text size="sm">{friendUsername}</Text>
                    </Group>
                </Paper>
            ))}
        </Stack>
    );
}
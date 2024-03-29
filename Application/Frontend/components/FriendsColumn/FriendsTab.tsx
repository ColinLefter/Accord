import React from 'react';
import { Avatar, Group, Text, TextInput, TextInputProps, ActionIcon, useMantineTheme, Stack, Paper  } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import { Chat } from '@/components/Messaging/Chat';
import { useFriendsList } from '@/hooks/useFriendsList';

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

interface FriendsTabProps {
  sender: string;
  privateChat: boolean;
  onMessageExchange: () => void; // Function type that doesn't take arguments and returns void
}

export function FriendsTab({sender, privateChat, onMessageExchange}: FriendsTabProps) {
    const { user } = useUser();
    const router = useRouter();
    const friendsList = useFriendsList();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [activeChat, setActiveChat] = useState<string>(''); // State to manage active chat
    
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
    const filteredFriendsList = friendsList.filter((friendUsername) =>
      friendUsername.toLowerCase().includes(searchQuery.toLowerCase()) // This means that the search is case-insensitive
    );

    const handleFriendClick = (friendUsername: string) => {
      setActiveChat(friendUsername);
    };

    if (activeChat && user?.id) { // Ensure both activeChat and user.id are defined
      return <Chat 
          sender={sender}
          receiver={activeChat} // The receiver is now the friend we clicked on.
          privateChat={privateChat}
          onMessageExchange={onMessageExchange}
      />;
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
            {/** Users that are in the friendsList*/}
            {filteredFriendsList.map((friendUsername, index) => (
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
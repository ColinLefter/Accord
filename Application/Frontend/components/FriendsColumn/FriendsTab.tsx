import React from 'react';
import { Avatar, Group, Text, TextInput, TextInputProps, ActionIcon, useMantineTheme, Stack, Paper  } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import { Chat } from '@/components/Messaging/Chat';

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

export function FriendsTab(props: TextInputProps) {
    const router = useRouter();
    const [friendsList, setFriendsList] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [activeChat, setActiveChat] = useState(null); // State to manage active chat
    const { user } = useUser();
    
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
      useEffect(() => {
        if (user) { // IMPORTANT: There is a slight delay in the user object being available after login, so we need to wait for it to not be null
          console.log(user.id);
          const fetchData = async () => {
            try {
              const response = await fetch('/api/FriendsTab', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: user.id }), // Directly use user.username
              });
    
              if (response.ok) {
                const data = await response.json();
                console.log("My friends" + data.firstName);
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
      }, [user]); // Dependency array includes user, so effect runs when user changes

          // Filter friendsList based on search query
    const filteredFriendsList = friendsList.filter((friend) =>
      friend.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleFriendClick = (friend: any) => {
      // Assuming 'friend' can be used as 'receiver' in Chat
      setActiveChat(friend);
    };

    if (activeChat && user?.id) { // Ensure both activeChat and user.id are defined
      return <Chat 
          sender={user.id}
          receiver={activeChat} // The receiver is now the friend we clicked on
          privateChat={true}
          onMessageExchange={() => {}}
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
            {filteredFriendsList.map((friend, index) => (
                <Paper color="black" shadow="xs" p="xs" radius="md" key={`friend-${index}`} onClick={() => handleFriendClick(friend)}>
                    <Group py="10">
                        <Avatar alt={`Friend ${index + 1}`} radius="xl"/>
                        <Text size="sm">{friend}</Text>
                    </Group>
                </Paper>
            ))}
        </Stack>
    );
}
import React from 'react';
import { Avatar, Group, Text, TextInput, TextInputProps, ActionIcon, useMantineTheme, Stack, Paper  } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';

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
    const router = useRouter(); // To handle page redirection after the user logs in
    const [friendList, setFriendList] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>(''); // for search box
    const { user } = useUser();

    // State hooks for form data and validation errors
    const [formData, setFormData] = useState<{userName: string | null | undefined}>({
        userName: user?.username,
      });
    
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
          const fetchData = async () => {
            try {
              const response = await fetch('/api/FriendsTab', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName: user.username }), // Directly use user.username
              });
    
              if (response.ok) {
                const data = await response.json();
                setFriendList(data.friendList);
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

          // Filter friendList based on search query
    const filteredFriendList = friendList.filter((friend) =>
      friend.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
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
            {/** Users that are in the friendlist*/}
            {
                filteredFriendList.map((friend, index) => (
                    <Paper color="black" shadow="xs" p="xs" radius="md" key={`friend-${index}`}>
                        <Group py="10" >
                            <Avatar
                                alt={`Friend ${index + 1}`}
                                radius="xl"
                            />
                            <Text size="sm">{friend}</Text>
                        </Group>
                    </Paper>
                ))
            }
        </Stack>
    );
}
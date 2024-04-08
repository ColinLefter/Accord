import React from 'react';
import {
    Avatar,
    Group,
    Text,
    TextInput,
    TextInputProps,
    ActionIcon,
    useMantineTheme,
    Stack,
    Paper,
    Center
} from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import { Chat } from '@/components/Messaging/Chat';
import { useFriendList } from '@/hooks/useFriendList';
import { FriendsTabProps } from '@/accordTypes';
import { FriendsLoading } from '@/components/FriendsColumn/FriendsLoading';
import { useChannel } from "ably/react";
import { getSystemsChannelID} from "@/utility";

// Function to call to go back to the last previous URL
function goBack() {
    window.history.back();
}

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
export function FriendsTab({senderUsername, senderID, privateChat, onMessageExchange, lastFetched, setLastFetched }: FriendsTabProps) {
    const { user } = useUser();
    const router = useRouter();
    const { list: friends, isLoading } = useFriendList({lastFetched, setLastFetched});
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [receiverUsername, setreceiverUsername] = useState<string>('');
    const [receiverID, setReceiverID] = useState<string>('');

    const { channel } = useChannel(getSystemsChannelID(), (message) => {
        if (message.name === "friend-request-accepted") {
          const [senderId, receiverId] = message.data.split("-");
          if (senderId === senderID || receiverId === senderID) {
            // If the current user is involved in the friend request, refresh the friend list
            console.log("Friend request accepted, refreshing friend list.");
            setLastFetched(Date.now());
          }
        }
    });

    const theme = useMantineTheme();
    
    const filteredFriendList = friends.filter((friend) =>
      friend.username.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by username
    );

    const handleFriendClick = (friendUsername: string, friendID: string) => {
      setreceiverUsername(friendUsername);
      setReceiverID(friendID);
    };

    if (receiverUsername && user?.id) { // Ensure both receiverUsername and user.id are defined
      return (
        <Chat // Since this is the FriendsTab component, we will only every have one friend ID in receiverIDs as clicking on a friend starts a DM with just that friend.
          senderID={senderID}
          senderUsername={senderUsername}
          receiverIDs={[receiverID]} // The Chat component will always expect an array of IDs, even if it's just one. This is to allow for group chats.
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
                    <ActionIcon radius="xl" variant="gradient">
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
            {isLoading ? (
                <FriendsLoading numFriends={4} /> // This part renders if the data is still being fetched
            ) : (
                filteredFriendList.length === 0 ? ( // This part renders once the data has been fetched
                    <Paper shadow="xs" p="xl">
                        <Center style={{ height: '100%' }}>
                            <Text fw={400} size="xl" component="span">
                                Welcome to{' '}
                                <Text
                                    variant="gradient"
                                    fw={800}
                                    size="xl"
                                    component="span"
                                    gradient={{ from: "pink", to: "yellow" }}
                                    style={{ display: 'inline' }}
                                >
                                    Accord!
                                </Text>
                                {' '}Add some friends to get started!
                            </Text>
                        </Center>
                    </Paper>
                ) : (
                    filteredFriendList.map((friend, index) => (
                        <Paper shadow="xs" p="xs" radius="md" key={`friend-${index}`} onClick={() => handleFriendClick(friend.username, friend.id)}>
                            <Group py="10">
                                <Avatar alt={`Friend ${friend.username}`} radius="xl"/>
                                <Text size="sm">{friend.username}</Text>
                            </Group>
                        </Paper>
                    ))
                )
            )}
        </Stack>
    );
}
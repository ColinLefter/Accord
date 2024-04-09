import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Tooltip, ActionIcon, Text, Stack, Button, TextInput, useMantineTheme } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { NewFriendModalProps } from '@/accordTypes';
import { notifications, showNotification } from '@mantine/notifications';
import { useUser } from '@clerk/nextjs';
import { IconUserPlus } from '@tabler/icons-react';

export function AddFriendModal({ senderID, setLastFetched }: NewFriendModalProps) {
  const { user } = useUser();

  const [opened, { open, close }] = useDisclosure(false);
  const [myUsername, setMyUsername] = useState<string>('');
  const [friendUsername, setFriendUsername] = useState('');
  const [searchResult, setSearchResult] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const theme = useMantineTheme();

  useEffect(() => {
    if (user && user.username) {
      setMyUsername(user.username);
    }
  }, [user]);

    /**
   * Handles the logic for sending a friend request based on the entered username. It performs a POST
   * request to the server with the sender's ID and the friend's username. Upon a successful request,
   * it resets the input field for further requests and triggers a re-fetch of the friend list by updating
   * the `lastFetched` state. If the request fails or if no username is entered, it sets an appropriate
   * error message.
   */
    const handleAddFriendClick = async () => {
      if (!friendUsername.trim()) {
        setErrorMessage('Please enter a username to add a friend.');
        return;
      } else if (friendUsername === myUsername) {
        setErrorMessage('You cannot add yourself as a friend.');
        return;
      }
    
      try {
        const response = await fetch('/api/add-friend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ senderID, friendUsername }),
        });
    
        if (response.ok) {
          notifications.show({
            title: 'Friend request sent!',
            message: `@${friendUsername}`,
          });
          setFriendUsername(''); // Clear the input for further requests
          setErrorMessage(''); // Clear any existing error messages
          setLastFetched(Date.now()); // Update to trigger a refresh
          close(); // Close the modal
        } else {
          // Handle non-OK responses, including custom error messages
          const data = await response.json(); // Parse the error message
          setErrorMessage(data.error || 'Failed to send friend request.');
        }
      } catch (error) {
        console.error('Error adding friend:', error);
        setErrorMessage('An error occurred while sending the friend request.');
      }
    };
        
  return (
    <>
      <Button
        fullWidth
        onClick={open}
        variant="gradient"
        leftSection={<IconUserPlus size={16} color="white" />}
      >
        Add friend
      </Button>

      <Modal
        centered
        opened={opened}
        onClose={() => {
          close();
          setFriendUsername('');
        }}
        title={
          <Stack gap="0">
            <Text
              variant="gradient"
              fw={500}
              size="xl"
              component="span"
            >
              Add a Friend
            </Text>
            <Text c={theme.colors.dark[1]}>Send a friend request by username</Text>
          </Stack>
        }
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Stack>
          <TextInput
            error={errorMessage}
            placeholder="accordUser1"
            value={friendUsername}
            onChange={(event) => setFriendUsername(event.currentTarget.value)}
          />
          <Button
            fullWidth
            variant="gradient"
            onClick={handleAddFriendClick}
          >
            Add Friend
          </Button>
        </Stack>
      </Modal>
    </>
  );
}

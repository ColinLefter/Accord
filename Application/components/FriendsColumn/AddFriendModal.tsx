import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Tooltip, ActionIcon, Text, Stack, Button, TextInput, useMantineTheme } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { NewFriendModalProps } from '@/accordTypes';
import { notifications, showNotification } from '@mantine/notifications';

export function AddFriendModal({ senderID, setLastFetched }: NewFriendModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [friendUsername, setFriendUsername] = useState('');
  const [searchResult, setSearchResult] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const theme = useMantineTheme();

    /**
   * Handles the logic for sending a friend request based on the entered username. It performs a POST
   * request to the server with the sender's ID and the friend's username. Upon a successful request,
   * it resets the input field for further requests and triggers a re-fetch of the friend list by updating
   * the `lastFetched` state. If the request fails or if no username is entered, it sets an appropriate
   * error message.
   */
  const handleAddFriendClick = async () => {
    if (friendUsername.trim()) {
      try {
        const response = await fetch('/api/add-friend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ senderID, friendUsername }),
        });

        setSearchResult(response.status);

        if (response.ok) {
          notifications.show({
            title: 'Friend request sent!',
            message: `@${friendUsername}`,
          });
          setFriendUsername(''); // Clear the input field to allow for further friend requests
        } else {
          console.error('Failed to add friend');
          // Use Mantine's showNotification for error message
          showNotification({
            title: 'Error',
            message: 'Failed to send friend request.',
            color: 'red',
          });
        }
      } catch (error) {
        console.error('Error adding friend:', error);
        // Use Mantine's showNotification for network or server errors
        showNotification({
          title: 'Error',
          message: 'An error occurred while sending the friend request.',
          color: 'red',
        });
      }
    } else {
      setErrorMessage('Please enter a username to add a friend.');
    }
  };

  useEffect(() => {
    switch (searchResult) {
      case 404:
        setErrorMessage('This username does not exist.');
        break;
      default:
        if (searchResult !== null) {
          setErrorMessage('');
          setLastFetched(Date.now());
          close();
        }
        break;
    }
  }, [searchResult, setLastFetched, close]);

  return (
    <>
      <Button
        fullWidth
        onClick={open}
        variant="gradient"
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
            onClick={handleAddFriendClick} // Fix to use correct handler
          >
            Add Friend
          </Button>
        </Stack>
      </Modal>
    </>
  );
}

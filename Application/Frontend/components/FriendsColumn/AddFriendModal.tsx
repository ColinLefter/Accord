import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Text, Stack, Button, TextInput } from '@mantine/core';
import { NewFriendModalProps } from '@/accordTypes'; // Make sure this path is correct for your project

export function AddFriendModal({ senderID, setLastFetched }: NewFriendModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [friendUsername, setFriendUsername] = useState('');
  const [searchResult, setSearchResult] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

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
          setFriendUsername('');
          // Update to handle success without showNotification
          setErrorMessage('Friend request sent successfully.');
        } else {
          console.error('Failed to add friend');
          // Update to handle error without showNotification
          setErrorMessage('Failed to send friend request.');
        }
      } catch (error) {
        console.error('Error adding friend:', error);
        // Update to handle error without showNotification
        setErrorMessage('An error occurred while sending the friend request.');
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
      <Button fullWidth color="black" onClick={open}>
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
            <Text variant="gradient" fw={500} size="xl" component="span" gradient={{ from: "pink", to: "yellow" }}>
              Add a Friend
            </Text>
            <Text c="dimmed">Send a friend request by username</Text>
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
            label="Search your friend by username"
            placeholder="accordUser1"
            value={friendUsername}
            onChange={(event) => setFriendUsername(event.currentTarget.value)}
          />
          <Button
            fullWidth
            variant="gradient"
            gradient={{ from: "pink", to: "yellow" }}
            onClick={handleAddFriendClick}
          >
            Add Friend
          </Button>
        </Stack>
      </Modal>
    </>
  );
}

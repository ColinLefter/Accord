import { useDisclosure } from '@mantine/hooks';
import { Modal, Tooltip, ActionIcon, Text, Stack, Button, TextInput } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import { NewFriendModalProps } from '@/accordTypes';

export function AddFriendModal({ senderID }: NewFriendModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [friendUsername, setFriendUsername] = useState(''); // Track the username input for adding a friend

  const handleAddFriendClick = async () => {
    close(); // Close the modal. Done here so that it is instant.
    if (friendUsername) {
      console.log(`Adding friend: ${friendUsername}`);
      try {
        const response = await fetch('/api/add-friend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ senderID: senderID, friendUsername: friendUsername }),
        });
    
        if (response.ok) {
          console.log(senderID);
          console.log(friendUsername);
          const data = await response.json();
          console.log(data.message); // Log the success message
          setFriendUsername(''); // Clear the input field to allow for further friend requests
        } else {
          console.error('Failed to add friend');
        }
      } catch (error) {
        console.error('Error adding friend:', error);
      }
    }
  };

  return (
    <>
      <Button
        fullWidth
        color="black"
        onClick={open}
      >
        Add Friend
      </Button>

      <Modal
        centered
        opened={opened}
        onClose={() => {
          close();
          setFriendUsername(''); // Reset the input field on close as well
        }}
        title={
          <Stack gap="0">
            <Text
              variant="gradient"
              fw={500}
              size="xl"
              component="span"
              gradient={{ from: "pink", to: "yellow" }}
            >
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
            label="Search your friend by username"
            placeholder="accordUser1"
            value={friendUsername}
            onChange={(event) => setFriendUsername(event.currentTarget.value)}
          />
          <Button
            fullWidth
            variant="gradient"
            gradient={{ from: "pink", to: "yellow" }}
            onClick={handleAddFriendClick} // Fix to use correct handler
          >
            Add Friend
          </Button>
        </Stack>
      </Modal>
    </>
  );
}

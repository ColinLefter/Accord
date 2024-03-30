import { useDisclosure } from '@mantine/hooks';
import { Modal, Tooltip, ActionIcon, Text, Stack, Button, TextInput } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import { NewFriendModalProps } from '@/accordTypes';

export function AddFriend({ onAddFriend }: NewFriendModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [friendUsername, setFriendUsername] = useState(''); // Track the username input for adding a friend

  const handleAddFriendClick = () => {
    if (friendUsername) {
      onAddFriend(friendUsername);
      close(); // Close the modal after adding the friend
      setFriendUsername(''); // Reset the input field
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

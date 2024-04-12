import React, { useState } from 'react';
import { Modal, Text, Stack, Button, useMantineTheme, MultiSelect, Paper } from '@mantine/core';
import { IconUserMinus } from '@tabler/icons-react';
import { useUser } from '@clerk/nextjs';
import { useCache } from '@/contexts/queryCacheContext';
import { useFriendList } from '@/hooks/useFriendList';
import { showNotification } from '@mantine/notifications';

interface Friend {
  id: string;
  username: string;
}

interface RemoveFriendResponse {
  message: string;
}

export function RemoveFriendModal(): JSX.Element {
  const { user } = useUser();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);
  const { lastFetched, setLastFetched } = useCache();
  const [selectedFriend, setSelectedFriend] = useState<string[]>([]);
  const [errorMessages, setErrorMessages] = useState<{ friends: string }>({ friends: '' });
  const { list: friendsList } = useFriendList({ lastFetched, setLastFetched });

  const friendOptions = friendsList.map((friend: Friend) => ({
    value: friend.id,
    label: friend.username,
  }));

  const handleOpenModalClick = () => {
    if (friendsList.length > 0) {
      setOpened(true);
    } else {
      showNotification({
        title: 'No Friends to Remove',
        message: 'You currently have no friends to remove.😢',
        color: 'red',
      });
    }
  };

  const handleRemoveFriendClick = async (): Promise<void> => {
    if (selectedFriend.length === 0) {
      setErrorMessages({ friends: "Please select a friend to remove." });
      return;
    }

    try {
      const response = await fetch('/api/Remove-friend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: user?.id,
          friendIDs: selectedFriend,
        }),
      });

      if (response.ok) {
        // Iterate over selectedFriend array and show a notification for each
        selectedFriend.forEach(friendId => {
          const friendName = friendOptions.find(option => option.value === friendId)?.label || 'Unknown friend';
          showNotification({
            title: 'Friend Removed',
            message: `✅ ${friendName} was removed successfully.`,
            color: 'green',
          });
        });

        setSelectedFriend([]);
        setErrorMessages({ friends: '' });
        setLastFetched(Date.now());
        setOpened(false);
      } else {
        const errorText: string = await response.text();
        showNotification({
          title: 'Error',
          message: errorText || 'Failed to remove friend.',
          color: 'red',
        });
      }
    } catch (error: any) {
      console.error('Error removing friend:', error);
      showNotification({
        title: 'Error',
        message: error.toString() || 'An error occurred while removing the friend.',
        color: 'red',
      });
    }
  };

  return (
    <>
      <Button
        onClick={handleOpenModalClick}
        variant="gradient"
        leftSection={<IconUserMinus size={16} color="white" />}
      >
        Remove friends
      </Button>

      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Stack gap="0">
            <Text variant="gradient" fw={500} size="xl" component="span">
              Update Friend List
            </Text>
            <Text c={theme.colors.dark[1]}>Select friends to remove</Text>
          </Stack>
        }
      >
        <Paper>
          <Stack>
            <MultiSelect
              data={friendOptions}
              placeholder="Select a friend"
              error={errorMessages.friends}
              value={selectedFriend}
              onChange={(value) => setSelectedFriend(value)}
              clearable
              searchable
            />
            <Button fullWidth variant="gradient" onClick={handleRemoveFriendClick}>
              Update friend list
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </>
  );
}

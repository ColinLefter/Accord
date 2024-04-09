import React, { useState } from 'react';
import { Modal, Text, Stack, Button, useMantineTheme, MultiSelect, Tooltip, Paper } from '@mantine/core';
import { IconUserMinus } from '@tabler/icons-react';
import { useUser } from '@clerk/nextjs';
import { useCache } from '@/contexts/queryCacheContext';
import { useFriendList } from '@/hooks/useFriendList';
import { notifications } from '@mantine/notifications';

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
          friendID: selectedFriend,
        }),
      });

      if (response.ok) {
        const result: RemoveFriendResponse = await response.json();
        notifications.show({
          title: 'Friend Removed',
          message: result.message,
        });
        setSelectedFriend([]);
        setErrorMessages({ friends: '' });
        setLastFetched(Date.now());
        setOpened(false);
      } else {
        const errorText: string = await response.text();
        notifications.show({
          title: 'Error',
          message: errorText || 'Failed to remove friend.',
        });
      }
    } catch (error: any) {
      console.error('Error removing friend:', error);
      notifications.show({
        title: 'Error',
        message: error.toString() || 'An error occurred while removing the friend.',
      });
    }
  };

  return (
    <>
      
        <Button
          onClick={() => setOpened(true)}
          variant="subtle"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            backgroundImage: 'linear-gradient(to right, #E14D7D, #FF9D0A)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '8px 16px',
          }}
        >
          <IconUserMinus size={16} style={{ color: 'white', marginRight: 5 }} />
          Remove a friend
        </Button>
      

      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Stack gap="0">
            <Text variant="gradient" fw={500} size="xl" component="span">
              Remove a Friend
            </Text>
            <Text color={theme.colors.dark[1]}>Select a friend to remove</Text>
          </Stack>
        }
      >
        <Paper withBorder shadow="md">
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
              Remove Friend
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </>
  );
}

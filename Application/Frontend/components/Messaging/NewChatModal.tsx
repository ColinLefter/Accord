import { useDisclosure } from '@mantine/hooks';
import { Modal, Tooltip, ActionIcon, Text, MultiSelect, Stack, Group, Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useCache } from '@/contexts/queryCacheContext';
import { useFriendList } from '@/hooks/useFriendList';
import { NewChatModalProps } from '@/accordTypes';

export function NewChatModal({ onCreateChat }: NewChatModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const { lastFetched, setLastFetched } = useCache();
  const friends = useFriendList({lastFetched, setLastFetched});

  const handleCreateChatClick = () => {
    // onCreateChat(selectedFriends);
    close(); // Close the modal
  };

  return (
    <>
      <Modal
        centered
        opened={opened}
        onClose={close}
        title={
          <Stack gap="0">
            <Text
              variant="gradient"
              fw={500}
              size="xl"
              component="span"
              gradient={{ from: "pink", to: "yellow" }}
            >
              Select Friends
            </Text>
            <Text c="dimmed">Create group chats or send DMs</Text>
          </Stack>
        }
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
      <Stack>
        <MultiSelect
          clearable
          searchable
          nothingFoundMessage="No matching user found"
          maxValues={9} // Anything more than that and it's a server
          label="Search your friends by username"
          placeholder="Choose up to 9 friends to chat with"
          data={friends.usernames}
        />
        <Button
          fullWidth
          variant="gradient"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Create chat
        </Button>
      </Stack>
      </Modal>
      <Tooltip label="Send DM" onClick={open}>
        <ActionIcon variant="default" aria-label="Plus">
          <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
    </>
  );
}
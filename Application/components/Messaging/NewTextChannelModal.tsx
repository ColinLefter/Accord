import { useDisclosure } from '@mantine/hooks';
import { Modal, Tooltip, ActionIcon, Text, MultiSelect, Stack, Group, Button, useMantineTheme } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useCache } from '@/contexts/queryCacheContext';
import { useFriendList } from '@/hooks/useFriendList';
import { NewChatModalProps } from '@/accordTypes';
import { notifications } from '@mantine/notifications';

/**
 * NewChatModal facilitates the creation of new chat sessions, allowing users to select friends for group chats or direct messages (DMs).
 * This component integrates with the platform's friend list retrieval and chat creation functionalities, offering a seamless interface for
 * initiating conversations.
 *
 * The modal provides a multi-select dropdown populated with the current user's friends, fetched using the useFriendList hook.
 * Users can select multiple friends to include in a new group chat, with the system supporting up to 9 participants per group for
 * optimal engagement and manageability.
 *
 * Upon selection, the onCreateChat callback is invoked with the selected friend IDs, triggering the creation of the chat session in the application.
 * The modal ensures a user-friendly experience with features like searchability, clearability, and a visually appealing gradient design.
 *
 * Props:
 * - onCreateChat: A callback function that handles the creation of the chat with the selected participants.
 *
 * The component leverages Mantine's UI library for modal presentation and form controls, ensuring consistency with the application's design system.
 * Additionally, it uses the application's caching mechanism to refresh the friends list upon chat creation, ensuring that users have access to the
 * most up-to-date information.
 *
 * @param {NewChatModalProps} props The properties received by the NewChatModal component, including the sender's ID and the onCreateChat callback function.
 * @returns {JSX.Element} The rendered NewChatModal component, providing an interactive interface for creating new chat sessions.
 */
export function NewChatModal({ onCreateChat }: NewChatModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const { lastFetched, setLastFetched } = useCache();
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
  const friends = useFriendList({lastFetched, setLastFetched});

  const theme = useMantineTheme();

  const friendOptions = friends.list.map(friend => ({
    value: friend.id,
    label: friend.username,
  }));

  const handleCreateChatClick = () => {
    console.log(selectedFriends);
    onCreateChat(selectedFriends);
    notifications.show({
      title: 'Created a new text channel!',
      message: `Channel participants: ${selectedFriends.join(', ')}`,
    });
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
            >
              Select Friends
            </Text>
            <Text c={theme.colors.dark[1]}>Create group chats or send DMs</Text>
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
          placeholder="Choose up to 9 friends to chat with"
          value={selectedFriends}
          data={friendOptions}
          onChange={setSelectedFriends}
        />
        <Button
          fullWidth
          variant="gradient"
          onClick={handleCreateChatClick} // Call handleCreateChatClick when the button is clicked
        >
          Create chat
        </Button>
      </Stack>
      </Modal>
      <Tooltip label="Send DM" onClick={open}>
        <ActionIcon variant="gradient" aria-label="Plus">
          <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
    </>
  );
}
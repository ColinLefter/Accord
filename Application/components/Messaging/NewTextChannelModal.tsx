import { useDisclosure } from '@mantine/hooks';
import { Modal, Tooltip, ActionIcon, Text, MultiSelect, Stack, Group, Button, useMantineTheme, TextInput } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
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
  const [selectedAdmins, setSelectedAdmins] = useState<string[]>([]);
  const [selectedFriendUsernames, setSelectedFriendUsernames] = useState<string[]>([]);
  const [channelName, setChannelName] = useState('');
  const [errorMessages, setErrorMessages] = useState({ channelName: '', members: '', admins: '' });
  const friends = useFriendList({lastFetched, setLastFetched});

  const theme = useMantineTheme();

  const friendOptions = friends.list.map(friend => ({
    value: friend.id,
    label: friend.username,
  }));

  useEffect(() => {
    const selectedUsernames = selectedFriends.map(friendId => {
      // Find the friend object by id
      const friend = friends.list.find(friend => friend.id === friendId);
      // Return the username, or a placeholder if not found
      return friend ? friend.username : 'Unknown User';
    });
    
    setSelectedFriendUsernames(selectedUsernames);
  }, [selectedFriends, friends.list]);

  const handleCreateChatClick = () => {
    let errors = { channelName: '', members: '', admins: '' };
    if (!channelName.trim()) errors.channelName = 'Channel name is required.';
    if (selectedFriends.length === 0) errors.members = "At least one member is required.";
    // Admins are optional, so no need to validate them

    setErrorMessages(errors);

    if (!errors.channelName && !errors.members) {
      onCreateChat(selectedFriends, selectedAdmins);
      notifications.show({
        title: 'Created a new text channel!',
        message: `Added ${selectedFriendUsernames.join(', ')}`,
      });
      close(); // Close the modal
    }
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
              New Text Channel
            </Text>
            <Text c={theme.colors.dark[1]}>Create channels for group chats or direct messages</Text>
          </Stack>
        }
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
      <Stack>
        <TextInput
          placeholder="Enter your channel name"
          withAsterisk
          error={errorMessages.channelName}
          value={channelName}
          onChange={(e) => setChannelName(e.currentTarget.value)}
        />
        <MultiSelect
          clearable
          searchable
          nothingFoundMessage="No matching user found"
          placeholder="Add channel members from your friend list"
          error={errorMessages.members}
          value={selectedFriends}
          data={friendOptions}
          onChange={setSelectedFriends}
        />
        <MultiSelect
          clearable
          searchable
          nothingFoundMessage="No matching admin found"
          placeholder="Specify any admins from your channel members"
          error={errorMessages.admins}
          value={selectedAdmins}
          data={friendOptions.filter(option => selectedFriends.includes(option.value))}
          onChange={setSelectedAdmins}
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
      <Tooltip label="Create a channel" onClick={open}>
        <ActionIcon variant="gradient" aria-label="Plus">
          <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
    </>
  );
}
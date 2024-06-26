import { useDisclosure } from '@mantine/hooks';
import {
  Modal,
  Tooltip,
  ActionIcon,
  Text,
  MultiSelect,
  Stack,
  Button,
  useMantineTheme,
  TextInput,
  SegmentedControl 
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useCache } from '@/contexts/QueryCacheContext';
import { useFriendList } from '@/hooks/UseFriendList';
import { notifications } from '@mantine/notifications';
import { useUser } from '@clerk/nextjs';
import { useChannel } from "ably/react";
import { getSystemsChannelID} from "@/utility";

/**
 * NewTextChannelModal facilitates the creation of new chat sessions, allowing users to select friends for group chats or direct messages (DMs).
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
 * @returns {JSX.Element} The rendered NewTextChannelModal component, providing an interactive interface for creating new chat sessions.
 */
export function NewTextChannelModal() {
  const { user } = useUser();
  const theme = useMantineTheme();

  const [opened, { open, close }] = useDisclosure(false);
  const { lastFetched, setLastFetched } = useCache();
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);
  const [selectedAdmins, setSelectedAdmins] = useState<string[]>([]);
  const [selectedFriendUsernames, setSelectedFriendUsernames] = useState<string[]>([]);
  const [channelName, setChannelName] = useState('');
  const [errorMessages, setErrorMessages] = useState({ channelName: '', members: '', admins: '' });
  const [senderID, setSenderID] = useState<string>('');
  const friends = useFriendList({lastFetched, setLastFetched});
  const [captureHistory, setcaptureHistory] = useState(true); // On by default

  const { channel } = useChannel(getSystemsChannelID());
  
  useEffect(() => {
    if (user && user.username && user.id) {
      // Set sender to user's username if user exists and username is not null/undefined
      setSenderID(user.id);
    }
  }, [user]); // Dependency array ensures this runs whenever `user` changes

  const friendOptions = friends.list.map(friend => ({
    value: friend.id,
    label: friend.username,
  }));

  const handlePrivacyModeChange = (value: string) => {
    setcaptureHistory(value === 'Capture Message History');
  };

  useEffect(() => {
    // Filter out any selected admins who are not in the updated selected friends list
    setSelectedAdmins(currentAdmins => currentAdmins.filter(adminId => selectedFriends.includes(adminId)));
  
    // Update the selectedFriendUsernames to ensure they are synchronized with the selectedFriends list
    const selectedUsernames = selectedFriends.map(friendId => {
      const friend = friends.list.find(friend => friend.id === friendId);
      return friend ? friend.username : 'Unknown User'; // This ensures usernames are always used instead of IDs
    });
    setSelectedFriendUsernames(selectedUsernames);
  }, [selectedFriends, friends.list]);  

  const handleCreateChatClick = async () => {
    let errors = { channelName: '', members: '', admins: '' };
    if (!channelName.trim()) {
      errors.channelName = 'A channel name is required.';
    }
    if (selectedFriends.length < 2) {
      errors.members = "At least two members is required. Send a DM via your friend list.";
    }
    setErrorMessages(errors);
  
    if (!errors.channelName && !errors.members) {
      try {
        const response = await fetch('/api/new-chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            channelName,
            memberIDs: [senderID, ...selectedFriends],
            adminIDs: selectedAdmins,
            ownerID: senderID,
            captureHistory,
          }),
        });
  
        if (response.ok) {
          await channel.publish({
            name: "text-channel-created",
            data: { message: "A new text channel was created" } // `data` can be a string, object, or other types
          });
          notifications.show({
            title: 'Created a new text channel!',
            message: `Added ${selectedFriendUsernames.join(', ')}`,
          });
          setChannelName('');
          setSelectedFriends([]);
          setSelectedAdmins([]);
          setErrorMessages({ channelName: '', members: '', admins: '' });
          setcaptureHistory(true); // Reset to default (on by default)
          close(); // Close the modal
        } else if (response.status === 409) {
          // Chat already exists, so we need to handle this by prompting the user to change the chat name/members
          const data = await response.json(); // The backend sends a JSON response
          setErrorMessages(prev => ({...prev, channelName: data.error}));
        } else {
          console.error('Failed to create new text channel');
          const errorText = await response.text(); // Fallback to use the response text
          notifications.show({
            title: 'Error',
            message: errorText || 'An unknown error occurred',
          });
        }
      } catch (error) {
        console.error('Error creating new text channel:', error);
        notifications.show({
          title: 'Error',
          message: 'Failed to send request. Please try again.',
        });
      }
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
        <SegmentedControl
          data={['Capture Message History', 'Private Mode']}
          value={captureHistory ? 'Capture Message History' : 'Private Mode'}
          onChange={handlePrivacyModeChange}
          transitionDuration={500}
          transitionTimingFunction="linear"
        />
        <Button
          fullWidth
          variant="gradient"
          onClick={handleCreateChatClick} // Call handleCreateChatClick when the button is clicked
        >
          Create text channel
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
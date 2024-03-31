import { useDisclosure } from '@mantine/hooks';
import { Modal, Tooltip, ActionIcon, Text, Stack, Button, TextInput } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import { NewFriendModalProps } from '@/accordTypes';
import { useEffect } from 'react';

/**
 * Renders a modal that allows users to add a friend by entering their username. It handles
 * the logic for sending friend requests and updating the friend list upon a successful addition.
 * This component is responsible for managing its own state related to the modal's visibility,
 * the input value for the friend's username, and any error messages resulting from the request.
 *
 * @param {NewFriendModalProps} props - Component props.
 * @param {string} props.senderID - The unique ID of the current user sending the friend request.
 * @param {(value: number | null) => void} props.setLastFetched - Function to update the last fetched timestamp
 *        in the parent component, triggering a re-fetch of the friend list.
 */
export function AddFriendModal({ senderID, setLastFetched }: NewFriendModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [friendUsername, setFriendUsername] = useState(''); // Track the username input for adding a friend
  const [searchResult, setSearchResult] = useState<number>();
  const [errorMessage, setErrorMessage] = useState<string>('');

    /**
   * Handles the logic for sending a friend request based on the entered username. It performs a POST
   * request to the server with the sender's ID and the friend's username. Upon a successful request,
   * it resets the input field for further requests and triggers a re-fetch of the friend list by updating
   * the `lastFetched` state. If the request fails or if no username is entered, it sets an appropriate
   * error message.
   */
  const handleAddFriendClick = async () => {
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

        setSearchResult(response.status);
    
        if (response.ok) {
          const data = await response.json();
          setFriendUsername(''); // Clear the input field to allow for further friend requests
        } else {
          console.error('Failed to add friend');
        }
      } catch (error) {
        console.error('Error adding friend:', error);
      }
    } else {
      setErrorMessage('Please enter a username to add a friend.');
    }
  };

    /**
   * Reacts to changes in the `searchResult` state, which reflects the HTTP status code of the friend
   * request operation. It sets an error message based on the result (e.g., if the username does not exist).
   * Upon a successful friend addition, it updates the `lastFetched` timestamp to trigger a re-fetch
   * of the friend list and closes the modal.
   */
  useEffect(() => {
    // This useEffect will only run when searchResult changes
    switch(searchResult) {
      case 404:
        setErrorMessage('This username does not exist.');
        break;
      default:
        console.log("here");
        setErrorMessage('');
        setLastFetched(Date.now()); // Update the lastFetched timestamp to trigger a refetch of the friend list
        close();
        break;
    }
  }, [searchResult]); // Dependency array includes searchResult, so the effect runs when searchResult changes

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
            onClick={handleAddFriendClick} // Fix to use correct handler
          >
            Add Friend
          </Button>
        </Stack>
      </Modal>
    </>
  );
}
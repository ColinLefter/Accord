import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Tooltip, ActionIcon, Text, Stack, Button, TextInput, useMantineTheme } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { RelinquishAdminModalProps } from '@/accordTypes';
import { notifications, showNotification } from '@mantine/notifications';

export function RelinquishAdminModal({ senderID, currentChannelKey, setLastFetched } : RelinquishAdminModalProps) {
  const [opened, { open, close }] = useDisclosure(false);
  // Hardcoded version of the channelKey
  // const [currentChannelKey, setCurrentChannelKey] = useState('0735906bd282dcca9f00d2872b9e57b4a7675245eab16bfa17555df4720147b3');
  const [searchResult, setSearchResult] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmationInput, setConfirmationInput] = useState('');
  
  const theme = useMantineTheme();

  /**
   * Handles communication with MongoDB, error gatings and requirements. Performs a POST towards
   * our Chats server with the sender's ID and the current channel key that the user is prompting on,
   * removing admin's privilege from the user with a notification if the user is an admin within the channel of the provided channelKey,
   * and reply with errors accordingly
   */

  const handleRelinquishAdminClick = async () => {
    // Communicating with the API
    if (confirmationInput != 'Accord') {
      setErrorMessage('Please type in Accord to acknowledge your actions')
    } else {
      try {
        const response = await fetch('/api/relinquish-admin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ senderID, currentChannelKey }), // Supposively takes in senderID and channelKey, but that is to be prone to change
          });

          // Search results
          setSearchResult(response.status);

          // Sending a notification to indicate if we are succesful in reaching for the API
          if (response.ok) {
            notifications.show({
              title: 'Successfully removed your Admin privilege',
              message: 'You are now a normal user'
            })
          } else {
            console.error('Failed on removing your Admin Privileges');
            setErrorMessage('Failed on removing admin privilege');
          }
      } catch (error) {
        console.error('Error removing admins privilege');  
      }
    }
  }

  // After mounting procedures:
  // 403 - Ideally, we would never reach this point if we dont have the channel keys, but just in case
  // 404 - Able to access to the channel, senderID is within the memberIDs, but is not within the adminIDs
  useEffect(() => {
    if (confirmationInput != 'Accord') {
      setErrorMessage('Please type Accord to acknowledge your actions');
    }
    switch (searchResult) {
      case 403:
        setErrorMessage('You are not within this text channel');
        break;
      case 404:
        setErrorMessage('You are not an admin of this text channel');
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

  // Returning actual UI components
  return (
    <>
      <Button
        fullWidth
        onClick={open}
        variant="gradient"
      >
        Relinquish Admin
      </Button>

      <Modal
        centered
        opened={opened}
        onClose={() => {
          close();
        }}
        title={
          <Stack gap="0">
            <Text
              variant="gradient"
              fw={500}
              size="xl"
              component="span"
            >
              Self-removing your Admin Privileges
            </Text>
            <Text c={theme.colors.dark[1]}>Are you sure you want to give up your Admin privileges?</Text>
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
            placeholder="Type 'Accord' to confirm"
            value={confirmationInput}
            onChange={(event) => setConfirmationInput(event.currentTarget.value)}
          />
          <Button
            fullWidth
            variant="gradient"
            onClick={handleRelinquishAdminClick}
          >
            Confirm
          </Button>
        </Stack>
      </Modal>

    </>
  )
}
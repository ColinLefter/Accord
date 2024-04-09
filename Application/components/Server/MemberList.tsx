import React, { useEffect, useState } from 'react';
import { Group, Text, Stack, Button, Menu, rem, TextInput, Modal } from '@mantine/core';
import { IconTrash, IconPlus, IconUserUp } from '@tabler/icons-react';
import { useUser } from '@clerk/nextjs';
import { useDisclosure } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { useChat } from '@/contexts/chatContext';
import { useChannel } from "ably/react";
import { getSystemsChannelID} from "@/utility";


export function MemberList({ chatID }: { chatID: string }) {
  const { chatProps } = useChat();
  const isAdmin = chatProps?.isAdmin ?? false;




  const [membersList, setMembersList] = useState<string[]>([]);
  const [membersIDList, setMembersIDList] = useState<string[]>([]);
  const [channelKey, setChannelKey] = useState<string>(chatID);
  const [opened, { open, close }] = useDisclosure(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [friendUsername, setFriendUsername] = useState('');
  const [searchResult, setSearchResult] = useState<number | null>(null);
  const [isAdmin1, setIsADmin] = useState(isAdmin);
  const { user } = useUser();
  const [myID, setMyID] = useState<string>('');

  const { selectedChannelId, setActiveView } = useChat(); // Critical: this is how we obtain the channel key of the channel we are looking at
  const { channel } = useChannel(getSystemsChannelID());

  useEffect(() => {
    if (user && user.id) {
      // Set sender to user's username if user exists and username is not null/undefined
      setMyID(user.id);
    }
  }, [user]); // Dependency array ensures this runs whenever `user` changes

  const removeMember = async(member: String, index: any) => {
    const memberToRemove = membersIDList[index];
    // No need to generate a newChannelKey here since the backend will handle this
    try {
      const response = await fetch('/api/removeMember', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          member: memberToRemove, 
          channelKey: selectedChannelId, // Use selectedChannelId from context
        }),
      });

      if (response.ok) {
        const data = await response.json();
        await channel.publish({
          name: "removed-from-text-channel",
          data: { removedMemberID: memberToRemove } // `data` can be a string, object, or other types
        });
        if (myID === memberToRemove) {
          setActiveView('friends'); // Redirecting the user if they remove themselves
        }
        // Update the local members list to reflect the removal without waiting for a full refresh
        const filteredMembersList = membersList.filter(item => item !== member);
        const filteredMembersIDList = membersIDList.filter(id => id !== memberToRemove);
        setMembersList(filteredMembersList);
        setMembersIDList(filteredMembersIDList);
      } else {
        console.error('Failed to remove member from chat');
      }
    } catch (error) {
      console.error('Error removing member from chat:', error);
    }
  };

  const fetchUserName = async (memberIDs: String[]) => {
    try {
      const response = await fetch('/api/ID-to-User-Name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ memberIDs: memberIDs}),                              // Change this when we put in the Appshell (It is a String NOT int)
      });

      if (response.ok) {
        const data = await response.json();
        setMembersList(data.userArray);
      } else {
        console.error('Failed to fetch member list');
      }
    } catch (error) {
      console.error('Error fetching member list:', error);
    }
  };
  const addMember = async () => {
    if (friendUsername.trim()) {
      try {
        const response = await fetch('/api/add-member', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ channelKey: channelKey ,friendUsername: friendUsername }),
        });

        setSearchResult(response.status);

        if (response.ok) {
          setFriendUsername('');
          // Use Mantine's showNotification for success message
          showNotification({
            title: 'Success',
            message: `${friendUsername} was added to the chat!`,
            color: 'green',
          });
          const data = await response.json();
          setMembersList([...membersList, friendUsername])
          setMembersIDList([...membersIDList, data.memberID]);
        } else {
          console.error('Failed to add member');
          // Use Mantine's showNotification for error message
          showNotification({
            title: 'Error',
            message: 'Failed to send friend request.',
            color: 'red',
          });
        }
      } catch (error) {
        console.error('Error adding member:', error);
        // Use Mantine's showNotification for network or server errors
        showNotification({
          title: 'Error',
          message: 'An error occurred while sending the member request.',
          color: 'red',
        });
      }
    } else {
      setErrorMessage('Please enter a username to add a member.');
    }
  };

  const createErrorMessage = () => {
    switch (searchResult) {
      case 404:
        setErrorMessage('This username does not exist.');
        break;
      default:
        if (searchResult !== null) {
          setErrorMessage('');
          // setLastFetched(Date.now());
          close();
        }
    }
  }

  useEffect(() => {
    if (user && chatID !== null) { // IMPORTANT: There is a slight delay in the user object being available after login, so we need to wait for it to not be null
      const fetchData = async () => {
        try {
          const response = await fetch('/api/memberListInitializing', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ channelKey: chatID }),
          });

          if (response.ok) {
            const data = await response.json();
            console.log("Server response:" + data.memberIDs);
            setMembersIDList(data.memberIDs);
            
            // Assuming `data` also contains `adminIDs` array
            const isAdmin = data.adminIDs.includes(user.id);
            
            return data.memberIDs;
          } else {
            console.error('Failed to fetch member list');
          }
        } catch (error) {
          console.error('Error fetching member list:', error);
        }
      };
      createErrorMessage();
      setChannelKey(chatID)
      fetchData().then(value => {
        fetchUserName(value);
      });
    }
  }, [user, chatID, isAdmin]);


  return (
    <Stack>
      {/** "All members" text*/}
      <Text fw={500} className="text-xl" component="span" size="xl">
        All members
      </Text>
      {membersList.map((member, index) => (
        <div>
          {/* <Text>{member}</Text> */}
          <Menu shadow="md" position="left" width={225} withArrow >
              <Menu.Target>
                  <Button style={{width: "215px"}} variant="gradient">
                      <Group py="10">
                          {/* <Avatar alt={`Member ${index + 1}`} radius="xl" /> */}
                          <Text>{member}</Text>
                        </Group>
                  </Button>
              </Menu.Target>
            {isAdmin1 && <Menu.Dropdown>
                <Menu.Label>Manage User</Menu.Label>
                <Menu.Item color="green" leftSection={<IconUserUp style={{ width: rem(16)  , height: rem(16) }}/>}>
                  <Button color='green' c="white" fullWidth onClick={() => removeMember(member, index)}>Promote to Admin</Button>
                </Menu.Item>

                <Menu.Item color="red" leftSection={<IconTrash style={{ width: rem(14)  , height: rem(14) }}/>}>
                  <Button color='red' fullWidth onClick={() => removeMember(member, index)}>Remove From Server</Button>
                </Menu.Item>
              </Menu.Dropdown>}
              
            </Menu>
        </div>
      ))}
      <Button
        onClick={open}
        variant="gradient"
        style={{width: "215px"}}
        leftSection={<IconPlus style={{ width: rem(18)  , height: rem(18) }}/>}
      >
        <Group py="10">
          <Text size="sm">Add member</Text>
        </Group>
      </Button>
      <Modal
        centered
        opened={opened}
        onClose={() => {
          close();
          setFriendUsername('');
        }}
        title={
          <Stack gap="0">
            <Text variant="gradient" fw={500} size="xl" component="span" gradient={{ from: "pink", to: "yellow" }}>
              Add a Member
            </Text>
            <Text c="dimmed">Add a member by username</Text>
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
            label="Search a user by username"
            placeholder="accordUser1"
            value={friendUsername}
            onChange={(event) => setFriendUsername(event.currentTarget.value)}
          />
          <Button
            fullWidth
            variant="gradient"
            gradient={{ from: "pink", to: "yellow" }}
            onClick={addMember}
          >
            Add Member
          </Button>
        </Stack>
      </Modal>
    </Stack>
  );
}
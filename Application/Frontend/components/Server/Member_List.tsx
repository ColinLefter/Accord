import React, { useEffect, useState } from 'react';
import { Avatar, Group, Text, Stack, Paper, Button, Menu, rem, TextInput, Modal } from '@mantine/core';
import { IconSettings, IconMessageCircle, IconPhoto, IconSearch, IconArrowsLeftRight, IconTrash, IconPlus, IconUserUp } from '@tabler/icons-react';
import { useUser } from '@clerk/nextjs';
import { channel } from 'diagnostics_channel';
import { createHash } from 'crypto';
import { IntegerType } from 'mongodb';
import { useDisclosure } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';

const generateHash = (input: string) => {
  return createHash('sha256').update(input).digest('hex');
};

export function MemberList({isAdmin, chatID}: any) {
  // Hardcoded member list
  const [membersList, setMembersList] = useState<string[]>([]);
  const [membersIDList, setMembersIDList] = useState<string[]>([]);
  // const [membersIDListToSort, setMembersIDListToSort] = useState<string[]>([]);
  const [channelKey, setChannelKey] = useState<string>(chatID);
  const [opened, { open, close }] = useDisclosure(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [friendUsername, setFriendUsername] = useState('');
  const [searchResult, setSearchResult] = useState<number | null>(null);
  const { user } = useUser();


  const removeMember = async(member: String, index: any) =>{
      console.log(membersIDList[index] + " ahahahahahah")
      const memberToRemove = membersIDList[index];
      let membersIDListToSort = membersIDList.filter(item => item !== memberToRemove);
      membersIDListToSort.sort();
      const rawChannelKey = `chat:${membersIDListToSort.join(",")}`;
      const newChannelKey = generateHash(rawChannelKey);
      // alert("Something")
      try {
        const response = await fetch('/api/removeMember', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          //-----------------------------------------------------------------------------------------------------------------------------------------------
          body: JSON.stringify({ member: memberToRemove , channelKey: channelKey, newChannelKey: newChannelKey}),                              // Change this when we put in the Appshell (It is a String NOT int)
          //------------------------------------------------------------------------------------------------------------------------------------------------
        });

        if (response.ok) {
          const data = await response.json();
          const memberListArray = data.matchCount;
          console.log("My server:" + data.matchCount);
          const stringToRemove = member;

          const filteredMemberList = membersList.filter(item => item !== stringToRemove);

          console.log(filteredMemberList); 
          setMembersList(filteredMemberList);
        } else {
          console.error('Failed to fetch member list');
        }
      } catch (error) {
        console.error('Error fetching member list:', error);
      }
  }

  const fetchUserName = async (memberIDs: String[]) => {
    try {
      const response = await fetch('/api/ID-to-User-Name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //-----------------------------------------------------------------------------------------------------------------------------------------------
        body: JSON.stringify({ memberIDs: memberIDs}),                              // Change this when we put in the Appshell (It is a String NOT int)
        //------------------------------------------------------------------------------------------------------------------------------------------------
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("My users:" + data.userArray);
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
            message: `${friendUsername} was added to the chats!`,
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

  useEffect(() => {
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
        break;
    }
  }, [searchResult, close]);

  useEffect(() => {
    if (user) { // IMPORTANT: There is a slight delay in the user object being available after login, so we need to wait for it to not be null
      console.log(user.id);
      const fetchData = async () => {
        try {
          const response = await fetch('/api/memberListInitializing', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            //-----------------------------------------------------------------------------------------------------------------------------------------------
            body: JSON.stringify({ channelKey: channelKey }),                              // Change this when we put in the Appshell (It is a String NOT int)
            //------------------------------------------------------------------------------------------------------------------------------------------------
          });

          if (response.ok) {
            const data = await response.json();
            console.log("My server:" + data.memberIDs);
            setMembersIDList(data.memberIDs);
            // setMembersIDListToSort(data.memberIDs)
            return data.memberIDs;
          } else {
            console.error('Failed to fetch member list');
          }
        } catch (error) {
          console.error('Error fetching member list:', error);
        }
      };

      fetchData().then(value => {
        // console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");
        // console.log(value);
        fetchUserName(value);
      });
    }
  }, [user]);


  return (
    <Stack>
      {/** "All members" text*/}
      <Text fw={500} className="text-xl" component="span" size="xl">
        All members
      </Text>
      {membersList.map((member, index) => (
        <div>
          <Menu shadow="md" position="left" width={225} withArrow >
              <Menu.Target>
                  <Button variant="filled" style={{width: "200px"}}>
                      <Group py="10">
                          {/* <Avatar alt={`Member ${index + 1}`} radius="xl" /> */}
                          <Text size="sm">{member}</Text>
                        </Group>
                  </Button>
              </Menu.Target>
            {/* {console.log(index)} */}
            {isAdmin && <Menu.Dropdown>
                <Menu.Label>Manage User</Menu.Label>
                <Menu.Item color="green" leftSection={<IconUserUp style={{ width: rem(16)  , height: rem(16) }}/>}>
                  
                  <Button color='green'  onClick={() => removeMember(member, index)}>Promote to Admin</Button>
                </Menu.Item>

                <Menu.Item color="red" leftSection={<IconTrash style={{ width: rem(14)  , height: rem(14) }}/>}>
                  
                  <Button color='red'  onClick={() => removeMember(member, index)}>Remove From Server</Button>
                </Menu.Item>
              </Menu.Dropdown>}
              
            </Menu>
        </div>
      ))}
      <Button onClick={open} color='green' variant="filled" style={{width: "200px"}} leftSection={<IconPlus style={{ width: rem(18)  , height: rem(18) }}/>}>
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


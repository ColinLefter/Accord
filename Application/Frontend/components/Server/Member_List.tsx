import React, { useEffect, useState } from 'react';
import { Avatar, Group, Text, Stack, Paper, Button, Menu, rem } from '@mantine/core';
import { IconSettings, IconMessageCircle, IconPhoto, IconSearch, IconArrowsLeftRight, IconTrash, IconPlus, IconUserUp } from '@tabler/icons-react';
import { useUser } from '@clerk/nextjs';
import { channel } from 'diagnostics_channel';

export function MemberList({isAdmin, chatID}: any) {
  // Hardcoded member list
  const [membersList, setMembersList] = useState<string[]>([]);
  const [membersListName, setMembersListName] = useState<string[]>([]);
  const [channelKey, setChannelKey] = useState<string>(chatID);
  const { user } = useUser();

//   function handleButtonClick(member: String) {
//     try {
//         // Your asynchronous operation here
//         removeMember(member);
//         console.log('Async operation completed');
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

  const removeMember = async(member: String) =>{
      console.log("Something")
      alert("Something")
      try {
        const response = await fetch('/api/removeMember', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          //-----------------------------------------------------------------------------------------------------------------------------------------------
          body: JSON.stringify({ member: member , channelKey: channelKey}),                              // Change this when we put in the Appshell (It is a String NOT int)
          //------------------------------------------------------------------------------------------------------------------------------------------------
        });

        if (response.ok) {
          const data = await response.json();
          const memberListArray = data.matchCount;
          console.log("My server:" + data.matchCount);
          const stringToRemove = member;

          const filteredMemberList = membersList.filter(item => item !== stringToRemove);

          console.log(filteredMemberList); // Output: ['banana', 'orange']
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
        console.log("My users:" + data.userArray);
        setMembersList(data.userArray);
      } else {
        console.error('Failed to fetch member list');
      }
    } catch (error) {
      console.error('Error fetching member list:', error);
    }
  };

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
            //setMembersList(data.memberIDs);
            return data.memberIDs;
          } else {
            console.error('Failed to fetch member list');
          }
        } catch (error) {
          console.error('Error fetching member list:', error);
        }
      };

      fetchData().then(value => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log(value);
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

            {isAdmin && <Menu.Dropdown>
                <Menu.Label>Manage User</Menu.Label>
                <Menu.Item color="green" leftSection={<IconUserUp style={{ width: rem(16)  , height: rem(16) }}/>}>
                  
                  <Button color='green'  onClick={() => removeMember(member)}>Promote to Admin</Button>
                </Menu.Item>

                <Menu.Item color="red" leftSection={<IconTrash style={{ width: rem(14)  , height: rem(14) }}/>}>
                  
                  <Button color='red'  onClick={() => removeMember(member)}>Remove From Server</Button>
                </Menu.Item>
              </Menu.Dropdown>}
              
            </Menu>
        </div>
      ))}
      <Button color='green' variant="filled" style={{width: "200px"}} leftSection={<IconPlus style={{ width: rem(18)  , height: rem(18) }}/>}>
          <Group py="10">
              <Text size="sm">Add member</Text>
            </Group>
      </Button>
    </Stack>
  );
}

import React, { useState } from 'react';
import { Avatar, Group, Text, Stack, Paper, Button, Menu, rem } from '@mantine/core';
import { IconSettings, IconMessageCircle, IconPhoto, IconSearch, IconArrowsLeftRight, IconTrash } from '@tabler/icons-react';

export function MemberList() {
  // Hardcoded member list

  const [membersList, setMembersList] = useState<string[]>([
  'user1',
  'user2',
  'Colin2',]);
  const saySth = () =>{
      console.log("Something")
  }

  return (
    <Stack>
      {/** "All members" text*/}
      <Text fw={500} className="text-xl" component="span" size="xl">
        All members
      </Text>

      {/** Display hardcoded member names */}
      {membersList.map((member, index) => (
        <div>
          <Menu shadow="md" width={200} withArrow>
              <Menu.Target>
                  <Button variant="filled" color="rgba(0, 0, 0, 1)" style={{width: "200px"}}>
                      <Group py="10">
                          <Avatar alt={`Member ${index + 1}`} radius="xl" />
                          <Text size="sm">{member}</Text>
                        </Group>
                  </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Manage User</Menu.Label>
                <Menu.Item color="red" leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />} onClick={saySth}>
                  Remove from server
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
        </div>
      ))}
    </Stack>
  );
}
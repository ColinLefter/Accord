import React from 'react';
import { Avatar, Group, Text, Stack, Paper } from '@mantine/core';

export function MemberList() {
  // Hardcoded member list
  const memberList = [
    'user1',
    'user2',
    'Colin',
    // Add more members as needed
  ];

  return (
    <Stack>
      {/** "All members" text*/}
      <Text fw={500} className="text-xl" component="span" size="xl">
        All members
      </Text>

      {/** Display hardcoded member names */}
      {memberList.map((member, index) => (
        <Paper color="black" shadow="xs" p="xs" radius="md" key={`member-${index}`}>
          <Group py="10">
            <Avatar alt={`Member ${index + 1}`} radius="xl" />
            <Text size="sm">{member}</Text>
          </Group>
        </Paper>
      ))}
    </Stack>
  );
}

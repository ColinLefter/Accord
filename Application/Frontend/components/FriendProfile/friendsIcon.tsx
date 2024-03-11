import React from 'react';
import { Avatar, Text, Group, Paper, ScrollArea, Stack, Title } from '@mantine/core';


interface Friend {
  name: string;
  avatar: string;
  status?: 'online' | 'offline';
}

const FriendItem: React.FC<Friend> = ({ name, avatar }) => {
  return (
    <Paper withBorder radius="md" p="xs" shadow="xs" style={{ backgroundColor: '#2C2E33', cursor: 'pointer' }}>
      <Group>
        <Avatar src={avatar} alt={name} radius="xl" />
        <Text size="sm" style={{ color: 'white', marginLeft: 10 }}>{name}</Text>
        {/* Status indicator can be added here */}
      </Group>
    </Paper>
  );
};

const friendsList: Friend[] = [
  { name: 'Kyo', avatar: '/images/icons8-discord-48.png', status: 'online' },
  { name: 'Thunder', avatar: '/images/icons8-discord-48.png', status: 'online' },
  { name: 'HOC', avatar: '/images/icons8-discord-48.png', status: 'online' },
  { name: 'BAO', avatar: '/images/icons8-discord-48.png', status: 'online' }
  // ... other friends
];

function Sidebar() {
  return (
    <div style={{ width: '250px', height: '100vh', backgroundColor: '#2C2E33' }}>
      <ScrollArea style={{ height: '100%' }}>
        <Stack  style={{ padding: '10px' }}>
          {/* Static sections like 'Friends', 'Nitro', 'Shop', can be added here */}
          <Title order={5} style={{ color: 'white', marginBottom: '10px' }}>Friends</Title>
          {/* Other sections */}

          {/* Direct Messages title */}
          <Title order={5} style={{ color: 'white', marginTop: '20px' }}>DIRECT MESSAGES</Title>

          {/* List of friends */}
          {friendsList.map(friend => (
            <FriendItem key={friend.name} {...friend} />
          ))}

          {/* Rest of the sidebar content */}
        </Stack>
      </ScrollArea>
    </div>
  );
}

export default Sidebar;

import React from 'react';
import { Avatar, Text, Group, Paper } from '@mantine/core';

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
  { name: 'Kyo', avatar: 'path_to_kyo_avatar.jpg', status: 'online' },
  // ... other friends
];

function Sidebar() {
  return (
    <div style={{ width: '250px', height: '100%', backgroundColor: '#2C2E33' }}>
      {friendsList.map((friend) => (
        <FriendItem key={friend.name} {...friend} />
      ))}
    </div>
  );
}

export default Sidebar;

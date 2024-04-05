import React from 'react';
import { Avatar, Group, Text, useMantineTheme } from '@mantine/core';

function UserBar() {
  const theme = useMantineTheme();

  return (
    <Group
      style={{
        backgroundColor: theme.colors.gray[0], // Set your preferred color
        padding: theme.spacing.sm,
        borderRadius: theme.radius.sm,
        boxShadow: theme.shadows.sm,
        alignItems: 'center',
      }}
    >
      <Avatar src="path-to-your-avatar-image" radius="xl" />
      <div style={{ flex: 1 }}>
        <Text size="sm" style={{ fontWeight: 500 }}>Thunder</Text>
        <Text size="xs" color="dimmed">Online</Text>
      </div>
     
    </Group>
  );
}

export default UserBar;

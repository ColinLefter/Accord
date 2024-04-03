import React from 'react';
import { Menu, Divider, Text, Notification } from '@mantine/core';

function InboxDropdown() {
  // Example notifications array
  const notifications = [
    { id: 1, name: 'LIBER-TEA2 and 4 others', description: 'Chatting about: Hacking and Loot Box', time: '1d' },
    { id: 2, name: 'Pat.Ale', description: 'has accepted your friend request.', time: '3d' },
    // More notifications...
  ];

  return (
    <Menu width={300} position="bottom-end">
      <Menu.Target>
        <button>
          {/* Replace with your desired icon */}
          <span>Inbox Icon</span>
        </button>
      </Menu.Target>

      <Menu.Dropdown>
        <Text size="lg" px={10} py={5} style={{ fontWeight: 500, textAlign: 'center' }}>
          Inbox
        </Text>
        <Divider />
        <Menu.Label>For You</Menu.Label>
        {notifications.map((item) => (
          <Notification key={item.id} title={item.name} icon={<span>Envelope Icon</span>}>
            {item.description}
          </Notification>
        ))}
        {/* ...additional sections like "Unreads" and "Mentions" */}
      </Menu.Dropdown>
    </Menu>
  );
}

export default InboxDropdown;

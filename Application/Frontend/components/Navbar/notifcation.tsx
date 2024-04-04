import React, { useState, useEffect, FC } from 'react';
import { Menu, Divider, Text, Notification, Button } from '@mantine/core';

interface PendingRequest {
  id: string;
  username: string;
}

interface InboxDropdownProps {
  userId: string; // Accept userId as a prop
}

const InboxDropdown: FC<InboxDropdownProps> = ({ userId }) => {
  const [pendingList, setPendingList] = useState<PendingRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPendingList = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/Get_SentFriendRequest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      const friendIds = data.ReceivedPendingFriendList || [];
      await fetchUsernames(friendIds);
    } catch (error) {
      console.error('Failed to fetch the pending list:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsernames = async (friendIds: string[]) => {
    const requests = friendIds.map(async (id) => {
      const response = await fetch('/api/get_username_from_id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID: id }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch username for ID ${id}`);
      }

      const data = await response.json();
      return { id, username: data.username };
    });

    try {
      const resultList = await Promise.all(requests);
      setPendingList(resultList);
    } catch (error) {
      console.error('Failed to fetch usernames:', error);
    }
  };

  useEffect(() => {
    if (userId) fetchPendingList();
  }, [userId]); // Fetch pending list when userId changes

  return (
    <Menu width={300} position="bottom-end">
      <Menu.Target>
        <Button>
          {/* You can replace this with an actual icon */}
          <span>Inbox Icon</span>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Text size="lg" px={10} py={5} style={{ fontWeight: 500, textAlign: 'center' }}>
          Inbox
        </Text>
        <Divider />
        <Menu.Label>For You</Menu.Label>
        {loading ? (
          <Notification title="Loading..." />
        ) : (
          pendingList.length > 0 ? (
            pendingList.map((item) => (
              <Notification key={item.id} title={`Friend request sent to ${item.username}`} icon={<span>✉️</span>} />
            ))
          ) : (
            <Notification title="No pending requests" />
          )
        )}
      </Menu.Dropdown>
    </Menu>
  );
};

export default InboxDropdown;

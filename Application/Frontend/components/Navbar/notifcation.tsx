import React, { useState, useEffect, FC } from 'react';
import { Menu, Divider, Text, Notification, Button } from '@mantine/core';

interface FriendRequest {
  id: string;
  username: string;
}

interface InboxDropdownProps {
  userId: string;
}

const InboxDropdown: FC<InboxDropdownProps> = ({ userId }) => {
  const [sentRequests, setSentRequests] = useState<FriendRequest[]>([]);
  const [receivedRequests, setReceivedRequests] = useState<FriendRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFriendRequests = async () => {
    setLoading(true);
    try {
      const sentResponse = await fetch('/api/Get-Sent-Friend-Request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId }),
      });
      const receivedResponse = await fetch('/api/Get-pending-FriendRequest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId }),
      });

      if (!sentResponse.ok || !receivedResponse.ok) {
        throw new Error('Failed to fetch friend requests');
      }

      const sentData = await sentResponse.json();
      const receivedData = await receivedResponse.json();

      const sentFriendIds = sentData.ReceivedPendingFriendList || [];
      const receivedFriendIds = receivedData.ReceivedPendingFriendList || [];

      await Promise.all([
        fetchUsernames(sentFriendIds, setSentRequests),
        fetchUsernames(receivedFriendIds, setReceivedRequests)
      ]);
    } catch (error) {
      console.error('Failed to fetch the friend requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsernames = async (friendIds: string[], setFunction: React.Dispatch<React.SetStateAction<FriendRequest[]>>) => {
    const requests = friendIds.map(id => fetch('/api/get-username-from-id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userID: id }),
    }));

    try {
      const responses = await Promise.all(requests);
      const users = await Promise.all(responses.map(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch username for an ID`);
        }
        return res.json();
      }));

      setFunction(users.map((user, index) => ({
        id: friendIds[index],
        username: user.username,
      })));
    } catch (error) {
      console.error('Failed to fetch usernames:', error);
    }
  };

  const acceptFriendRequest = async (friendId: string) => {
    try {
      const response = await fetch('/api/accept-friend-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, friendId }),
      });
      if (!response.ok) {
        throw new Error('Failed to accept friend request');
      }
      fetchFriendRequests();
    } catch (error) {
      console.error('Failed to accept friend request:', error);
    }
  };

  useEffect(() => {
    if (userId) fetchFriendRequests();
  }, [userId]);

  return (
    <Menu width={300} position="bottom-end">
      <Menu.Target>
        <Button><span>Inbox</span></Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Text size="lg" px={10} py={5} style={{ fontWeight: 500, textAlign: 'center' }}>Inbox</Text>
        <Divider />
        <Menu.Label>Sent Friend Requests</Menu.Label>
        {loading ? <Notification title="Loading..." /> : sentRequests.map((item) => (
          <Notification key={item.id} title={`Friend request sent to ${item.username}`} icon={<span>✉️</span>} />
        ))}
        {sentRequests.length === 0 && !loading && <Text>No sent friend requests</Text>}
        <Divider />
        <Menu.Label>Received Friend Requests</Menu.Label>
        {loading ? <Notification title="Loading..." /> : receivedRequests.map((item) => (
          <Notification key={item.id} title={`Friend request from ${item.username}`} icon={<span>📬</span>}>
            <Button size="xs" onClick={() => acceptFriendRequest(item.id)}>
              Accept
            </Button>
          </Notification>
        ))}
        {receivedRequests.length === 0 && !loading && <Text>No received friend requests</Text>}
      </Menu.Dropdown>
    </Menu>
  );
};

export default InboxDropdown;

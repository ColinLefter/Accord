import React, { useState, useEffect, FC } from 'react';
import { Menu, Divider, Text, Notification, Button } from '@mantine/core';
import { useChannel } from "ably/react";
import { getSystemsChannelID} from "@/utility";

interface FriendRequest {
  id: string;
  username: string;
}

interface FriendRequestManagerProps {
  userId: string;
}

const FriendRequestManager: FC<FriendRequestManagerProps> = ({ userId }) => {
  const [sentRequests, setSentRequests] = useState<FriendRequest[]>([]);
  const [receivedRequests, setReceivedRequests] = useState<FriendRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { channel, ably } = useChannel(getSystemsChannelID());

  const fetchFriendRequests = async () => {
    setLoading(true);
    try {
      const sentResponse = await fetch('/api/Get-Sent-Friend-Request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId }),
      });
      const receivedResponse = await fetch('/api/Get-pending-Friend-Request', {
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

  const createDirectMessageChat = async (userId: string, friendId: string) => {
    try {
      const dmResponse = await fetch('/api/new-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberIDs: [userId, friendId] }),
      });
  
      if (!dmResponse.ok) {
        const errorData = await dmResponse.json();
        throw new Error(errorData.error || 'Failed to create DM chat');
      }
    } catch (error) {
      console.error('Error creating DM chat:', error);
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
      // Once accepted, create a DM chat with the new friend
      await createDirectMessageChat(userId, friendId);
      await channel.publish("friend-request-accepted", `${userId}-${friendId}`);

      fetchFriendRequests(); // Refresh data after accepting a request
    } catch (error) {
      console.error('Failed to accept friend request:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchFriendRequests(); // Initial fetch
      const intervalId = setInterval(fetchFriendRequests, 5000); // Poll every 5 seconds
      return () => clearInterval(intervalId); // Cleanup on component unmount
    }
  }, [userId]);

  return (
    <Menu width={300} position="bottom-end">
      <Menu.Target>
        <Button variant="gradient">Inbox</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Text size="lg" px={10} py={5} style={{ fontWeight: 500, textAlign: 'center' }}>Inbox</Text>
        <Divider />
        <Menu.Label>Sent Friend Requests</Menu.Label>
        {sentRequests.map((item) => (
          <Notification key={item.id} title={`Friend request sent to ${item.username}`} icon={<span>✉️</span>} />
        ))}
        {sentRequests.length === 0 && <Menu.Label>No sent friend requests</Menu.Label>}
        <Divider />
        <Menu.Label>Received Friend Requests</Menu.Label>
        {receivedRequests.map((item) => (
          <Notification key={item.id} title={`Friend request from ${item.username}`} icon={<span>📬</span>}>
            <Button variant="gradient" size="xs" onClick={() => acceptFriendRequest(item.id)}>
              Accept
            </Button>
          </Notification>
        ))}
        {receivedRequests.length === 0 && <Menu.Label>No received friend requests</Menu.Label>}
      </Menu.Dropdown>
    </Menu>
  );
};

export default FriendRequestManager;

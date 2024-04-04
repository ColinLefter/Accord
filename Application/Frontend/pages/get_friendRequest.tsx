import { useState, FC } from 'react';
import { TextInput, Button, Box, Title, List } from '@mantine/core';

const FetchPendingListPage: FC = () => {
  const [accountId, setAccountId] = useState<string>('');
  const [pendingList, setPendingList] = useState<{ id: string, username: string }[]>([]); // Store both ID and username
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPendingList = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/Get_SentFriendRequest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: accountId }),
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
    // Process each friend ID to fetch the corresponding username
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
      // Wait for all username fetches to complete
      const resultList = await Promise.all(requests);
      setPendingList(resultList);
    } catch (error) {
      console.error('Failed to fetch usernames:', error);
    }
  };

  return (
    <Box style={{ maxWidth: 400, margin: 'auto', marginTop: '2rem' }}>
      <Title style={{ textAlign: 'center' }}>Fetch Pending Friend List</Title>
      <TextInput
        label="Account ID"
        placeholder="Enter your account ID"
        value={accountId}
        onChange={(e) => setAccountId(e.currentTarget.value)}
        required
      />
      <Button onClick={fetchPendingList} loading={loading} mt="md">
        Fetch sentFriend request List
      </Button>
      {pendingList.length > 0 && (
        <Box mt="md">
          <Title order={4} style={{ textAlign: 'center' }}>Sent FriendRequest List</Title>
          <List>
            {pendingList.map((item, index) => (
              <List.Item key={index}>{item.username} (ID: {item.id})</List.Item> // Display the username and ID
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default FetchPendingListPage;

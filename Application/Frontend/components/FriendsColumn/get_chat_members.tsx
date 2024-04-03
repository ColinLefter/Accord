import React, { useState } from 'react';

function ChatMembersFinder() {
  const [channelKey, setChannelKey] = useState('');
  const [memberIDs, setMemberIDs] = useState<string[]>([]); // Explicitly state that memberIDs is an array of strings
  const [usernames, setUsernames] = useState<string[]>([]); // Assuming usernames are also strings
  const [error, setError] = useState('');

  const fetchChatMembers = async () => {
    setError('');
    try {
      const response = await fetch('/api/get_member', { // Adjust with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ channelKey }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch chat members');    
      }

      const data = await response.json();
      if (data.members && data.members.length > 0) {
        setMemberIDs(data.members);
        fetchUsernames(data.members); // Fetch usernames after setting member IDs
      } else {
        setMemberIDs([]);
        setUsernames([]);
        setError('No members found for this channelKey');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An error occurred while fetching the chat members');
      }
    }
  };

  const fetchUsernames = async (memberIDs: string[]) => {
    try {
      const response = await fetch('/api/get-usernames-of-friends', { // This should be the endpoint that takes IDs and returns usernames
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ IDs: memberIDs }), // Adjust based on your backend implementation
      });

      if (!response.ok) {
        throw new Error('Failed to fetch usernames');
      }

      const usernames = await response.json();
      setUsernames(usernames);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An error occurred while fetching usernames');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchChatMembers();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="channelKey">Channel Key:</label>
        <input
          id="channelKey"
          type="text"
          value={channelKey}
          onChange={(e) => setChannelKey(e.target.value)}
        />
        <button type="submit">Find Chat Members</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {usernames.length > 0 && (
        <div>
          <p>Chat Members ({usernames.length}):</p> {/* Display the number of people */}
          <ul>
            {usernames.map((username, index) => (
              <li key={index}>{username}</li> // Display each username
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ChatMembersFinder;

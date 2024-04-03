import React, { useState } from 'react';

function ChatOwnerFinder() {
  const [channelKey, setChannelKey] = useState('');
  const [owner, setOwner] = useState('');
  const [error, setError] = useState('');

  const fetchChatOwner = async () => {
    setError(''); // Reset error message
    try {
      const response = await fetch('/api/get_chat', { // Adjust with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ channelKey }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch chat owner');
      }

      const data = await response.json();
      if (data.owner) {
        setOwner(data.owner);
      } else {
        setOwner('');
        setError('No owner found for this channelKey');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An error occurred while fetching the chat owner');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchChatOwner();
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
        <button type="submit">Find Chat Owner</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {owner && <p>Chat Owner: {owner}</p>}
    </div>
  );
}

export default ChatOwnerFinder;

import React, { useState } from 'react';

type ChatHistoryType = string[];

export default function ChatFetcher() {
  const [channelKey, setChannelKey] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatHistoryType | null>(null);
  const [error, setError] = useState<string>('');

  const fetchChatHistory = async () => {
    setError(''); // Reset error message
    try {
      const response = await fetch('/api/get_chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ channelKey }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch chat history');
      }

      const data = await response.json();
      setChatHistory(data.messageHistory);
    } catch (err: unknown) { // Note the type annotation here
      // Perform a type check before accessing the error message
      if (err instanceof Error) {
        console.error(err);
        setError(err.message);
      } else {
        // If it's not an Error instance, you can handle it differently or set a generic message
        console.error('An unexpected error occurred');
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Channel Key"
        value={channelKey}
        onChange={(e) => setChannelKey(e.target.value)}
      />
      <button onClick={fetchChatHistory}>Fetch Chat History</button>

      {error && <p>Error: {error}</p>}
      {chatHistory ? (
        <div>
          <h3>Chat History:</h3>
          <ul>
            {chatHistory.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No chat history to display.</p>
      )}
    </div>
  );
}

import React, { useState, useContext } from 'react';
// If you're using a context to access the sender's ID, import it here
// import { UserContext } from '../path/to/your/UserContext';

const SendFriendRequest = ({ senderID }) => {
  // If using context to get the sender's ID, you can use useContext
  // const { senderID } = useContext(UserContext);

  const [receiverID, setReceiverID] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setReceiverID(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!receiverID) {
      setMessage('Please provide a user ID');
      return;
    }

    try {
      const response = await fetch('/api/add_freind_request_to_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: receiverID, requestingUserId: senderID }),
      });

      if (response.ok) {
        setMessage('Friend request sent successfully');
        setReceiverID(''); // Optionally clear the input field after successful request
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || 'Failed to send friend request');
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
      setMessage('An error occurred while sending the friend request');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the User ID to send a friend request:
          <input
            type="text"
            value={receiverID}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Send Friend Request</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SendFriendRequest;

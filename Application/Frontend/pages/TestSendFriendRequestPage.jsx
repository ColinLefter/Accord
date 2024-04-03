import React from 'react';
import SendFriendRequest from '../components/FriendsColumn/FriendRequest'; // Adjust the import path according to your file structure

const TestSendFriendRequestPage = () => {
  // This is a hardcoded sender ID for testing. Replace or dynamically retrieve it based on your app's auth system.
  const senderID = 'user_1234567890';

  return (
    <div>
      <h1>Test Send Friend Request</h1>
      <SendFriendRequest senderID={senderID} />
    </div>
  );
};

export default TestSendFriendRequestPage;

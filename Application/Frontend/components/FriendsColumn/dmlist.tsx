// components/FriendList.tsx
import React, { useState, useEffect } from 'react';
import FriendComponent from '../FriendProfile/FriendComponent';

type Friend = {
  name: string;
  avatarSrc: string;
};

type FriendListProps = {
  userName: string;
};

const FriendList: React.FC<FriendListProps> = ({ userName }) => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('/api/friendlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch friend list');
        }
        return response.json();
      })
      .then(data => {
        setFriends(data.friendList);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [userName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Friend List</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            <FriendComponent avatarSrc={friend.avatarSrc} name={friend.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
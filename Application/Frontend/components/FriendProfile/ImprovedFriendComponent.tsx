import React from 'react';
import { Avatar } from '@mantine/core';

// Define a type for the component's props
type FriendComponentProps = {
  avatarSrc: string;
  name: string;
};

// Use the defined type in your functional component
const FriendComponent: React.FC<FriendComponentProps> = ({ avatarSrc, name }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={avatarSrc} alt={name} />
      <span style={{ marginLeft: '10px' }}>{name}</span>
    </div>
  );
};

export default FriendComponent;

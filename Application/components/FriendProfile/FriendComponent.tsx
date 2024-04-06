// components/FriendComponent.tsx
import React from 'react';
import { Avatar } from '@mantine/core';

type FriendComponentProps = {
  avatarSrc: string;
  name: string;
};

const FriendComponent: React.FC<FriendComponentProps> = ({ avatarSrc, name }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={avatarSrc} alt={name} />
      <span style={{ marginLeft: '10px' }}>{name}</span>
    </div>
  );
};

export default FriendComponent;

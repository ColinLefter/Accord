import React, { useState, useEffect } from 'react';
import { Stack, Title, Alert } from '@mantine/core';
import FriendComponent from '../FriendProfile/FriendComponent';

type Friend = {
  name: string;
  avatarSrc: string;
};

type FriendListProps = {
  userName: string;
};

export function DMList() {
  
}
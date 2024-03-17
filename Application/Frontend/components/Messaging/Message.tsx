"use client"

import { Group, Stack, Avatar, Text } from '@mantine/core';

interface MessageProps {
  username: string,
  message: string,
  firstMessage?: boolean,
  date?: string
}

export function Message({ username, message, firstMessage, date }: MessageProps) {
  return (
    <Group gap="xs">
      {/* Render the Avatar only if firstMessage is present; otherwise, render an empty space */}
      {firstMessage ? (
        <Avatar radius="xl" />
      ) : (
        <div style={{ width: 38 }} /> // Adjusted width to match the Avatar size
      )}
      
      <Stack gap="0">
        {firstMessage && (
          <Group justify="flex-start" gap="xs">
            <Text fw={500}>{username}</Text>
            <Text c="dimmed" size="xs">{date}</Text>
          </Group>
        )}
        <Text>{message}</Text>
      </Stack>
    </Group>
  );
}
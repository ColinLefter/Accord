"use client"

import { Group, Stack, Avatar, Text } from '@mantine/core';

interface MessageProps {
  username: string,
  message: string,
  firstMessage?: boolean,
  date?: string
}

/**
 * The Message component displays a single message within a conversation,
 * showing the user's avatar, name, and the timestamp for the first message in a series.
 * Subsequent messages from the same user will display without the avatar and username to
 * maintain the context without redundancy.
 *
 * Props:
 * - username: The name of the user who sent the message.
 * - message: The content of the message being displayed.
 * - firstMessage: Optional boolean that indicates if this message is the first in a series from the user.
 * - date: Optional string representing the timestamp of the message.
 *
 * This component utilizes the Mantine library for its UI elements. The Avatar is shown only when
 * the message is the first in a series from a particular user, providing a visual grouping of
 * consecutive messages.
 *
 * @param {MessageProps} props The properties passed to the Message component.
 * @returns {JSX.Element} The rendered Message component.
 */
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
"use client";

import { Group, Stack, Avatar, Text } from '@mantine/core';
import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { MessageProps } from "@/accordTypes";
import { MessageDropdown } from "@/components/Messaging/MessageDropdown";

/**
 * Renders a single message within a chat interface, displaying the sender's username, message content,
 * and a timestamp. Optionally, the sender's avatar is shown for the first message in a consecutive series
 * from the same user to visually distinguish different conversation participants.
 *
 * The component design is tailored to enhance user experience by grouping messages from the same sender
 * and reducing visual redundancy in a conversation thread. This design choice streamlines the chat interface,
 * making it easier to follow conversations.
 *
 * Props:
 * - username: The username of the message sender.
 * - message: The text content of the message.
 * - firstMessage: A boolean flag indicating if this message is the first in a sequence from the sender.
 * - date: The timestamp of when the message was sent.
 * - userProfileURL: The URL of the sender's avatar image.
 *
 * @param {MessageProps} props - Contains all necessary data to display a message, including the sender's
 * information and message details.
 * @returns {JSX.Element} A JSX element representing a single message in the chat interface, potentially
 * including an avatar, username, timestamp, and message content.
 */
export function Message({ username, message, firstMessage, date, userProfileURL }: MessageProps) {
  return (
    <Group gap="xs" justify="space-between">
      {/* Render the Avatar only if firstMessage is present; otherwise, render an empty space */}
      <Group gap="xs">
        {firstMessage ? (
          <Avatar radius="xl" src={userProfileURL} />
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
      <MessageDropdown/>
    </Group>
  );
}
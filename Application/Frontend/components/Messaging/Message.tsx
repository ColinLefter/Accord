import { Group, Stack, Avatar, Text } from '@mantine/core';

interface MessageProps {
  username: string,
  message: string,
  firstMessage: boolean,
  date?: string
}

export function Message(props: MessageProps) {
  return (
    <Group  gap="xs">
      <Avatar radius="xl" />
      <Stack gap="0">
        <Group justify="flex-start" gap="xs">
          <Text fw={500}>{props.username}</Text>
          <Text c="dimmed" size="xs">{props.date}</Text>
        </Group>
        <Text>{props.message}</Text>
      </Stack>
    </Group>
  );
}
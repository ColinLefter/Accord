import { Menu, Button, Text, rem, ActionIcon, useComputedColorScheme } from '@mantine/core';
import {
  IconTrash,
  IconDotsVertical,
  IconCursorText
} from '@tabler/icons-react';

export function MessageDropdown() {
  const textColor = useComputedColorScheme() === 'dark' ? "white" : "black";
  return (
    <Menu shadow="md" position="bottom">
      <Menu.Target>
      <ActionIcon variant="transparent" aria-label="Settings">
        <IconDotsVertical color={textColor} style={{ width: '70%', height: '70%' }} stroke={1.5} />
      </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>General</Menu.Label>
        <Menu.Item
          leftSection={<IconCursorText style={{ width: rem(14), height: rem(14) }} stroke={1} />}
        >
          Edit Message
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          color="red"
          leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
        >
          Delete message
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
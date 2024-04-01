import { Menu, Button, Text, rem, ActionIcon, useComputedColorScheme, Tooltip } from '@mantine/core';
import {
  IconTrash,
  IconDotsVertical,
  IconCursorText
} from '@tabler/icons-react';
import { MessageDropdownProps } from '@/accordTypes';
import { forwardRef, ReactNode } from 'react';

export function MessageDropdown({ privateChat, onDelete }: MessageDropdownProps) {
  const textColor = useComputedColorScheme() === 'dark' ? "white" : "black";

  const MenuItemWithOptionalTooltip = forwardRef<HTMLDivElement, { children: ReactNode, privateChat: boolean, onDelete: () => void }>(({ children, privateChat, onDelete }, ref) => {
    // Conditionally wrap the children in a Tooltip if privateChat is true
    const content = privateChat ? (
      <Tooltip
        label="Turn off private mode to delete messages"
        color="gray"
        variant="gradient"
        offset={10}
        position="left-end"
        transitionProps={{ transition: 'fade-left', duration: 300 }}
        >
        <div ref={ref}>{children}</div>
      </Tooltip>
    ) : (
      <div ref={ref}>{children}</div>
    );
  
    return content;
  });

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
        <MenuItemWithOptionalTooltip privateChat={privateChat} onDelete={onDelete}>
          <Menu.Item
            color="red"
            disabled={privateChat}
            leftSection={<IconTrash style={{ width: 14, height: 14 }} />}
            onClick={onDelete}
          >
            Delete message
          </Menu.Item>
        </MenuItemWithOptionalTooltip>
      </Menu.Dropdown>
    </Menu>
  );
}
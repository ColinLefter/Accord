import { Menu, Button, Text, rem, ActionIcon, useComputedColorScheme, Tooltip, MantineTransition } from '@mantine/core';
import {
  IconTrash,
  IconDotsVertical,
  IconCursorText
} from '@tabler/icons-react';
import { MessageDropdownProps } from '@/accordTypes';
import { useState, useEffect, forwardRef, ReactNode } from 'react';
import { useUser } from '@clerk/nextjs';

export function MessageDropdown({ privateChat, clientID, onDelete }: MessageDropdownProps) {
  const { user } = useUser();
  const [userID, setUserID] = useState<string | null>(null);
  const [readyToDelete, setReadyToDelete] = useState(false);
  const textColor = useComputedColorScheme() === 'dark' ? "white" : "black";

  // Effect to check for user id availability
  useEffect(() => {
    if (user && user.id) {
      setUserID(user.id);
      setReadyToDelete(true);
    }
  }, [user?.id]);

  // Check if it's the current user's message
  const myMessage = clientID === userID;

  const MenuItemWithOptionalTooltip = forwardRef<HTMLDivElement, { children: ReactNode, privateChat: boolean, onDelete: () => void }>(({ children, privateChat, onDelete }, ref) => {
    // Conditionally wrap the children in a Tooltip if privateChat is true
    const content = privateChat ? (
      <Tooltip
        label="Turn off private mode to delete messages"
        color="gray"
        variant="gradient"
        offset={10}
        position="left-end"
        transitionProps={{ transition: 'fade-left' as MantineTransition, duration: 300 }}
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
            disabled={privateChat || !myMessage} // If it is not my message, I can't delete it!
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
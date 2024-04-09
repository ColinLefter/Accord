import { Menu, Button, Text, rem, ActionIcon, useComputedColorScheme, Tooltip, MantineTransition } from '@mantine/core';
import {
  IconTrash,
  IconDotsVertical,
  IconCursorText
} from '@tabler/icons-react';
import { MessageDropdownProps } from '@/accordTypes';
import { useState, useEffect, forwardRef, ReactNode } from 'react';
import { useUser } from '@clerk/nextjs';

/**
 * Renders a dropdown menu associated with a message, providing options to edit or delete the message. 
 * This component is designed to enhance user interaction within chat functionalities, offering 
 * contextual actions like editing or removing messages. The availability of these actions is 
 * contingent on the message's ownership and the chat's privacy settings.
 *
 * A custom MenuItemWithOptionalTooltip component is utilized to conditionally display a tooltip 
 * for the delete option based on the chat's privacy mode. This serves as an intuitive guide for users, 
 * clarifying why certain actions might be restricted.
 *
 * The component integrates with the user's session to ascertain message ownership, ensuring actions 
 * like message deletion are securely gated. This implementation highlights the application's commitment 
 * to user privacy and data integrity within interactive features.
 *
 * @param {MessageDropdownProps} props - The properties passed to the MessageDropdown component.
 * @returns {JSX.Element} A dropdown menu with options to edit or delete a message, 
 *                        enhanced with conditional tooltips based on chat privacy settings.
 */
export function MessageDropdown({ privateChat, clientID, onDelete, isAdmin }: MessageDropdownProps) {
  const { user } = useUser();
  const [userID, setUserID] = useState<string | null>(null);
  const [readyToDelete, setReadyToDelete] = useState(false);
  const textColor = useComputedColorScheme() === 'dark' ? "white" : "black";
  const [isAdmin1, setIsAdmin1] = useState(true)
  const [deleteable, setDeleteable] = useState(true)

  // Effect to check for user id availability
  useEffect(() => {
    if (user && user.id) {
      setUserID(user.id);
      setReadyToDelete(true);
    }
    if(isAdmin){
      setIsAdmin1(true)
    }
    if(isAdmin1){
      setDeleteable(false)
    }
  }, [user?.id, isAdmin]);

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
          {!deleteable && <Menu.Item
            color="red"
            disabled={false} // If it is not my message, I can't delete it!
            leftSection={<IconTrash style={{ width: 14, height: 14 }} />}
            onClick={onDelete}
          >
            Delete message
          </Menu.Item>}
          {deleteable && <Menu.Item
            color="red"
            disabled={privateChat || !myMessage} // If it is not my message, I can't delete it!
            leftSection={<IconTrash style={{ width: 14, height: 14 }} />}
            onClick={onDelete}
          >
            Delete message
          </Menu.Item>}
        </MenuItemWithOptionalTooltip>
      </Menu.Dropdown>
    </Menu>
  );
}
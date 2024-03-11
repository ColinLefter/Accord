import { Avatar, Group, Card, Tooltip, Text, Stack, ActionIcon } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { AppLink } from  "@/components/AppLink";

/**
 * FooterProfile renders a user profile component typically used in the footer area of the application.
 * It displays an avatar that links to the user's profile and provides a quick navigation option to view
 * the profile. Additionally, it features a settings action icon, allowing users to access and modify
 * their settings easily.
 *
 * The component is structured using the Card and Group components from Mantine to arrange content
 * horizontally with space between elements. The Avatar is made clickable via the AppLink component,
 * enhancing user interaction and connectivity within the application. The Tooltip components are used
 * to provide additional context for the avatar and settings icon, improving the overall user experience.
 *
 * @returns The JSX element representing a user profile section with quick access links to the user's profile
 * and settings, encapsulated within a card layout for distinct visual separation.
 */
export function FooterProfile() {
  return (
    <>
      <Card>
        <Group justify="space-between">
          <Group>
            <AppLink href="/">
              <Tooltip label="Profile">
                <Avatar radius="xl"/>
              </Tooltip>
            </AppLink>
            <Text>User 1</Text>
          </Group>
          <Tooltip label="User Settings">
            <ActionIcon variant="default" aria-label="Plus">
              <IconSettings style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Card>
    </>
  );
}
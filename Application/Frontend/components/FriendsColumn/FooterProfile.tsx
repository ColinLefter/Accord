import { Avatar, Group, Card, Tooltip, Text, Stack, ActionIcon } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { AppLink } from  "@/components/AppLink";

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
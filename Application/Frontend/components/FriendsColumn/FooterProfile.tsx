import { Avatar, Group, Card, Tooltip, Text, Stack } from '@mantine/core';
import { AppLink } from  "@/components/AppLink";

export function FooterProfile() {
  return (
    <>
      <Card>
        <Group>
        <AppLink href="/">
          <Tooltip label="Profile">
            <Avatar radius="xl"/>
          </Tooltip>
        </AppLink>
          <div>
            <Text>User 1</Text>
            <Text>user1</Text>
          </div>
        </Group>
      </Card>
    </>
  );
}
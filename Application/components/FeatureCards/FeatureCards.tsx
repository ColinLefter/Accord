import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './FeatureCards.module.css';
import { TextChannelDemo } from "@/components/TextChannels/TextChannelDemo"

export function FeatureCards() {
  return (
    <Container fluid py="xl" className={classes.container}>
      <Group justify="center">
        <Badge variant="gradient" size="lg">
          Text Channels
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Text-channels that are user-first
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Create a direct message or group chat with friends and colleagues, all while giving you the option to keep your conversations private.
        With private mode on, your messages disappear after leaving the chat, closing the app or refreshing your browser.
      </Text>

      <Container fluid mt={50}>
        <TextChannelDemo/>
      </Container>
    </Container>
  );
}

import { CreateServer } from "@/components/LeftSidebar/CreateServer";
import { ServerList } from "@/components/LeftSidebar/ServerList";
import { Text } from "@mantine/core";

import { AppShell, Burger, Group, Stack, Skeleton, ScrollArea, Button, Text, Tooltip, useComputedColorScheme, ActionIcon } from '@mantine/core';
import { IconAdjustments, IconPlus } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import { Logo } from "@/components/Logo";
import { FriendsTab } from "@/components/FriendsColumn/FriendsTab";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { FooterProfile } from "@/components/FriendsColumn/FooterProfile";
import { MessagingInterface } from "@/components/Messaging/MessagingInterface";
import React, { useState } from 'react';

import classes from "@/components/tabstyling.module.css";

/**
 * Represents the central structure of the application interface, organizing the layout into
 * header, navbar, main content, and aside sections. This component serves as the main framework
 * for displaying the user interface, facilitating user navigation, and presenting relevant
 * content within different sections of the application.
 *
 * The AppShell component integrates various subcomponents like Burger, Logo, ColorSchemeToggle,
 * FriendsTab, FooterProfile, and others to create a cohesive user experience. It utilizes the
 * Tabs component to offer different views (Friends and Profile) within the main section.
 * Additionally, it handles responsive toggles for mobile and desktop views and applies the
 * appropriate color scheme based on user preferences or system settings.
 */
export default function Accord() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [activeView, setActiveView] = useState('friends'); // Initialize with 'friends'

  // note: we are manually handling the currently selected tab via states
  const handleTabSelection = (value: string) => {
    setActiveView(value);
  };

  const handleMessageIconClick = () => {
    setActiveView('message');
  };

  return (
    <>
    <div>
      <Text
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
          size="xl"
        >
          Accord
        </Text>
      <ServerList/>
      {/* <CreateServer/> */}
    </div>
    <AppShell
      header={{ height: 50 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      aside={{ width: 120, breakpoint: 'sm' }}
    >
    <AppShell.Header>
      <Group justify="space-between" className="center">
        <Group px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <Logo />
        </Group>
        <ColorSchemeToggle/>
      </Group>
    </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section grow component={ScrollArea}>
          <Button fullWidth>Friends</Button>
          <Group justify="space-between">
            <Text py="md">Direct Messages</Text>
            <Tooltip label="Send DM">
              <ActionIcon variant="default" aria-label="Plus">
                <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
              </ActionIcon>
            </Tooltip>
          </Group>
          {Array(60)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={30} mt="sm" animate={false} />
            ))}
        </AppShell.Section>
        <AppShell.Section mt="15">
          <FooterProfile/>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <FriendsTab/>
      </AppShell.Main>
      <AppShell.Aside p="md" component={ScrollArea}>
      <Text>Servers</Text>
        {Array(60)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={30} mt="sm" animate={false} />
          ))}
      </AppShell.Aside>
    </AppShell>

  </>
  );
}

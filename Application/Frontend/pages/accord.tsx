import {
  AppShell,
  Burger,
  Group,
  Stack,
  Skeleton,
  ScrollArea,
  Button,
  Text,
  Tooltip,
  useComputedColorScheme,
  ActionIcon,
  Container,
  Tabs
} from '@mantine/core';
import { IconUsers, IconPlus, IconUserCircle } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import { Logo } from "@/components/Logo";
import { FriendsTab } from "@/components/FriendsColumn/FriendsTab";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { FooterProfile } from "@/components/FriendsColumn/FooterProfile";

import classes from "@/components/tabstyling.module.css";

export default function Accord() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })

  return (
    <Tabs variant="unstyled" classNames={classes}>
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
        <Group justify="space-between" className="center" px="md">
          <Group>
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
            <Logo />
          </Group>
          <ColorSchemeToggle/>
        </Group>
      </AppShell.Header>
        <AppShell.Navbar p="md">
          <AppShell.Section grow>
            <Tabs.List grow>
              <Tabs.Tab
                value="friends"
                leftSection={<IconUsers />}
              >
                Friends
              </Tabs.Tab>
              <Tabs.Tab
                value="profile"
                leftSection={<IconUserCircle />}
              >
                My profile
              </Tabs.Tab>
            </Tabs.List>
          </AppShell.Section>
          <AppShell.Section grow component={ScrollArea} mt="15">
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
          <Tabs.Panel value="friends"><FriendsTab/></Tabs.Panel>
          <Tabs.Panel value="profile">My profile</Tabs.Panel>
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
    </Tabs>
  );
}

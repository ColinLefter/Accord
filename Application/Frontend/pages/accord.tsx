import { AppShell, Burger, Group, Stack, Skeleton, ScrollArea, Button, Text, Tooltip, Container } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { CloseButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Logo } from "@/components/Logo";
import { FriendsTab } from "@/components/FriendsColumn/FriendsTab";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { FooterProfile } from "@/components/FriendsColumn/FooterProfile";

export default function Accord() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 40 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      aside={{ width: 200, breakpoint: 'sm' }}
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
              <CloseButton icon={<IconPlus size={15} stroke={2} color="black" />} />
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
  );
}

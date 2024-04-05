import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";

import { useUser } from '@clerk/nextjs';  //
import { UserButton } from "@clerk/nextjs";

const mockdata = [
  {
    icon: IconCode,
    title: "Direct Messaging",
    description: "Message your friends in real-time.",
  },
  {
    icon: IconCoin,
    title: "Discussion Threads",
    description:
      "Create or join a Discussion Thread to hold group conversations.",
  },
];

/**
 * Navbar serves as the primary navigation component displayed on the homepage. It integrates
 * several interactive elements to facilitate user navigation across different sections of the
 * application. The Navbar includes a logo that redirects to the homepage, a features dropdown
 * for accessing various application features, a color scheme toggle, and a login button.
 * In smaller viewports, it transforms into a responsive drawer for better accessibility.
 *
 * Key Features:
 * - Dynamic rendering of navigation links based on predefined mock data.
 * - Responsive design that adapts to various screen sizes, transitioning into a drawer menu
 *   for mobile views.
 * - HoverCard component displaying a two-column grid of feature links.
 * - Theme-aware icons and color scheme toggle for enhanced user experience.
 *
 * @fileoverview This component structures the top navigation bar, handles responsive behavior,
 * and integrates primary navigation and interactive elements like the logo, feature links,
 * color scheme toggle, and login controls.
 *
 * Behavior:
 * - On larger screens, feature links are accessible via a hoverable dropdown.
 * - On smaller screens, a burger menu toggles a drawer for navigation.
 * - The ColorSchemeToggle allows users to switch between light and dark modes.
 * - Direct navigation to the login page is provided for user authentication.
 */
export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  
  const { user } = useUser();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Logo />
          <Group h="100%" gap={0} visibleFrom="sm">
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Start chatting with your friends on the browser TODAY!
                      </Text>
                    </div>
                    <Link href="/accord">
                      <Button name ="Get started">Get started</Button>
                    </Link>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group>
            <ColorSchemeToggle />
            {!user && ( // If the user is not logged in, display the login button
              <Link href="/accord">
                <Button variant="default">Log in</Button>
              </Link>
            )}
            <UserButton /> {/* The provider won't display this if the user is not logged in */}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>

          <Divider my="sm" />

          {!user && ( // If the user is not logged in, display the login button
            <Link href="/accord">
              <Button variant="default">Log in</Button>
            </Link>
          )}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
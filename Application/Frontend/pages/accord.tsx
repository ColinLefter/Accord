"use client";

import {
  AppShell,
  Burger,
  Group,
  Skeleton,
  ScrollArea,
  Text,
  Tooltip,
  ActionIcon,
  Tabs,
  Switch
} from '@mantine/core';
import { IconUsers, IconUserCircle } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import { Logo } from "@/components/Logo";
import { FriendsTab } from "@/components/FriendsColumn/FriendsTab";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { FooterProfile } from "@/components/FriendsColumn/FooterProfile";
import { Chat } from "@/components/Messaging/Chat";
import React, { useEffect, useState } from 'react';
import { ChatProvider } from "@/contexts/chatContext";
import { NewChatModal } from '@/components/Messaging/NewChatModal';
import classes from "@/components/tabstyling.module.css";
import { useUser, UserButton, UserProfile } from '@clerk/nextjs';

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
  // Default is to just display no username. This will never be the case as you can't be here without an account.
  // It just makes more sense to not show something like guestUser to indicate that the user must have an account if they have reached the shell.
  const [sender, setSender] = useState<string>(''); 

  const [privateMode, setPrivateMode] = useState(true);
  const [chatStarted, setChatStarted] = useState(false);

  const { user } = useUser();

  // IMPORTANT: We are hardcoding user1 as the user who is currently signed in.
  // In the final implementation, we would extract the sender from the user's session via a site-wide authentication provider.
  // Receiver would come from clicking on a friend in the dropdown that appears when clicking the "Send DM" button.
  // It would also come from clicking on a friend in the FriendsTab component as that would trigger the chat to open.
  // Every time we click on a friend who we want to chat with, we check if they are currently subscribed to the chat channel, and if not, we subscribe them.
  // This involves writing a query to the database to check who is in this chat (i.e. who is subscribed to this channel).
  // As for example the sender of this chat will be user1 and the receiver will be user2, but this will be flipped for user2 as they will be the sender in that case.
  useEffect(() => {
    if (user && user.username) {
      // Set sender to user's username if user exists and username is not null/undefined
      setSender(user.username);
    }
  }, [user]); // Dependency array ensures this runs whenever `user` changes

  // note: we are manually handling the currently selected tab via states
  const handleTabSelection = (value: string) => setActiveView(value);
  const handleMessageIconClick = () => setActiveView('message');

  // Function to handle message sending from the Chat component
  // This should be passed down and invoked whenever a message is sent or received
  const onMessageExchange = () => {
    if (!chatStarted) setChatStarted(true);
  };

  // NOTE: we need to make the chat context available throughout the application, hence wrapping the shell with the ChatProvider
  return (
    <ChatProvider>
      <Tabs variant="unstyled" classNames={classes} value={activeView}>
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
              <Group>
                <Switch
                  defaultChecked
                  label="Private mode"
                  onChange={(event) => !chatStarted && setPrivateMode(event.currentTarget.checked)}
                  disabled={chatStarted}  // Disable the switch if the chat has started
                />
                <ColorSchemeToggle/>
              </Group>
            </Group>
          </AppShell.Header>
          <AppShell.Navbar p="md">
            <AppShell.Section grow>
              <Tabs.List grow>
                <Tabs.Tab
                  value="friends"
                  onClick={() => handleTabSelection('friends')}
                  leftSection={<IconUsers />}
                >
                  Friends
                </Tabs.Tab>
                <Tabs.Tab
                  value="profile"
                  onClick={() => handleTabSelection('profile')}
                  leftSection={<IconUserCircle />}
                >
                </Tabs.Tab>
              </Tabs.List>
            </AppShell.Section>
            <AppShell.Section grow component={ScrollArea} mt="15">
              <Group justify="space-between">
                <Text py="md">Direct Messages</Text>
                <NewChatModal/>
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
            {activeView === 'friends' && <FriendsTab sender={sender} privateChat={privateMode} onMessageExchange={onMessageExchange} />}
            {activeView === 'profile' &&
            <Tabs.Panel value="profile">
            <div className="general-container">
              <UserProfile />
            </div>
            </Tabs.Panel>}
            {/* {activeView === 'message' && (
              <Chat
                sender={sender}
                receiver={receiver}
                privateChat={privateMode}
                onMessageExchange={onMessageExchange}  // Pass the handler to detect message exchanges
              />
          )} */}
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
    </ChatProvider>
  );
}
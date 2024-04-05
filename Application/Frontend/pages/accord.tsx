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
  Switch,
  Stack,
  Button
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

import { ServerList } from '@/components/LeftSidebar/ServerList';


import { useCache } from '@/contexts/queryCacheContext';
import { AddFriendModal } from '@/components/FriendsColumn/AddFriendModal';

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
  const { user } = useUser();

  const { lastFetched, setLastFetched } = useCache();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [activeView, setActiveView] = useState('friends'); // Initialize with 'friends'
  // Default is to just display no username. This will never be the case as you can't be here without an account.
  // It just makes more sense to not show something like guestUser to indicate that the user must have an account if they have reached the shell.
  const [sender, setSender] = useState<string>(''); 
  const [senderID, setSenderID] = useState<string>('');
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]); // This taken from the NewChatModal. We need to pass this to the Chat component.

  const [privateMode, setPrivateMode] = useState(true);
  const [chatStarted, setChatStarted] = useState(false);

  // Function to handle chat creation from modal
  const handleCreateChat = (recipients: string[]) => {
    setSelectedRecipients(recipients); // Update the recipients state
    setActiveView('chat'); // 'chat' is the view for showing the chat interface
  };
  
  useEffect(() => {
    if (user && user.username && user.id) {
      // Set sender to user's username if user exists and username is not null/undefined
      setSender(user.username);
      setSenderID(user.id);
    }
  }, [user]); // Dependency array ensures this runs whenever `user` changes

  // note: we are manually handling the currently selected tab via states
  const handleTabSelection = (value: string) => setActiveView(value);

  // Function to handle message sending from the Chat component
  // This should be passed down and invoked whenever a message is sent or received
  const onMessageExchange = () => {
    if (!chatStarted) setChatStarted(true);
  };

  // NOTE: we need to make the chat context available throughout the application, hence wrapping the shell with the ChatProvider
  return (
    <ChatProvider>
      <Tabs value={activeView}>
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
              <Stack gap="xs">
                <Button
                  value="friends"
                  onClick={() => handleTabSelection('friends')}
                  leftSection={<IconUsers />}
                  variant="gradient"
                >
                  Friends
                </Button>
                <AddFriendModal senderID={senderID} lastFetched={lastFetched} setLastFetched={setLastFetched} />
              </Stack>
            </AppShell.Section>
            <AppShell.Section grow component={ScrollArea} mt="15">
              <Group justify="space-between">
                <Text py="md">Text Channels</Text>
                <NewChatModal senderID={senderID} onCreateChat={handleCreateChat} lastFetched={lastFetched} setLastFetched={setLastFetched} />
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


          {activeView === 'friends' && 
            <FriendsTab
              senderUsername={sender}
              senderID={senderID}
              privateChat={privateMode}
              onMessageExchange={onMessageExchange}
              lastFetched={lastFetched}
              setLastFetched={setLastFetched}
            />
          }
          {activeView === 'profile' &&
            <Tabs.Panel value="profile">
              <div className="general-container">
                <UserProfile />
              </div>
            </Tabs.Panel>
          }
          {activeView === 'chat' && (
            <Chat
              senderID={senderID}
              senderUsername={sender}
              receiverIDs={selectedRecipients}
              privateChat={privateMode}
              lastFetched={lastFetched}
              setLastFetched={setLastFetched}
              onMessageExchange={onMessageExchange}  // Pass the handler to detect message exchanges
            />
          )}

          </AppShell.Main>
          <AppShell.Aside p="md" component={ScrollArea}>
            <Text>Servers</Text>
            {/* {Array(60)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} h={30} mt="sm" animate={false} />
              ))} */}
              {/* <ServerList/> */}
          </AppShell.Aside>
        </AppShell>
      </Tabs>
    </ChatProvider>
  );
}
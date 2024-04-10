"use client";

import {
  AppShell,
  Burger,
  Group,
  ScrollArea,
  Text,
  Stack,
  Button
} from '@mantine/core';
import { IconUsers } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import { Logo } from "@/components/Logo";
import { FriendsTab } from "@/components/FriendsColumn/FriendsTab";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { FooterProfile } from "@/components/FriendsColumn/FooterProfile";
import { Chat } from "@/components/Messaging/Chat";
import React, { useEffect, useState } from 'react';
import { NewTextChannelModal } from '@/components/Messaging/NewTextChannelModal';
import { useUser } from '@clerk/nextjs';
import { useCache } from '@/contexts/queryCacheContext';
import { AddFriendModal } from '@/components/FriendsColumn/AddFriendModal';
import { RelinquishAdminModal } from '@/components/Server/RelinquishAdminModal';
import { MemberList } from "@/components/Server/MemberList";
import { TextChannels } from "@/components/TextChannels/TextChannels";
import { useChat } from '@/contexts/chatContext';
import { RemoveFriendModal } from '@/components/FriendsColumn/RemoveFriendModal';
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
  const { activeView, setActiveView, chatProps, selectedChannelId, setSelectedChannelId } = useChat();
  // Default is to just display no username. This will never be the case as you can't be here without an account.
  // It just makes more sense to not show something like guestUser to indicate that the user must have an account if they have reached the shell.
  const [sender, setSender] = useState<string>(''); 
  const [senderID, setSenderID] = useState<string>('');
  const [chatStarted, setChatStarted] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [asideWidth, setAsideWidth] = useState(0);

  useEffect(() => {
    if (user && user.username && user.id) {
      // Set sender to user's username if user exists and username is not null/undefined
      setSender(user.username);
      setSenderID(user.id);
    }
  }, [user]); // Dependency array ensures this runs whenever `user` changes

  useEffect(() => {
    // Deselect the current channel when switching to the friends view
    if (activeView === "friends") {
      setSelectedChannelId('');
    }
  }, [activeView, setSelectedChannelId]);

  useEffect(() => {
    if (activeView === 'chat' && chatProps) {
      // Log to ensure chatProps are as expected
      setAsideWidth(0)
      console.log(chatProps);
    }
    if(activeView === 'textChannel'){
      setAsideWidth(250)
    }
    if(activeView === "friends"){
      setAsideWidth(0)
    }
  }, [activeView, chatProps]);

  // note: we are manually handling the currently selected tab via states
  const handleTabSelection = (value: string) => setActiveView(value);

  // Function to handle message sending from the Chat component
  // This should be passed down and invoked whenever a message is sent or received
  const onMessageExchange = () => {
    if (!chatStarted) setChatStarted(true);
  };

  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
      aside={{ width: asideWidth, breakpoint: 'sm' }}
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
        <AppShell.Section>
          <Stack gap="xs">
            <Button
              value="friends"
              onClick={() => setActiveView('friends')} // Directly set active view to 'friends'
              leftSection={<IconUsers size={16} />}
              variant="gradient"
            >
              Friends
            </Button>
            <AddFriendModal senderID={senderID} lastFetched={lastFetched} setLastFetched={setLastFetched} />
            {/* For testing out the Modal - whenever you can succesfully use it and the changes correctly reflects on Mongo, request a change*/}
            {/* <RelinquishAdminModal senderID={senderID} currentChannelKey = {'0735906bd282dcca9f00d2872b9e57b4a7675245eab16bfa17555df4720147b3'} lastFetched={lastFetched} setLastFetched={setLastFetched} /> */}
            <RemoveFriendModal/>
            <Group justify="space-between">
              <Text py="md">Text Channels</Text>
              <NewTextChannelModal/>
            </Group>
          </Stack>
        </AppShell.Section>
        <AppShell.Section grow component={ScrollArea} mt="0">
          <TextChannels />
        </AppShell.Section>
        <AppShell.Section mt="15">
          <FooterProfile/>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
      {activeView === 'friends' && (
        <FriendsTab
          senderUsername={sender}
          senderID={senderID}
          captureHistory={true} // DMs are never private. That feature is reserved for text channels.
          onMessageExchange={onMessageExchange}
          lastFetched={lastFetched}
          setLastFetched={setLastFetched}
        />
      )}
      {(activeView === 'chat' || activeView === 'textChannel') && chatProps && (
        <Chat {...chatProps} />
      )}
      </AppShell.Main>
      {activeView === 'textChannel' && <AppShell.Aside p="md" component={ScrollArea}>
        <MemberList chatID={selectedChannelId as string} />
      </AppShell.Aside>}
    </AppShell>
  );
}
import React from 'react';
import { Avatar, Group, Text, TextInput, TextInputProps, ActionIcon, useMantineTheme, Stack, Paper  } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

/**
 * FriendsTab provides a dedicated section within the application for displaying and interacting with
 * the user's friends list. It features a search bar allowing users to filter or search through their
 * list of friends quickly. Below the search bar, it enumerates the user's friends, showcasing a
 * hardcoded list for now, with the intention to integrate dynamic friend retrieval in the future.
 *
 * Each friend is displayed within its own paper component to emphasize separation and enhance
 * visual appeal. The component utilizes a Stack layout to organize its child components vertically
 * and maintain a structured and consistent spacing between them.
 *
 * @param {TextInputProps} props - Props inherited from TextInputProps to be passed to the search bar,
 * allowing for customization and functionality extension of the TextInput component within the FriendsTab.
 * 
 * @returns The JSX element representing the friends tab section, including a search bar and a list of friends.
 */
export function FriendsTab(props: TextInputProps) {
    return (
      <Stack>
          {/** Search Box*/}
          <TextInput
              style={{ width: '100%' }}  // Ensure the TextInput takes up only available space
              radius="xl"
              size="md"
              placeholder="Search..."
              leftSection={<IconSearch color="orange" stroke={1.5} />}
              rightSection={
                  <ActionIcon radius="xl" variant="filled">
                      <IconArrowRight stroke={1.5} />
                  </ActionIcon>
              }
          />
      
          {/** "All friends" text*/}
          <Text
              fw={500}
              className="text-xl"
              component="span"
              size="xl" 
          >
              All friends
          </Text>
          {/** Users that are in the friendlist*/}
          {
              Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <Paper color="black" shadow="xs" p="xs" radius="md" key={`friend-${index}`}>
                      <Group py="10" >
                          <Avatar
                              alt={`Friend ${index + 1}`}
                              radius="xl"
                          />
                          <Text size="sm">Friend {index + 1}</Text>
                      </Group>
                    </Paper>
                  ))
          }
      </Stack>
    );
  }
  
import React from 'react';
import { Avatar, Group, Text, TextInput, TextInputProps, ActionIcon, useMantineTheme, Stack, Paper  } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

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
  
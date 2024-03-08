import React from 'react';
import { Avatar, Group, Text, TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

export function FriendsTab(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <div>
        {/** Logo*/}
        <div style={{ marginTop: '10px', textAlign: 'center'}}>
            <Text
                variant="gradient"
                fw={500}
                className="text-xl"
                component="span"
                gradient={{ from: "pink", to: "yellow" }}
                style={{ fontSize: '30px' }} 
            >
                Accord
            </Text>
        </div>

        {/** Search Box*/}
        <TextInput
            style={{ marginTop: '15px' }} // Add some top margin for spacing
            radius="xl"
            size="md"
            placeholder="Search..."
            leftSection={<IconSearch style={{ width: rem(18), height: rem(18), color: 'orange' }} stroke={1.5} />}
            rightSectionWidth={42}
            rightSection={
                <ActionIcon size={32} radius="xl"  variant="filled">
                <IconArrowRight style={{ width: rem(18), height: rem(18), color: 'red' }} stroke={1.5} />
                </ActionIcon>
            }
        />
    
        {/** "All friends" text*/}
        <div style={{ marginTop: '10px',marginLeft: '10px', textAlign: 'left'}}>
            <Text
                fw={500}
                className="text-xl"
                component="span"
                style={{ fontSize: '22px' }} 
            >
                All friends
            </Text>
        </div>
        {/** Users that are in the friendlist*/}
        <div>
            <div style={{ marginTop: '15px',marginLeft: '15px', textAlign: 'left'}}>
                <Group>
                    <Avatar
                    src="https://media.licdn.com/dms/image/D5603AQHiTmbxp85z4g/profile-displayphoto-shrink_800_800/0/1700376659296?e=2147483647&v=beta&t=om4XtUDp4Gtj6_nf9IXamNxmI2SYX8689Pq5_UPJTn0"
                    alt="Colin Lefter"
                    radius="xl"
                    />
                    <Text size="sm">Colin Lefter</Text>
                </Group>
            </div>

            <div style={{ marginTop: '15px',marginLeft: '15px', textAlign: 'left'}}>
                <Group>
                    <Avatar
                    src="https://media.licdn.com/dms/image/D5603AQHiTmbxp85z4g/profile-displayphoto-shrink_800_800/0/1700376659296?e=2147483647&v=beta&t=om4XtUDp4Gtj6_nf9IXamNxmI2SYX8689Pq5_UPJTn0"
                    alt="Colin Lefter"
                    radius="xl"
                    />
                    <Text size="sm">Colin Lefter</Text>
                </Group>
            </div>

            <div style={{ marginTop: '15px',marginLeft: '15px', textAlign: 'left'}}>
                <Group>
                    <Avatar
                    src="https://media.licdn.com/dms/image/D5603AQHiTmbxp85z4g/profile-displayphoto-shrink_800_800/0/1700376659296?e=2147483647&v=beta&t=om4XtUDp4Gtj6_nf9IXamNxmI2SYX8689Pq5_UPJTn0"
                    alt="Colin Lefter"
                    radius="xl"
                    />
                    <Text size="sm">Colin Lefter</Text>
                </Group>
            </div>
        </div>

    
    </div>
  );
}

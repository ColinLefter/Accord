
import { Tabs, rem , Button, px, em, Avatar, Text, Image, Paper, Container , TextInput} from '@mantine/core';
import React, { useState } from 'react';
import { IconPhoto, IconMessageCircle, IconSettings, IconPinInvoke } from '@tabler/icons-react';
import { Registration } from '../Accounts/Registration';

export function HomeTab() {

  return (    
    <div>
      <Tabs color="teal" orientation="vertical" variant='pills' radius="xl">
        <Tabs.List>
            <Tabs.Tab value={"Home"}  style={{ marginRight: "350px"}}>
              <Avatar
                    src="https://ih1.redbubble.net/image.1867608154.1372/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                    alt="Server Profile"
                    radius="xl"
                    />
              
              {/* Content of each tab */}
              {/* {tab.title} */}
            </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={"Home"}>
              {/* Content of each tab */}
              <Text size='xl'>The content of Home</Text> 
            </Tabs.Panel>
      </Tabs>
      
      
    </div>
    //</>
  );
}

import { Tabs, rem , Button, px, em, Avatar, Text, Image, Paper, Container , TextInput} from '@mantine/core';
import React, { useState } from 'react';
import { IconPhoto, IconMessageCircle, IconSettings, IconPinInvoke } from '@tabler/icons-react';

export function ServerList() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const [tabs, setTabs] = useState([{ title: 'Server 1', key: '2', content: "This is server 1" }]);
  const [activeTab, setActiveTab] = useState('2');
  const [tabCounter, setTabCounter] = useState(2);
  const [newTabName, setNewTabName] = useState('');
  const [isAdding, setIsAdding] = useState(true);


  const addTab = async () => {
    const newTabCounter = tabCounter + 1;
    const newKey = `${newTabCounter}`;
    //const newTabs = [...tabs, { title: `Tab ${newTabCounter}`, key: newKey }];
    const newTitle = newTabName || `Server ${newTabCounter}`
    const newContent = `Content of ${newTabName || `Tab ${newTabCounter}`}`
    const newTabs = [...tabs, { title: newTabName || `Server ${newTabCounter}`, key: newKey, content: `Content of ${newTabName || `Tab ${newTabCounter}`}` }];

    setTabs(newTabs);
    setActiveTab(newKey);
    setTabCounter(newTabCounter);
    setNewTabName('');
    setIsAdding(!isAdding)
    console.log(tabs)
    try {
      const response = await fetch('/api/servers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serverName: newTabName, serverID: newKey, serverDesc: newContent }),
        //body: JSON.stringify(tabs),
      });
      const data = await response.json(); 
      if (!response.ok) {
        throw new Error('Failed to add server');
      }
  
      // Handle success
      // Reset form fields, update UI, etc.
    } catch (error) {
      console.error('Error adding tab:', error);
      // Handle error
    }
    alert(JSON.stringify(newTabs, null, 2));
  };
  const Adding = () => {
    console.log(isAdding)
    setIsAdding(!isAdding)
  }
  return (    
    <div>
      {isAdding && 
      <Tabs color="teal" orientation="vertical" variant='pills' radius="xl">
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab value={tab.key}  style={{ marginRight: "350px"}}>
              <Avatar
                    src="https://www.freebiefindingmom.com/wp-content/uploads/2023/01/free-printable-Old-English-calligraphy-capital-letter-A-1.jpg"
                    alt="Server Profile"
                    radius="xl"
                    />
              
              {/* Content of each tab */}
              {/* {tab.title} */}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
        <Tabs.Panel value={tab.key}>
              {/* Content of each tab */}
              <Text size='xl'>The content of {tab.title}</Text> 
            </Tabs.Panel>
             ))}
      </Tabs>
      }
      {!isAdding && 
      <Container size="xs" my={40}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="lg">
          <Text ta="center" className="text-3xl" fw={700}>
            Create Server
          </Text>
          <form onSubmit={addTab}>
            <TextInput
              label="Server name"
              required
              mt="md"
              name="serverName"
              value={newTabName}
              onChange={(e) => setNewTabName(e.target.value)}
              style={{ marginBottom: "30px"}}
            />

            <div className="py-4">
              <Button type="submit" className="bg-black" fullWidth>
                Create server
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
      } 
      {isAdding && 
      <Button style={{ height: em(50), border: px(32) }} onClick={Adding} radius="xl">
                    Add Server
      </Button>
      }
      
    </div>
    //</>
  );
}
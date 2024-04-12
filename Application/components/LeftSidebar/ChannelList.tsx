
import { Tabs, rem , Button, px, em, Text, Paper, Container , TextInput} from '@mantine/core';
import React, { useState } from 'react';

export function ChannelList() {
  const [tabs, setTabs] = useState([
    {_id: "",  serverName: 'Server 1', serverID: '1', serverDesc: "This is server 1" },
    {_id: "",  serverName: 'Server 2', serverID: '2', serverDesc: "This is server 2" },
    {_id: "",  serverName: 'Server 3', serverID: '3', serverDesc: "This is server 3" }]);
  const [activeTab, setActiveTab] = useState('2');
  const [tabCounter, setTabCounter] = useState(3);
  const [newTabName, setNewTabName] = useState('');
  const [isAdding, setIsAdding] = useState(true);
const addTab = () => {

  const newTabCounter = tabCounter + 1;
  const newServerID = `${newTabCounter}`;
  //const newTabs = [...tabs, { serverName: `Tab ${newTabCounter}`, serverID: newserverID }];
  const newServerName = newTabName || `Server ${newTabCounter}`
  const newServerDesc = `Content of ${newTabName || `Tab ${newTabCounter}`}`
  const newTabs = [...tabs, { _id: "", serverName: newTabName || `Server ${newTabCounter}`, serverID: newServerID, serverDesc: `Content of ${newTabName || `Tab ${newTabCounter}`}` }];

  setTabs(newTabs);
  setActiveTab(newServerID);
  setTabCounter(newTabCounter);
  setNewTabName('');
  setIsAdding(!isAdding)

  alert(JSON.stringify(newTabs, null, 2));
};
const Adding = () => {
  setIsAdding(!isAdding)
}
  return (    
    <div>
      
      {isAdding &&  
      <div>
      Channels
      <Button style={{ height: em(20), border: px(32) }} onClick={Adding} radius="xl">
                    +
      </Button>
      </div>
      }
      {isAdding && 
      <Tabs color="teal" orientation="vertical" variant='default' radius="xl">
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab value={tab.serverID}  style={{ marginRight: "350px"}}>
              
              {/* Content of each tab */}
              {tab.serverName}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
        <Tabs.Panel value={tab.serverID}>
              {/* Content of each tab */}
              <Text size='xl'>The content of {tab.serverName}</Text> 
            </Tabs.Panel>
             ))}
      </Tabs>
      }
      {!isAdding && 
      <Container size="xs" my={40}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="lg">
          <Text ta="center" className="text-3xl" fw={700}>
            Create Channel
          </Text>
          <form onSubmit={addTab}>
            <TextInput
              label="Channel Name"
              required
              mt="md"
              name="channelName"
              value={newTabName}
              onChange={(e) => setNewTabName(e.target.value)}
              style={{ marginBottom: "30px"}}
            />

            <div className="py-4">
              <Button type="submit" className="bg-black" fullWidth>
                Create Channel
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
      } 
      
    </div>
    // </>
  );
}
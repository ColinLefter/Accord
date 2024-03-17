
import { Tabs, rem , Button, px, em, Avatar, Text, Image, Paper, Container , TextInput} from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { IconPhoto, IconMessageCircle, IconSettings, IconPinInvoke } from '@tabler/icons-react';

export function ServerList() {
  const iconStyle = { width: rem(12), height: rem(12) };

  
  
  const [tabs, setTabs] = useState([{_id: "",  serverName: 'Server 1', serverID: '2', serverDesc: "This is server 1" }]);
  const [activeTab, setActiveTab] = useState('2');
  const [tabCounter, setTabCounter] = useState(2);
  const [newTabName, setNewTabName] = useState('');
  const [isAdding, setIsAdding] = useState(true);
  
  const getServersOfLoggedInUser = async ()  => {

    const response = await fetch('/api/getServersListOfUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json(); 
  if (!response.ok) {
    throw new Error('Failed to add server');
  }

  // Handle success
  // Reset form fields, update UI, etc.
  //alert(data.listOfServerIDs)
  // console.log(data.listOfServerIDs)
  setServerIDsList(data.listOfServerIDs)
  //alert(data.listOfServerIDs)
  //alert(serverIDsList)
  return data.listOfServerIDs;
}
  
  const [serverIDsList, setServerIDsList] = useState(async () => {
    const initialState = await getServersOfLoggedInUser();
    console.log(initialState)
    return initialState;})
    //console.log(getServersOfLoggedInUser())
   
  let xd:any
  const getServersFromServerIDList = async () => {
    getServersOfLoggedInUser()
    let serverArray = []
    let serverObj = {}
    //alert(ServerIDArray)
    console.log(serverIDsList)
    const response = await fetch('/api/initializingServerList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({serverIDList: serverIDsList}),
    });
    const data = await response.json(); 
    serverArray = data.returnedServerObj;
    console.log("hello");
    console.log(tabs)
    console.log(serverArray);
    // const newTabs = [...tabs, serverArray];
    xd = serverArray
    setTabs(serverArray);
    return data.returnedServerObj;
  }

  
//   const [tabs, setTabs] = useState(async () => {
//     const initialState = await getServersFromServerIDList();
//     console.log(initialState)
//     return initialState;
// });


  const addTab = async () => {

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
    console.log(tabs)

    try {
      const response = await fetch('/api/servers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serverName: newTabName, serverID: newServerID, serverDesc: newServerDesc }),
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
//   useEffect(() => {
//     getServersOfLoggedInUser()
//     getServersFromServerIDList()
//     console.log("loaded");
//  });


  return (    
    <div>
      <Button style={{ height: em(50), border: px(32) }} onClick={getServersFromServerIDList} radius="xl">
        aa
      </Button>
      {isAdding && 
      <Tabs color="teal" orientation="vertical" variant='pills' radius="xl">
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab value={tab.serverID}  style={{ marginRight: "350px"}}>
              <Avatar
                    src="https://www.freebiefindingmom.com/wp-content/uploads/2023/01/free-printable-Old-English-calligraphy-capital-letter-A-1.jpg"
                    alt="Server Profile"
                    radius="xl"
                    />
              
              {/* Content of each tab */}
              {/* {tab.serverName} */}
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
      <Button style={{ height: em(50), border: px(32) }} onClick={getServersOfLoggedInUser} radius="xl">
                    Check User Server
      </Button>
      
    </div>
    // </>
  );
}
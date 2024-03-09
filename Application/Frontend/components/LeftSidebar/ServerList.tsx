
import { Tabs, rem , Button, px, em, Avatar, Text, Image } from '@mantine/core';
import React, { useState } from 'react';
import { IconPhoto, IconMessageCircle, IconSettings, IconPinInvoke } from '@tabler/icons-react';
export function ServerList() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const [tabs, setTabs] = useState([{ title: 'Tab 1', key: '1' }]);
  const [activeTab, setActiveTab] = useState('1');
  const [tabCounter, setTabCounter] = useState(1);
  const [newTabName, setNewTabName] = useState('');
  const [isAdding, setIsAdding] = useState(true);

  const addTab = () => {
    const newTabCounter = tabCounter + 1;
    const newKey = `${newTabCounter}`;
    //const newTabs = [...tabs, { title: `Tab ${newTabCounter}`, key: newKey }];
    const newTabs = [...tabs, { title: newTabName || `Server ${newTabCounter}`, key: newKey, content: `Content of ${newTabName || `Tab ${newTabCounter}`}` }];

    setTabs(newTabs);
    setActiveTab(newKey);
    setTabCounter(newTabCounter);
    setNewTabName('');
    setIsAdding(!isAdding)
    console.log(tabs)
  };
  const Adding = () => {
    console.log(isAdding)
    setIsAdding(!isAdding)
  }
  return (    
    <div>
      <Tabs color="teal" orientation="vertical" variant='pills' radius="xl">
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab value={tab.key}>
              <Avatar
                    src="https://www.freebiefindingmom.com/wp-content/uploads/2023/01/free-printable-Old-English-calligraphy-capital-letter-A-1.jpg"
                    alt="Colin Lefter"
                    radius="xl"
                    />

              {/* Content of each tab */}
              {tab.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {tabs.map((tab) => (
        <Tabs.Panel value={tab.key}>
              {/* Content of each tab */}
              The content of {tab.title}
            </Tabs.Panel>
             ))}
      </Tabs>
      {!isAdding && <><div>
        <input 
        type="text" 
        placeholder="Enter name of your server" 
        value={newTabName} 
        onChange={(e) => setNewTabName(e.target.value)} 
        />
      </div>
      <Button style={{ height: em(40) }} onClick={addTab} radius="xl">
      <Text c={""}> XDXD</Text>
      </Button></>}
      {isAdding && <Button style={{ height: em(40) }} onClick={Adding} radius="xl" color='white'>
        <Image
                    src="https://banner2.cleanpng.com/20180610/eau/kisspng-plus-and-minus-signs-clip-art-5b1d241b5e4aa4.7318136215286364433862.jpg"
                    alt="Colin Lefter"
                    radius="xl"
                    />
      </Button>}
      
    </div>
    //</>
  );
}

import { Tabs, rem , Button } from '@mantine/core';
import React, { useState } from 'react';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
export function ServerList() {
  const iconStyle = { width: rem(12), height: rem(12) };
  // const [tabs, setTabs] = useState(['Tab 1']);

  // const addTab = () => {
  //   const newTabs = [...tabs, `Tab ${tabs.length + 1}`];
  //   setTabs(newTabs);
  // }
  const [tabs, setTabs] = useState([{ title: 'Tab 1', key: '1' }]);
  const [activeTab, setActiveTab] = useState('1');
  const [tabCounter, setTabCounter] = useState(1);

  const addTab = () => {
    const newTabCounter = tabCounter + 1;
    const newKey = `${newTabCounter}`;
    const newTabs = [...tabs, { title: `Tab ${newTabCounter}`, key: newKey }];
    setTabs(newTabs);
    setActiveTab(newKey);
    setTabCounter(newTabCounter);
    console.log(tabs)
  };
  
  return (
    //<>
    // <Tabs color="pink" variant="pills" radius="xl" orientation="vertical" defaultValue="gallery" className="bg-[#0284c7] text-[#0284c7]">
    //   <Tabs.List>
    //     <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
    //       Gallery
    //     </Tabs.Tab>
    //     <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
    //       Messages
    //     </Tabs.Tab>
    //     <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
    //       Settings
    //     </Tabs.Tab>
    //   </Tabs.List>

    //   <Tabs.Panel value="gallery">
    //     Gallery tab content
    //   </Tabs.Panel>

    //   <Tabs.Panel value="messages">
    //     Messages tab content
    //   </Tabs.Panel>

    //   <Tabs.Panel value="settings">
    //     Settings tab content
    //   </Tabs.Panel>

    //   {/* <Button onClick={addTab}>Add Tab</Button> */}
    // </Tabs>
    
    <div>
      <Tabs color="black" orientation="vertical" variant='pills'>
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab value={tab.key}>
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

      <Button className="bg-black" onClick={addTab}>Add Tab</Button>
    </div>
    //</>
  );
}
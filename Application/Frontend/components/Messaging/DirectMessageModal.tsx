"use client";


import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Chat } from "@/components/Messaging/Chat";
import { Modal, Button, Stack, Combobox, useCombobox, InputBase, Input } from '@mantine/core';

// Simulate a list of friends/usernames.
const friends = ['JohnDoe', 'JaneDoe', 'Alice', 'Bob', 'Charlie'];

export function DirectMessageModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const [receiver, setReceiver] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = friends.map((friend) => (
    <Combobox.Option value={friend} key={friend}>
      {friend}
    </Combobox.Option>
  ));

  // Dummy sender username
  const sender = 'YourUsername';  // Replace 'YourUsername' with the actual logged-in user's username
  const [activeView, setActiveView] = useState(''); // Controls which view to display
  
  const handleSubmit = () => {
    if (receiver) {
      setActiveView('message');
      close();  // Close the modal once the user decides to send a message
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="New DM">
        <Stack>
          <Combobox
            store={combobox}
            onOptionSubmit={(val) => {
              setReceiver(val);
              combobox.closeDropdown();
            }}
          >
            <Combobox.Target>
              <InputBase
                component="button"
                type="button"
                pointer
                rightSection={<Combobox.Chevron />}
                rightSectionPointerEvents="none"
                onClick={() => combobox.toggleDropdown()}
              >
                {receiver || <Input.Placeholder>Pick a friend</Input.Placeholder>}
              </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
              <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
          </Combobox>
          
          <Button onClick={handleSubmit}>Send DM to user</Button>
        </Stack>
      </Modal>

      <Button onClick={open}>Open modal</Button>

      {activeView === 'message' && receiver && (
        <Chat
          sender={sender}
          receiver={receiver}
          privateChat={true}  // Assuming privateChat mode should be enabled for DMs
          onMessageExchange={() => console.log('Message exchange detected')}  // Implement the appropriate handler
        />
      )}
    </>
  );
}
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Stack } from '@mantine/core';

function DirectMessageModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Send direct message">
        <Stack>

        </Stack>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
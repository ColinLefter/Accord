import { Message } from './Message';
import { Stack, Textarea } from '@mantine/core';

export function MessagingInterface() {
  return (
    <div className="messaging-container">
      <Stack justify="space-between" style={{ height: '100%' }}>
        <Stack gap="md">
          <Stack gap="0">
            <Message username="user1" message="Hello from user 1" firstMessage date="Today at 16:38" />
            <Message username="user1" message="This is my second message" date="Today at 16:39" />
            <Message username="user1" message="And now my third" date="Today at 16:40" />
          </Stack>
        
          <Stack gap="0">
            <Message username="user2" message="User 2 joins the chat" firstMessage date="Today at 16:41" />
            <Message username="user2" message="User 2's second message" date="Today at 16:42" />
            <Message username="user2" message="More from user 2" date="Today at 16:43" />
          </Stack>
          
          <Stack gap="0">
            <Message username="user3" message="User 3 here, hi!" firstMessage date="Today at 16:44" />
            <Message username="user3" message="Another from user 3" date="Today at 16:45" />
            <Message username="user3" message="User 3's message again" date="Today at 16:46" />
          </Stack>
        </Stack>

        <Textarea
          placeholder="Message @user2"
          autosize
          minRows={1}
          maxRows={10}
        />
      </Stack>
    </div>
  );
}

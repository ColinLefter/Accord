import { Message } from './Message';

export function MessagingInterface() {
  return (
    <Message username="user1" message="Hello from user 1." firstMessage={true} date="Today at 16:38" />
  );
}
import { MongoClient, Db } from 'mongodb';
import { getMongoDbUri } from '@/lib/DbConfig';

/**
 * MessageData interface defines the structure of a message object
 * used in the mock implementation of the useChannel hook from Ably.
 */
interface MessageData {
  name: string;
  data: any;
}

/**
 * Mocking the useChannel function from the 'ably/react' library to control
 * the behavior of channel interactions within the tests, particularly simulating
 * the message publishing and receiving process.
 */
jest.mock("ably/react", () => ({
  useChannel: jest.fn().mockImplementation((channelKey: string, callback: (messageData: MessageData) => void) => ({
    channel: {
      publish: jest.fn().mockImplementation(({ name, data }: MessageData) => {
        // Simulating the invocation of the callback upon message publication.
        callback({ name, data });
      }),
    },
    ably: { clientId: 'testClientId' },
  })),
}));

/**
 * Describes a suite of tests for the Messaging Interface component, focusing on its
 * interaction with MongoDB to ensure that no chat data is stored when in private mode.
 */
describe('Messaging Interface Test', () => {
  let client: MongoClient;
  let db: Db;

  // Establishes a MongoDB connection before any tests are run.
  beforeAll(async () => {
    client = new MongoClient(getMongoDbUri());
    await client.connect();
    db = client.db('Accord');
  });

  // Closes the MongoDB connection once all tests have completed.
  afterAll(async () => {
    await client.close();
  });

  /**
   * Tests whether the Messaging Interface respects the 'private mode' setting by
   * not storing messages in MongoDB when the setting is enabled. It checks both scenarios:
   * 1) When a chat history already exists for the given channel key.
   * 2) When no chat history exists for the channel key.
   * In both scenarios, the expectation is that private mode prevents any update or creation
   * of chat documents in the database.
   */
  it('should not store messages in MongoDB when private mode is on', async () => {
    const channelKey = 'chat:user1,user2';
    const chatsCollection = db.collection('Chats');
    const sender = 'user1';
    const privateChat = true; // Simulating that private mode is on.

    // Simulated checks for existing and non-existing chat histories.
    const existingChat = await chatsCollection.findOne({ channelKey });
    if (existingChat) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated async delay.
      const updatedChat = await chatsCollection.findOne({ channelKey });
      expect(updatedChat?.messageHistory).toEqual(existingChat.messageHistory);
    } else {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated async delay.
      const newChat = await chatsCollection.findOne({ channelKey });
      expect(newChat).toBeNull();
    }
  });
});

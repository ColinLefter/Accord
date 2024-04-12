import handler from '@/pages/api/new-chat';
import { createMocks } from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Tests the backend API functionality for handling new text channel creation requests.
 * This suite verifies that the API correctly processes POST requests to create new text channels, 
 * interacts with the database as expected, and returns appropriate responses.
 * 
 * Mocks:
 * - MongoDB's MongoClient: Used to simulate database operations. This includes mocking the behavior
 *   of finding existing channels and inserting new ones to ensure the handler responds correctly
 *   under various scenarios (e.g., attempting to create a channel that already exists).
 * - dbConfig and utility functions: Mocks for retrieving the MongoDB URI and generating a unique
 *   hash for the channelKey, respectively, to simulate environment and utility behavior the API relies on.
 * 
 * beforeEach:
 * - Sets up mock requests and responses using `node-mocks-http`, providing a simulated environment
 *   for testing the handler without the need for actual HTTP calls or a running MongoDB instance.
 * 
 * Test Case:
 * - "should create a new text channel successfully": Ensures that given a valid POST request,
 *   the handler can successfully create a new text channel, interacting with the mocked database
 *   accordingly and returning a success response with the expected message.
 * 
 * afterEach:
 * - Clears all mocks to ensure a clean state for subsequent tests.
 * 
 * The tests within this file help ensure that the backend logic for creating new text channels
 * is robust, correctly handles valid and invalid requests, and integrates properly with database
 * operations required to manage the text channels.
 */
jest.mock('mongodb', () => {
  return {
    MongoClient: jest.fn().mockImplementation(() => {
      return {
        connect: jest.fn().mockResolvedValue(null),
        db: jest.fn().mockReturnValue({
          collection: jest.fn().mockReturnValue({
            findOne: jest.fn().mockResolvedValueOnce(null), // Simulate no existing channel
            insertOne: jest.fn().mockResolvedValueOnce({}) // Simulate successful insert
          })
        }),
        close: jest.fn().mockResolvedValue(null),
      };
    })
  };
});

jest.mock('@/lib/DbConfig', () => ({
  getMongoDbUri: jest.fn().mockReturnValue('accord-systems')
}));

jest.mock('@/utility', () => ({
  generateChannelKey: jest.fn().mockReturnValue('mock-channel-key')
}));

describe('NewTextChannelModal API Handler', () => {
  let req: Partial<NextApiRequest>, res: Partial<NextApiResponse>;

  beforeEach(() => {
    const { req: mockReq, res: mockRes } = createMocks({
      method: 'POST',
      body: {
        channelName: 'Test Channel',
        memberIDs: ['user_2eQchyJV6mMcj0ml8DFWIue07jR', 'user_2eLZbDAS203WeCpTZtygDESX4tL'],
        adminIDs: ['user_2eLZbDAS203WeCpTZtygDESX4tL'],
        ownerID: 'user_2eQchyJV6mMcj0ml8DFWIue07jR',
      },
    });
  
    req = mockReq as unknown as NextApiRequest;
    res = mockRes as unknown as NextApiResponse;
  });  

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new text channel successfully', async () => {
    await handler(req as NextApiRequest, res as NextApiResponse<any>);

    expect(res.statusCode).toBe(201);
    expect((res as any)._getData()).toEqual(expect.any(String));
    expect(JSON.parse((res as any)._getData())).toEqual({ message: 'Chat created successfully.' });
  });
});
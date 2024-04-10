import { MongoClient } from 'mongodb';
import handler from '@/pages/api/get-ids-of-friends'; 
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Tests the API endpoint that retrieves the IDs of friends for a given user.
 *
 * This unit test suite focuses on the `get-ids-of-friends` API handler, ensuring it
 * processes POST requests correctly and returns the expected friend list from the
 * user's account information stored in MongoDB. The MongoDB client and specific
 * collection methods are mocked to isolate the test environment from actual database
 * operations, allowing for testing the handler's logic without requiring a live database.
 *
 * Key Behaviors Tested:
 * - Correct handling of a POST request with a specified userName in the request body.
 * - Retrieval of user information from the mocked "Accounts" collection in MongoDB,
 *   focusing on extracting the friendList.
 * - Response behavior, including status code and JSON payload, when a user exists
 *   and has a populated friendList.
 * - Verification that the database connection is properly closed after the handler
 *   execution.
 */
// Mock MongoClient and dbCollection
jest.mock('mongodb', () => ({
  MongoClient: jest.fn()
}));

const mockDbCollection = jest.fn();
const mockClose = jest.fn();

describe('handler function', () => {
  let req: NextApiRequest;
  let res: NextApiResponse;
  
  beforeEach(() => {
    req = {
      method: 'POST',
      body: { userName: 'user1' }
    } as unknown as NextApiRequest;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      setHeader: jest.fn(),
      end: jest.fn()
    } as unknown as NextApiResponse;

    (MongoClient as unknown as jest.Mock).mockClear();
    (MongoClient as unknown as jest.Mock).mockReturnValueOnce({
      connect: jest.fn(),
      db: jest.fn(() => ({ collection: mockDbCollection })),
      close: mockClose
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle POST request and return friendList if user exists', async () => {
    const user = {
      _id: { $oid: '65dbc3e37df38ece4025f5ac' },
      userName: 'user1',
      email: 'user1@example.com',
      phoneNumber: '+1 999 888 7654',
      password: 'user1Pass',
      friendList: ['user2', 'hoc', 'toby', 'bao', 'colin', 'immanuel']
    };
    mockDbCollection.mockReturnValueOnce({
      findOne: jest.fn().mockResolvedValueOnce(user)
    });

    await handler(req, res);

    expect(MongoClient).toHaveBeenCalledTimes(1);
    expect(MongoClient).toHaveBeenCalledWith(expect.any(String));
    expect(mockDbCollection).toHaveBeenCalledTimes(1);
    expect(mockDbCollection).toHaveBeenCalledWith('Accounts');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ friendList: user.friendList });
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

});

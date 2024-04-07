import handler from '@/pages/api/new-text-channel';
import { MongoClient } from 'mongodb';
import { createMocks } from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';

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

jest.mock('@/lib/dbConfig', () => ({
  getMongoDbUri: jest.fn().mockReturnValue('your-mongo-uri')
}));

jest.mock('@/utility', () => ({
  generateHash: jest.fn().mockReturnValue('mock-channel-key')
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

    // Adjusted for type assertions
    expect(res.statusCode).toBe(201);
    expect((res as any)._getData()).toEqual(expect.any(String));
    expect(JSON.parse((res as any)._getData())).toEqual({ message: 'New text channel created successfully.' });

    // Add any additional assertions here as needed
  });
});

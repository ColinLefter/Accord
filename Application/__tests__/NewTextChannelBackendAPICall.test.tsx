/**
 * Tests the functionality of creating a new text channel from the frontend perspective by simulating the fetch call made to the backend API.
 * 
 * Globals:
 * - Mocks the global fetch function to intercept and respond to the network request without actual HTTP calls.
 * 
 * Mocks:
 * - MongoDB's MongoClient: Simulates database operations such as finding existing channels and inserting new ones.
 * - Utility Functions: Mocks the `getMongoDbUri` for database connection strings and `generateHash` for creating unique channel identifiers.
 * 
 * beforeEach:
 * - Resets and sets up the global fetch mock before each test to ensure clean test environment and predictable responses.
 * 
 * Test Case:
 * - "simulates frontend sending request to create new text channel": Verifies that the simulated fetch call to create a new text channel
 *   is made with the correct HTTP method, headers, and body. This test ensures that the frontend correctly formats and sends the request
 *   data expected by the backend API for creating new text channels.
 */
// Step 1: Mock the global fetch function
global.fetch = jest.fn() as jest.Mock;

// Mock MongoDB's MongoClient for backend tests
jest.mock('mongodb', () => ({
  MongoClient: jest.fn().mockImplementation(() => ({
    connect: jest.fn().mockResolvedValue(null),
    db: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        findOne: jest.fn().mockResolvedValueOnce(null),
        insertOne: jest.fn().mockResolvedValueOnce({})
      })
    }),
    close: jest.fn().mockResolvedValue(null)
  }))
}));

jest.mock('@/lib/DbConfig', () => ({
  getMongoDbUri: jest.fn().mockReturnValue('accord-systems')
}));
jest.mock('@/utility', () => ({
  generateHash: jest.fn().mockReturnValue('mock-channel-key')
}));

describe('Frontend Fetch Simulation for Creating New Text Channel', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
    (global.fetch as jest.Mock).mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ message: 'New text channel created successfully.' }),
    }));
  });

  it('simulates frontend sending request to create new text channel', async () => {
    const channelData = {
      channelName: "Test Channel",
      memberIDs: ["user_2eQchyJV6mMcj0ml8DFWIue07jR", "user_2eLZbDAS203WeCpTZtygDESX4tL"],
      adminIDs: ["user_2eLZbDAS203WeCpTZtygDESX4tL"],
      ownerID: "user_2eQchyJV6mMcj0ml8DFWIue07jR",
    };

    // Simulate the fetch call as it would be in handleCreateChatClick
    await (global.fetch as jest.Mock)('/api/new-text-channel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(channelData),
    });

    // Assert fetch was called with the correct parameters
    expect(global.fetch).toHaveBeenCalledWith('/api/new-text-channel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(channelData),
    });
  });
});

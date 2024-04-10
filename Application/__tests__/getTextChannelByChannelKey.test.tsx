import { MongoClient } from "mongodb";
import { getMongoDbUri } from "@/lib/dbConfig";

// Mocking MongoDB MongoClient and dbConfig with jest
jest.mock('mongodb', () => ({
  MongoClient: jest.fn().mockImplementation(() => ({
    connect: jest.fn().mockResolvedValue(null),
    db: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        findOne: jest.fn().mockResolvedValueOnce({
          _id: "6615f1dd2e237b390acbee35",
          channelKey: "97900261b029c134aac435c65290ace78f86f6eec2c328fa9c43ff92a2c42577",
          channelName: "One Admin",
          dateCreated: 1712714205007,
          ownerID: "user_2eQchyJV6mMcj0ml8DFWIue07jR",
          memberIDs: [],
          adminIDs: ["user_2eQemKMCkOiRiUa66oL3vKxg3WL"],
          captureHistory: false,
          messageHistory: [],
        }) // Mocked response to simulate a successful find operation
      })
    }),
    close: jest.fn().mockResolvedValue(null),
  }))
}));

jest.mock('@/lib/dbConfig', () => ({
  getMongoDbUri: jest.fn().mockReturnValue('accord-systems')
}));

describe("Channel Document Retrieval Mock Test", () => {
  let client: MongoClient;

  beforeAll(async () => {
    // Setup mock MongoDB connection
    client = new MongoClient(getMongoDbUri());
    await client.connect();
  });

  afterAll(async () => {
    await client.close();
  });

  it("should retrieve a channel document successfully by channelName", async () => {
    const channelKey = "97900261b029c134aac435c65290ace78f86f6eec2c328fa9c43ff92a2c42577"; // The channelName you're testing for
    const channelsCollection = client.db("Accord").collection("Chats");

    const result = await channelsCollection.findOne({ channelKey });

    // Runtime check to ensure 'result' is not null
    expect(result).not.toBeNull();

    if (result) {
        expect(result.ownerID).toBe("user_2eQchyJV6mMcj0ml8DFWIue07jR");
        expect(result.adminIDs).toContain("user_2eQemKMCkOiRiUa66oL3vKxg3WL");
    } else {
        fail("result is null");
    }
  });
});

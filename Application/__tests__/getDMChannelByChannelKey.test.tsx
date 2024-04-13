import { MongoClient } from "mongodb";
import { getMongoDbUri } from "@/lib/DbConfig";

/**
 * Tests the retrieval process of a direct message channel document by its channelKey from the "Chats" collection.
 *
 * Utilizes mocked MongoDB operations to ensure the logic for fetching direct message channel details functions correctly,
 * focusing on isolating the test environment from real database interactions. This mock setup allows verifying the application's
 * ability to query and return specific channel information based on the channelKey, without an actual database connection.
 *
 * Key Aspects Tested:
 * - Successful mock setup of the MongoClient and the dbConfig, ensuring the MongoDB connection is simulated accurately.
 * - Retrieval of a direct message channel document based on a provided channelKey, validating the extraction of relevant
 *   channel information such as memberIDs and messageHistory from the database.
 * - The test checks for the presence and correctness of the returned document's data, emphasizing the direct message
 *   channel's details to confirm the application's data fetching logic aligns with expected outcomes.
 */
// Mocking MongoDB MongoClient and dbConfig with jest
jest.mock('mongodb', () => ({
  MongoClient: jest.fn().mockImplementation(() => ({
    connect: jest.fn().mockResolvedValue(null),
    db: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        findOne: jest.fn().mockResolvedValueOnce({
          _id: "6615ec642e237b390acbee32",
          channelKey: "75c8e48a0221a098312afa1507af74c962249451c257e4bec750db556655fc0b",
          dateCreated: 1712712804271,
          memberIDs: ["user_2eQchyJV6mMcj0ml8DFWIue07jR", "user_2eQemKMCkOiRiUa66oL3vKxg3WL"],
          messageHistory: [
            {
              clientID: "user_2eQchyJV6mMcj0ml8DFWIue07jR",
              captureHistory: true,
              username: "testuser",
              message: "Hi!",
              date: "2024/04/09 18:33",
              connectionID: "user_2eQchyJV6mMcj0ml8DFWIue07jR",
              userProfileURL: "https://img.clerk.com/not-a-real-image",
            }
          ],
        }) // Mocked response to simulate a successful find operation
      })
    }),
    close: jest.fn().mockResolvedValue(null),
  }))
}));

jest.mock('@/lib/DbConfig', () => ({
  getMongoDbUri: jest.fn().mockReturnValue('accord-systems')
}));

describe("Direct Message Channel Retrieval Mock Test", () => {
  let client: MongoClient;

  beforeAll(async () => {
    // Setup mock MongoDB connection
    client = new MongoClient(getMongoDbUri());
    await client.connect();
  });

  afterAll(async () => {
    await client.close();
  });

  it("should retrieve a direct message channel document successfully by channelKey", async () => {
    const channelKey = "75c8e48a0221a098312afa1507af74c962249451c257e4bec750db556655fc0b";
    const channelsCollection = client.db("Accord").collection("Chats");

    const result = await channelsCollection.findOne({ channelKey });

    // Runtime check to ensure 'result' is not null
    expect(result).not.toBeNull();

    if (result) {
        expect(result.memberIDs).toEqual(expect.arrayContaining(["user_2eQchyJV6mMcj0ml8DFWIue07jR", "user_2eQemKMCkOiRiUa66oL3vKxg3WL"]));
        expect(result.messageHistory).toEqual(expect.arrayContaining([
          expect.objectContaining({
            username: "testuser",
            message: "Hi!"
          })
        ]));
    } else {
        fail("result is null");
    }
  });
});
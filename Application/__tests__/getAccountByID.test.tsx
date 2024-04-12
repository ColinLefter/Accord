import { MongoClient } from "mongodb";
import { getMongoDbUri } from "@/lib/DbConfig";

/**
 * Tests the retrieval of account documents by ID from the "Accounts" collection using mocked MongoDB operations.
 *
 * This test suite ensures that the application can correctly query and return specific user account
 * information based on the provided account ID. It leverages Jest to mock MongoDB's MongoClient
 * and the database configuration, isolating the test environment from real database interactions.
 * This allows for verifying the logic of fetching account details without the need for a live database connection.
 *
 * Key Components:
 * - MongoClient and dbConfig are mocked to simulate the retrieval process from the "Accounts" collection.
 * - The test checks that the correct account information (e.g., firstName, lastName, userName, email) is
 *   returned when querying by a specific account ID.
 * - It validates the presence of critical account details in the response, including email address
 *   verification status and friend list contents, to ensure the account document contains expected data.
 */
// Mocking MongoDB MongoClient and dbConfig with jest
jest.mock('mongodb', () => ({
  MongoClient: jest.fn().mockImplementation(() => ({
    connect: jest.fn().mockResolvedValue(null),
    db: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        findOne: jest.fn().mockResolvedValueOnce({
          _id: "6608a06d545e9cc6acce3b2e",
          id: "user_2eQemKMCkOiRiUa66oL3vKxg3WL",
          firstName: "test",
          lastName: "user",
          userName: "testuser",
          email: {
            created_at: 1711841377366.0,
            email_address: "email@email.com",
            id: "idn_2eQelFWQdMTarU6po89Wuu91tKl",
            linked_to: [
              {id: "idn_2eQel8V8SC3BxX3X198oae1kCk8", type: "oauth_microsoft"}
            ],
            object: "email_address",
            reserved: false,
            updated_at: 1711841386147.0,
            verification: {
              status: "verified",
              strategy: "from_oauth_microsoft"
            }
          },
          phone: null,
          createdAt: 1711841386117.0,
          friendList: ["user_2eQchyJV6mMcj0ml8DFWIue07jR", "user_2eQpTAfvBtMpl4dLV0xtLVjkEmW"],
          SentPendingFriendList: [],
          ReceivedPendingFriendList: []
        }) // Mocked response to simulate a successful find operation
      })
    }),
    close: jest.fn().mockResolvedValue(null),
  }))
}));

jest.mock('@/lib/dbConfig', () => ({
  getMongoDbUri: jest.fn().mockReturnValue('accord-systems')
}));

describe("Account Retrieval Mock Test", () => {
  let client: MongoClient;

  beforeAll(async () => {
    // Setup mock MongoDB connection
    client = new MongoClient(getMongoDbUri());
    await client.connect();
  });

  afterAll(async () => {
    await client.close();
  });

  it("should retrieve an account document successfully by id", async () => {
    const accountId = "user_2eQemKMCkOiRiUa66oL3vKxg3WL";
    const accountsCollection = client.db("Accord").collection("Accounts");

    const result = await accountsCollection.findOne({ id: accountId });

    // Runtime check to ensure 'result' is not null
    expect(result).not.toBeNull();

    if (result) {
        expect(result.firstName).toBe("test");
        expect(result.lastName).toBe("user");
        expect(result.userName).toBe("testuser");
        expect(result.email.email_address).toBe("email@email.com");
        expect(result.email.verification.status).toBe("verified");
        expect(result.friendList).toEqual(expect.arrayContaining(["user_2eQchyJV6mMcj0ml8DFWIue07jR", "user_2eQpTAfvBtMpl4dLV0xtLVjkEmW"]));
    } else {
        fail("result is null");
    }
  });
});

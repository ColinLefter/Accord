import { Db, MongoClient } from "mongodb";
import { getMongoDbUri } from "@/lib/dbConfig";

describe("Account Document Test", () => {
  let client: MongoClient;
  let db: Db;

  beforeAll(async () => {
    // Setup MongoDB connection
    client = new MongoClient(getMongoDbUri());
    await client.connect();
    db = client.db("Accord"); // The name of our DB
  });

  afterAll(async () => {
    await client.close();
  });

  it("should retrieve user data by username", async () => {
    const userName = "user1"; // The username you're testing
    const accountsCollection = db.collection("Accounts");

    const result = await accountsCollection.findOne({ userName });

    expect(result).not.toBeNull();
    if (result) {
      expect(result.email).toBe("user1@example.com");
      expect(result.phoneNumber).toBe("+1 999 888 7654");
      expect(result.password).toBe("user1Pass");
    }
  });
});
import { Db, MongoClient, ObjectId } from "mongodb";
import { getMongoDbUri } from "@/lib/dbConfig";

describe("Accord.Accounts Document Insert and Cleanup Test ", () => {
  let db: Db;
  let client: MongoClient;
  let insertedDocumentId: ObjectId; // Variable to store the ID of the inserted document for cleanup

  beforeAll(async () => {
    // Setup MongoDB connection
    client = new MongoClient(getMongoDbUri());
    await client.connect();
    db = client.db("Accord");
  });

  afterAll(async () => {
    await client.close();
  });

  it("should retrieve IDslist of the server of logged in user by username", async () => {
    const userName = "user1"; // The username you're testing
    const serversCollection = db.collection("ServersOfUsers");

    const result = await serversCollection.findOne({ userName });

    expect(result).not.toBeNull();
    //console.log(result?.serverIDList)
    if (result) {
      expect(result.serverIDList).toEqual(["1", "2", "-1"]);
    }
  });
});
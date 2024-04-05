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

  afterEach(async () => {
    if (insertedDocumentId) {
      // Cleanup the inserted document after each test
      await db.collection("Servers").deleteOne({ _id: insertedDocumentId });
    }
  });

  it("should insert a new server into Accord.Servers then clean up", async () => {
    const serversCollection = db.collection("Servers");
    const newServer = {
      serverID: "3",
      serverName: "server3",
      serverDesc: "A sad place"
    };

    const insertResult = await serversCollection.insertOne(newServer);
    expect(insertResult.acknowledged).toBeTruthy();
    expect(insertResult.insertedId).toBeDefined();
    insertedDocumentId = insertResult.insertedId; // Store the inserted document ID for cleanup

    // Optionally, fetch the inserted document to verify
    const insertedMessage = await serversCollection.findOne({ _id: insertResult.insertedId });
    expect(insertedMessage).toMatchObject(newServer);
  });
});
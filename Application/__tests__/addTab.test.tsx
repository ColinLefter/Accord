import { Db, MongoClient, ObjectId } from "mongodb";
import { getMongoDbUri } from "@/lib/DbConfig";

/**
 * Test suite for document insertion and cleanup in the Accord.Servers collection.
 *
 * This suite performs integration tests to ensure that documents can be successfully
 * inserted into the Accord.Servers collection within the MongoDB database. It also
 * verifies that inserted documents can be cleaned up after each test, maintaining a
 * clean state for subsequent tests. This is critical for preventing test interdependence
 * and for ensuring that each test runs in a controlled environment.
 *
 * The MongoDB connection is set up before all tests run and is closed after all tests
 * have completed. A unique document is inserted into the Accord.Servers collection in each
 * test, and its successful insertion is verified. After each test, the inserted document
 * is cleaned up to ensure no residual data affects other tests.
 *
 * Methods:
 * - beforeAll: Establishes a connection to the MongoDB database using the MongoClient,
 *   connecting to the "Accord" database.
 * - afterAll: Closes the MongoDB connection after all tests have completed.
 * - afterEach: Cleans up by deleting the inserted document from the Accord.Servers
 *   collection after each test, ensuring no test data persists.
 * - it("should insert a new server into Accord.Servers then clean up"): Inserts a new server
 *   document into the Accord.Servers collection and verifies both the insertion was acknowledged
 *   and the inserted document's ID is defined. It then fetches the inserted document to verify
 *   the insertion was as expected, matching the new server's details.
 */
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
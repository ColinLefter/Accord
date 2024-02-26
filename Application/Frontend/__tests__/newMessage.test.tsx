import { Db, MongoClient, ObjectId } from "mongodb";
import { getMongoDbUri } from "@/lib/dbConfig";

describe("Message Document Insert and Cleanup Test", () => {
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
      await db.collection("Messages").deleteOne({ _id: insertedDocumentId });
    }
  });

  it("should insert a new message into the Messages collection and then clean up", async () => {
    const messagesCollection = db.collection("Messages");
    const newMessage = {
      date: new Date(),
      sentBy: "user1",
      message: "Greetings, user 2!"
    };

    const insertResult = await messagesCollection.insertOne(newMessage);
    expect(insertResult.acknowledged).toBeTruthy();
    expect(insertResult.insertedId).toBeDefined();
    insertedDocumentId = insertResult.insertedId; // Store the inserted document ID for cleanup

    // Optionally, fetch the inserted document to verify
    const insertedMessage = await messagesCollection.findOne({ _id: insertResult.insertedId });
    expect(insertedMessage).toMatchObject(newMessage);
  });
});

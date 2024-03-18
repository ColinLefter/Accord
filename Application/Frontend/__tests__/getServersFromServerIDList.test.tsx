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

  it("should retrieve list of the server data of logged in user by serverIDList", async () => {
    const serverIDList = ["1", "2", "-1"]; // The username you're testing
    const serversCollection = db.collection("Servers");

    let result = []
      let listOfServers
      for(let i in serverIDList){
        listOfServers = await serversCollection.findOne({serverID: serverIDList[i]}) // IMPORTANT: The findOne method returns a promise, so we need to await the resolution of the promise first
        result.push(listOfServers)
      }

    expect(result).not.toBeNull();
    //console.log(result?.serverIDList)
    if (result) {
      expect(result).toEqual([
        {
          _id: new ObjectId("65dbc22e7df38ece4025f59d"),
          serverID: '1',
          serverName: 'server1',
          serverDesc: 'A fun place to hang out'
        },
        {
          _id: new ObjectId("65dbc23b7df38ece4025f59f"),
          serverID: '2',
          serverName: 'server2',
          serverDesc: 'Another fun place to hang out'
        },
        {
          _id: new ObjectId("65f650761278c989818698fd"),
          serverID: '-1',
          serverName: '-server1',
          serverDesc: 'A fun place to hang out'
        }
      ]);
    }
  });
});
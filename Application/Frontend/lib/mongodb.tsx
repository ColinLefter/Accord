const { MongoClient, ServerApiVersion } = require("mongodb");
import { getMongoDbUri } from "@/lib/dbConfig";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(getMongoDbUri(), {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  // Server automatically connected so no need for await client.connect()
  try {
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

module.exports = { run }; // Export the function

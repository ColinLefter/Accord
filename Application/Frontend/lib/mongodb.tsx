const { MongoClient, ServerApiVersion } = require("mongodb");
import { getMongoDbUri } from "@/lib/dbConfig";

/**
 * This module establishes a connection to MongoDB using the MongoDB Node.js driver. It defines
 * a `run` function to test the connection by pinging the MongoDB server. The MongoClient is
 * configured to use a specific server API version, enabling strict mode and deprecation errors
 * to ensure that the application uses only the stable API features.
 *
 * @module mongodbConnection
 * @function run - Executes a ping command to test the MongoDB connection.
 * 
 * Usage:
 * - Import the `run` function from this module to test the MongoDB connection.
 * - The MongoClient instance is pre-configured with connection options for stable API usage.
 * - Once imported, invoking `run` will attempt to connect to the database and ping it,
 *   logging a success message or any errors encountered.
 *
 * Note:
 * - The MongoDB URI is retrieved from a separate configuration module to abstract away
 *   sensitive information and centralize configuration management.
 * - The `run` function is designed to be self-contained for easy testing and can be
 *   integrated into larger application flows to confirm database connectivity.
 */
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

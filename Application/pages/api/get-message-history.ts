import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * API endpoint handler for fetching message history from the MongoDB database.
 * This handler responds to POST requests with a specific channel key and retrieves
 * the corresponding chat history.
 *
 * @param {NextApiRequest} req The incoming HTTP request. Expects a POST method
 * with a body containing the 'channelKey' to identify the chat whose history is being requested.
 * @param {NextApiResponse} res The outgoing HTTP response. Returns the chat history on success,
 * an error message on failure, and a method not allowed message if the HTTP method is not POST.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only respond to POST requests; other methods are not supported for this endpoint.
  if (req.method === 'POST') {
    const { channelKey } = req.body; // Extract the channelKey from the request body.

    let client: MongoClient | null = null; // Define a variable to hold the MongoDB client.

    try {
      client = new MongoClient(getMongoDbUri()); // Initialize the MongoDB client.
      await client.connect(); // Establish a connection to the database.
      const db = client.db('Accord'); // Access the 'Accord' database.
      const chatsCollection = db.collection('Chats'); // Access the 'Chats' collection.

      const chat = await chatsCollection.findOne({ channelKey: channelKey }); // Find the chat with the given channel key.

      // If the chat is found, return its message history; otherwise, return a 404 error.
      if (chat) {
        res.status(200).json({ messageHistory: chat.messageHistory });
      } else {
        res.status(404).json({ error: 'Chat history not found' });
      }
    } catch (error) {
      console.error('Failed to fetch message history:', error);
      res.status(500).json({ error: 'Error fetching message history' });
    } finally {
      // Ensure the database client is closed properly.
      if (client) {
        await client.close();
      }
    }
  } else {
    // If the method is not POST, return a 405 Method Not Allowed error.
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

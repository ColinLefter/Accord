import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * Handles the POST request to update the message history in the database. It updates the message
 * history for a specific chat channel.
 *
 * @param req - The incoming Next.js API request object, containing the channelKey and messageHistory.
 * @param res - The outgoing Next.js API response object used to send back the result.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { channelKey, messageHistory } = req.body; // Data received from the client
    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const chatsCollection = db.collection("Chats");

      // Updating the message history in the database
      await chatsCollection.updateOne(
        { channelKey: channelKey },
        { $set: { messageHistory: messageHistory } } // This is where we overwrite the old message history with the new one
      );

      res.status(200).json({ message: 'Message history updated successfully' });
    } catch (error) {
      console.error('Failed to update message history:', error);
      return res.status(500).json({ error: 'Error updating message history' });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    // Inform the client about allowed method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

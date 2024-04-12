import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/DbConfig';

/**
 * Handles the POST request to update or create the message history in the database.
 * It either updates the message history for a specific chat channel or creates a
 * new channel document if it does not exist.
 *
 * @param req - The incoming Next.js API request object, containing the channelKey and messageHistory.
 * @param res - The outgoing Next.js API response object used to send back the result.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { channelKey, messageHistory } = req.body;
    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const chatsCollection = db.collection("Chats");

      // Update the message history for an existing document
      const updateResult = await chatsCollection.updateOne(
        { channelKey: channelKey },
        { $set: { messageHistory: messageHistory } }
      );

      if (updateResult.matchedCount === 0) {
        return res.status(404).json({ error: 'Chat not found' });
      }

      res.status(200).json({ message: 'Message history updated successfully' });
    } catch (error) {
      console.error('Failed to update message history:', error);
      res.status(500).json({ error: 'Error updating message history' });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
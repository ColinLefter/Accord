import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * API endpoint handler for fetching the members of a chat from the MongoDB database.
 * This handler responds to POST requests with a specific channel key and retrieves
 * the corresponding chat members.
 *
 * @param {NextApiRequest} req The incoming HTTP request. Expects a POST method
 * with a body containing the 'channelKey' to identify the chat whose members are being requested.
 * @param {NextApiResponse} res The outgoing HTTP response. Returns the chat members on success,
 * an error message on failure, and a method not allowed message if the HTTP method is not POST.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { channelKey } = req.body;

    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const chatsCollection = db.collection('Chats');

      // Find the chat with the given channel key and return only the memberIDs field
      const chat = await chatsCollection.findOne(
        { channelKey: channelKey },
        { projection: { memberIDs: 1, _id: 0 } } // Adjusted to return only the memberIDs field
      );
      
      if (chat) {
        // Return the members of the chat
        res.status(200).json({ members: chat.memberIDs });
      } else {
        res.status(404).json({ error: 'Chat not found' });
      }
    } catch (error) {
      console.error('Failed to fetch chat members:', error);
      res.status(500).json({ error: 'Error fetching chat members' });
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

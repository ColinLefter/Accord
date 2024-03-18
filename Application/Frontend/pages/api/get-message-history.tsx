// pages/api/get-message-history.tsx
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { channelKey } = req.body;
    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const chatsCollection = db.collection('Chats');
      
      const chat = await chatsCollection.findOne({ channelKey: channelKey });

      if (chat) {
        res.status(200).json({ messageHistory: chat.messageHistory });
      } else {
        res.status(404).json({ error: 'Chat history not found' });
      }
    } catch (error) {
      console.error('Failed to fetch message history:', error);
      res.status(500).json({ error: 'Error fetching message history' });
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
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userID } = req.body;
  let client;

  try {
    client = new MongoClient(getMongoDbUri());
    await client.connect();
    const db = client.db('Accord');
    const chatsCollection = db.collection('Chats');

    const userChats = await chatsCollection.find({
      memberIDs: userID
    }).sort({ dateCreated: -1 }).toArray(); // Sort chats by newest first

    res.status(200).json({ chats: userChats });
  } catch (error) {
    console.error('Database query failed:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client?.close();
  }
}

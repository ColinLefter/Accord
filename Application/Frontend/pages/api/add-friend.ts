import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { senderID, friendUsername } = req.body;
  const client = new MongoClient(getMongoDbUri());

  try {
    await client.connect();
    const db = client.db('Accord');
    const accountsCollection = db.collection('Accounts');

    // Find the friend user by username
    const friend = await accountsCollection.findOne({ userName: friendUsername });
    if (!friend) {
      return res.status(404).json({ error: 'Friend not found' });
    }

    // Add friend to the sender's friendList
    await accountsCollection.updateOne({ id: senderID }, { $addToSet: { friendList: friend.id } });

    // Add sender to the friend's friendList
    await accountsCollection.updateOne({ id: friend.id }, { $addToSet: { friendList: senderID } });

    res.status(200).json({ message: 'Friend added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}

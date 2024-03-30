import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { IDs } = req.body;
  if (!Array.isArray(IDs) || IDs.length === 0) {
    return res.status(400).json({ error: 'Invalid IDs provided' });
  }

  let client: MongoClient | null = null;

  try {
    client = new MongoClient(getMongoDbUri());
    await client.connect();
    const db = client.db('Accord');
    const accountsCollection = db.collection("Accounts");

    // Use the $in operator to find users whose ID is in IDs
    const friends = await accountsCollection.find({
      id: { $in: IDs }
    }).toArray();

    // Map over the results to extract just the usernames
    const usernames = friends.map(friend => friend.userName);

    return res.status(200).json(usernames); // Return the array of usernames
  } catch (error) {
    console.error('Failed to fetch usernames:', error);
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    if (client) {
      await client.close();
    }
  }
}

// pages/api/delete-user.tsx
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id } = JSON.parse(req.body); // Assuming the email is sent in the body

    if (!id) {
      return res.status(400).json({ error: 'User ID is required for deletion' });
    }

    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const accountsCollection = db.collection("Accounts");

      // Attempt to delete the user with the given email
      const result = await accountsCollection.deleteOne({ id: id }); // This is from the Clerk provider, so it is guaranteed to be unique as it is how they internally identify users

      if (result.deletedCount === 1) {
        return res.status(200).json({ message: 'User successfully deleted' });
      } else {
        return res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Failed to delete user:', error);
      return res.status(500).json({ error: 'Internal server error' });
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

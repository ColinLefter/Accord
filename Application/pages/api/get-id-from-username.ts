import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * Handles the POST request to retrieve a user's ID by their username.
 * Responds with the user's ID and status code 200 if the username is found,
 * or an error message and status code 404 if the username does not exist,
 * and status code 500 for any internal server errors.
 *
 * @param req - The incoming Next.js API request object.
 * @param res - The outgoing Next.js API response object for sending back the result.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username } = req.body; // Extract the username from the request body
    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const accountsCollection = db.collection("Accounts");

      // Find the user by username
      const user = await accountsCollection.findOne({ userName: username });

      if (user) {
        // If the user exists, return the user's ID
        return res.status(200).json({ id: user.id });
      } else {
        // If no user is found with the given username
        return res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error finding user by username:', error);
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

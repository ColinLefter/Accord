// pages/api/delete-user.tsx
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * Deletes a user from the Accord database. This endpoint requires a POST request with a user ID.
 * If the ID is valid and found, the user is deleted. The operation reflects directly in the MongoDB
 * 'Accounts' collection.

 * Responses:
 * - 400 for requests without an ID.
 * - 200 if deletion is successful, along with a confirmation message.
 * - 404 if the user ID is not found.
 * - 500 for internal server errors, such as issues with database connectivity.

 * The MongoDB URI is retrieved using `getMongoDbUri`, ensuring separation between the database
 * configuration and API logic.

 * @param {NextApiRequest} req The request object, expecting a 'id' in the body.
 * @param {NextApiResponse} res The response object used to send back the status and messages.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id } = req.body; // Directly destructuring `id` from `req.body` because it's already an object

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

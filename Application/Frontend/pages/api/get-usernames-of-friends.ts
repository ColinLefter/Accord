import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * Fetches usernames for a given list of user IDs from the Accord database.
 * This endpoint accepts a POST request containing an array of IDs and returns
 * an array of corresponding usernames. It queries the MongoDB 'Accounts' collection
 * to find the users by ID.

 * Responses:
 * - 405 if the request method is not POST.
 * - 400 if the provided IDs are not in an array format or the array is empty.
 * - 200 with an array of usernames matching the provided IDs.
 * - 500 for internal server errors, such as issues with database connectivity.

 * @param {NextApiRequest} req The request object, expecting an array of 'IDs' in the body.
 * @param {NextApiResponse} res The response object used to send back the usernames or error messages.
 */
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

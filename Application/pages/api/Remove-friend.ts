import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * Handles the removal of multiple friends from the user's friend list in the Accord application. It accepts a POST
 * request containing the `userID` and an array of `friendIDs`. This endpoint interacts with a MongoDB
 * database to update the friend lists by removing the specified friends from the user's `friendList`
 * and vice versa.
 *
 * Error Handling:
 * - Returns a 405 status code if the request method is not POST.
 * - Returns a 400 status code if `userID` or `friendIDs` are missing, or if `friendIDs` is not an array.
 * - Returns a 404 status code if the user or any of the friends cannot be found.
 * - Returns a 500 status code if an internal server error occurs during database operations.
 *
 * Success Response:
 * - On successfully removing the friends, responds with a 200 status code and a message indicating
 *   the friends were removed successfully from both the user's and the friends' friend lists.
 *
 * @param {NextApiRequest} req The Next.js API request object.
 * @param {NextApiResponse} res The Next.js API response object.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  
    const { userID, friendIDs } = req.body;
  
    if (!userID || !Array.isArray(friendIDs) || friendIDs.length === 0) {
      return res.status(400).json({ error: 'Missing userID or friendIDs array in request body, or friendIDs array is empty.' });
    }
  
    const client = new MongoClient(getMongoDbUri());
  
    try {
      await client.connect();
      const db = client.db('Accord');
      const accountsCollection = db.collection('Accounts');
  
      // Ensure the user exists
      const user = await accountsCollection.findOne({ id: userID });
      if (!user) {
        await client.close();
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Sequentially remove each friendID from the user's friendList and the user from each friend's friendList
      for (const friendID of friendIDs) {
        await accountsCollection.updateOne({ id: userID }, { $pull: { friendList: friendID } });
        await accountsCollection.updateOne({ id: friendID }, { $pull: { friendList: userID } });
      }
  
      res.status(200).json({ message: 'Friends removed successfully from both friend lists.' });
    } catch (error) {
      console.error('Error removing friends:', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      await client.close();
    }
  }
  
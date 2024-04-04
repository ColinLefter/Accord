import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * Handles the acceptance of a friend request between two users in the Accord application. It accepts a POST
 * request containing the `userId` and `friendId`. This endpoint interacts with a MongoDB
 * database to update the friend request lists for both the user (accepting the request) and the friend (sender of the request).
 * The friendId parameter represents the ID of the friend whose request is being accepted.

 * The process involves removing the friendId from the user's `ReceivedPendingFriendList` and adding it to the `friendList`.
 * Similarly, the user's ID is removed from the friend's `SentPendingFriendList` and added to their `friendList`.

 * Error Handling:
 * - Returns a 405 status code if the request method is not POST.
 * - Returns a 404 status code if the user or friend is not found in the database.
 * - Returns a 400 status code if either `userId` or `friendId` is missing or invalid.
 * - Returns a 500 status code if an internal server error occurs during database operations.

 * Success Response:
 * - On successfully accepting the friend request, responds with a 200 status code and a message indicating
 *   the friend request was accepted successfully.

 * Environment Variables:
 * - Ensure the MongoDB credentials and URI are properly configured and accessible to the handler
 *   through environment variables or a configuration file.

 * @param {NextApiRequest} req The Next.js API request object.
 * @param {NextApiResponse} res The Next.js API response object.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { userId, friendId } = req.body;
  const client = new MongoClient(getMongoDbUri());

  try {
    await client.connect();
    const db = client.db('Accord');
    const accountsCollection = db.collection('Accounts');

    // Find the user by ID
    const user = await accountsCollection.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find the friend by ID
    const friend = await accountsCollection.findOne({ id: friendId });
    if (!friend) {
      return res.status(404).json({ error: 'Friend not found' });
    }

    // Remove friendId from user's ReceivedPendingFriendList and add it to friendList
    await accountsCollection.updateOne({ id: userId }, { $pull: { ReceivedPendingFriendList: friendId }, $addToSet: { friendList: friendId } });
    
    // Remove userId from friend's SentPendingFriendList and add it to friendList
    await accountsCollection.updateOne({ id: friendId }, { $pull: { SentPendingFriendList: userId }, $addToSet: { friendList: userId } });

    res.status(200).json({ message: 'Friend request accepted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}

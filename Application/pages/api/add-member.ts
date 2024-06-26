import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/DbConfig';

/**
 * Handles the addition of a friend request between two users in the Accord application. It accepts a POST
 * request containing the `senderID` and `friendUsername`. This endpoint interacts with a MongoDB
 * database to update the friend request lists for both the sender and the recipient (friend).

 * The process involves looking up the friend by their username in the 'Accounts' collection. If the
 * friend is found, both the sender's and friend's documents are updated to include each other's ID
 * in their respective `SentPendingFriendList` and `ReceivedPendingFriendList` fields.

 * The MongoDB URI is obtained from a separate configuration file (`getMongoDbUri`), abstracting the
 * details of database connection strings and credentials.

 * Error Handling:
 * - Returns a 405 status code if the request method is not POST.
 * - Returns a 404 status code if the friend's username does not exist in the database.
 * - Returns a 400 status code if either `senderID` or `friend.id` is missing or invalid.
 * - Returns a 500 status code if an internal server error occurs during database operations.

 * Success Response:
 * - On successfully sending the friend request, responds with a 200 status code and a message indicating
 *   the friend request was sent successfully.

 * Environment Variables:
 * - Ensure the MongoDB credentials and URI are properly configured and accessible to the handler
 *   through environment variables or a configuration file.

 * Usage:
 * Deploy this function as part of your Next.js API routes. Make sure to handle client-side
 * requests appropriately, ensuring that `senderID` and `friendUsername` are provided in the
 * POST request body.

 * @param {NextApiRequest} req The Next.js API request object.
 * @param {NextApiResponse} res The Next.js API response object.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { channelKey, friendUsername } = req.body;
  const client = new MongoClient(getMongoDbUri());

  try {
    await client.connect();
    const db = client.db('Accord');
    const accountsCollection = db.collection('Accounts');
    const chatCollection = db.collection("Chats")

    // Find the friend user by username
    const friend = await accountsCollection.findOne({ userName: friendUsername });
    if (!friend) {
      return res.status(404).json({ error: 'Friend not found' });
    }

    if (!channelKey || !friend.id) {
      console.error('Invalid senderID or friendID');
      return res.status(400).json({ error: 'Invalid senderID or friendID' });
    }    

    // Add friend to the sender's SentPendingFriendList and vice versa
    await chatCollection.updateOne({ channelKey: channelKey }, { $addToSet: { memberIDs: friend.id } });

    return res.status(200).json({ memberID: friend.id });
    res.status(200).json({ message: 'Friend request sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}

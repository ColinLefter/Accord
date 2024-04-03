import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id, requestingUserId } = req.body; // Now also receiving the ID of the user sending the friend request

    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const accountsCollection = db.collection("Test_friend_list_request_insertion");

      // Assuming `id` is the recipient's user ID. Add `requestingUserId` to the recipient's pendingFriendRequest array.
      const updateResult = await accountsCollection.updateOne(
        { _id: new ObjectId(id) }, // Ensure the ID is correctly formatted for MongoDB
        { $addToSet: { pendingFriendRequest: requestingUserId } } // Use $addToSet to prevent duplicate friend requests
      );

      if (updateResult.matchedCount === 0) {
        return res.status(404).json({ error: 'User not found' });
      } else if (updateResult.modifiedCount === 0) {
        return res.status(409).json({ error: 'Friend request already sent' });
      } else {
        return res.status(200).json({ message: 'Friend request sent successfully' });
      }
    } catch (error) {
      console.error('Failed to send friend request:', error);
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

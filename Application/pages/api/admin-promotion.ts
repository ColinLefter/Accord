import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * This API communicates with the MongoDB, intakes in promotingID, promoterID, and a channelKey
 * Searches a channel using the channelKey, searches for the existance of ownership or adminship of the promotingID
 * Returns message (NOT ERRORS) accordingly:
 * - 200: the promotingID is not in the adminIDs array - append into the list of admin
 * - 201: the promotingID is in the adminIDs array - aka is already an admin, and the entry stays the same
 * - 202: the promotingID is the ownerID - shouldn't be appended to the adminIDs array
 * - 203: the promotingID is the same as the promoterID - shouldn't be appended to the adminIDs array
 * @param {NextApiRequest} req The Next.js API request object.
 * @param {NextApiResponse} res The Next.js API response object.
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    
    const { promotingID, promoterID, channelKey } = req.body;
    const client = new MongoClient(getMongoDbUri());

    try {
      // Communicate with the server
      await client.connect();
      const db = client.db('Accord');
      const chatsCollection = db.collection('Chats');

      // Find entries that the member already exists in, or is already the owner of the server
      const promotingIsAdmin = await chatsCollection.findOne({ channelKey : channelKey, adminIDs : promotingID })
      const promotingIsOwner = await chatsCollection.findOne({ channelKey : channelKey, ownerID : promotingID })

      if ( promoterID == promotingID ) {
        return res.status(203).json({ message: 'You cant grant yourself more admin-ness' })
      }

      if (promotingIsAdmin) {
        return res.status(201).json({ message: 'The user is already an admin of the text channel'})
      }

      if (promotingIsOwner) {
        return res.status(202).json({ message: 'The user is the owner of the text channel'})
      }

      await chatsCollection.updateOne({ channelKey: channelKey}, { $addToSet: { adminIDs: promotingID }})
      return res.status(200).json({ message: 'Promoted user to admin successfully' });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      await client.close();
    }
}
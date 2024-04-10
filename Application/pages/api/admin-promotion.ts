import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

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
      const promotingIsOwner = await chatsCollection.findOne({ channelKey : channelKey, ownerIDs : promotingID })

      if (promotingIsAdmin) {
        return res.status(201).json({ message: 'The user is already an admin of the text channel'})
      }

      if (promotingIsOwner) {
        return res.status(202).json({ message: 'The user is the owner of the text channel'})
      }

      if ( promoterID == promotingID ) {
        return res.status(203).json({ message: 'You cant grant yourself more admin-ness' })
      }

      await chatsCollection.updateOne({ channelKey: channelKey}, { $addToSet: { adminID: promotingID }})
      return res.status(200).json({ message: 'Promoted user to admin successfully' });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      await client.close();
    }
}
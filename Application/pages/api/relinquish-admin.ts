import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';
import { sendError } from 'next/dist/server/api-utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { senderID, channelKey } = req.body;
        const client = new MongoClient(getMongoDbUri());

        try {
            await client.connect();
            const db = client.db('Accord');
            const chatsCollection = db.collection('Chats');

            // Mostly used as logic checking for errors diagnosis
            const isIn = await chatsCollection.findOne({ channelKey: channelKey, memberIDs: senderID });
            const isAdmin = await chatsCollection.findOne({ channelKey: channelKey, adminIDs: senderID });

            // Check to see if the user is in the sever or is an admin (the adminIDs array contains the senderID)
            if (!isIn) {
                return res.status(403).json({ error: 'You do not belong to the server' });
            }

            if (!isAdmin) {
                return res.status(404).json({ error: 'You do not have admin privileges in the server'})
            }

            // And if all of them are through - we can go ahead and pull the IDs of the sender from the array
            await chatsCollection.updateOne({ channelKey: channelKey }, { $pull: { adminIDs: senderID }});
            res.status(200).json({ message: 'Admin privileges succesfully relinquished' });
        
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        } finally {
            await client.close();
        }
    };
}
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';
import { generateHash } from '@/utility';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { channelName, memberIDs, adminIDs, ownerID } = req.body;
    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const chatsCollection = db.collection("Chats");

      // Generate the channelKey using the hash function
      const channelKey = generateHash([channelName, ownerID, ...memberIDs]);

      // Check if a channel with the same channelKey already exists
      const existingChannel = await chatsCollection.findOne({ channelKey: channelKey });

      if (existingChannel) {
        // If the channel already exists, respond with an error message
        return res.status(409).json({ error: 'A channel with the same name and members already exists.' });
      }

      // If no existing channel is found, proceed to create a new chat document
      const newChat = {
        channelKey: channelKey,
        channelName,
        ownerID: ownerID,
        memberIDs: [ownerID, ...memberIDs],
        adminIDs,
        messageHistory: [] // Initialize with an empty message history
      };

      await chatsCollection.insertOne(newChat);

      res.status(201).json({ message: 'New text channel created successfully.' });
    } catch (error) {
      console.error('Failed to create new text channel:', error);
      res.status(500).json({ error: 'Error creating new text channel.' });
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
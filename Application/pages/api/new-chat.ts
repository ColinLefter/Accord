import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';
import { generateChannelKey } from '@/utility';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // In JavaScript, if you try to destructure properties that don't exist on an object, those variables will just be undefined.
    // That means that we can just not pass in channelName, adminIDs and ownerID to indicate that we're creating a DM.
    // Since we may no longer pass an ownerID, we need to make sure that memberIDs includes the sender ID in the front end
    // as it won't make sense to pass an ownerID for DMs. After all, who owns a DM?
    const { channelName, memberIDs, adminIDs, ownerID, captureHistory } = req.body;
    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const chatsCollection = db.collection("Chats");
      
      memberIDs.sort(); // To prevent channel duplication

      // Handle both text channels and DMs
      let channelKey, newChat;
      if (channelName && ownerID && adminIDs) { // Creating a text channel
        channelKey = generateChannelKey(channelName, memberIDs)

        // Check if a channel with the same channelKey already exists
        const existingTextChannel = await chatsCollection.findOne({ channelKey: channelKey });
        if (existingTextChannel) {
          return res.status(409).json({ error: 'A channel with the same name and members already exists.' });
        }

        newChat = {
          channelKey: channelKey,
          channelName,
          dateCreated: new Date(),
          ownerID: ownerID,
          memberIDs: memberIDs,
          adminIDs,
          captureHistory, // This is a feature unique to text channels. We always capture history in DMs.
          messageHistory: [] // Initialize with an empty message history
        };
      } else { // Creating a DM
        // DMs will be unique as we don't allow a duplicate DM channel.
        // The thing that controls that is the fact that we only create a DM channel upon adding a friend.
        channelKey = generateChannelKey(null, memberIDs);
        newChat = {
          channelKey: channelKey,
          dateCreated: new Date(),
          memberIDs: memberIDs,
          messageHistory: [] // Initialize with an empty message history
        };
      }

      await chatsCollection.insertOne(newChat);
      res.status(201).json({ message: 'Chat created successfully.' });
    } catch (error) {
      console.error('Failed to create new chat:', error);
      res.status(500).json({ error: 'Error creating new chat.' });
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

import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/DbConfig';
import { generateChannelKey } from '@/utility';
/**
 * Handles the POST request for user registration, receiving the user's username, and find ONE entry that contains its username
 * Responds with a success message and status code 200 if the credentials are valid, or an error
 * message and status code 401 for invalid credentials, and 500 for any internal server errors.
 *
 * @param req - The incoming Next.js API request object, containing the 
 * @param res - The outgoing Next.js API response object used to send back the result.
 */

  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { member, channelKey } = req.body;
      let client: MongoClient | null = null;
  
      try {
        client = new MongoClient(getMongoDbUri());
        await client.connect();
        const db = client.db('Accord');
        const chatsCollection = db.collection("Chats");
  
        // Remove the member from the memberIDs list
        await chatsCollection.updateOne(
          { channelKey: channelKey },
          { $pull: { memberIDs: member } }
        );
  
        // Fetch the updated chat to get the current list of members
        const updatedChat = await chatsCollection.findOne({ channelKey: channelKey });
        if (!updatedChat) {
          return res.status(404).json({ error: 'Chat not found' });
        }
  
        // Regenerate the channelKey based on the updated list of memberIDs if necessary
        const newMemberIDs = updatedChat.memberIDs.sort();
        const newChannelKey = generateChannelKey(updatedChat.channelName, newMemberIDs);
  
        // Update the channelKey in the database if it has changed
        if (newChannelKey !== channelKey) {
          await chatsCollection.updateOne(
            { channelKey: channelKey },
            { $set: { channelKey: newChannelKey } }
          );
        }
  
        return res.status(200).json({ message: 'Member removed successfully', newChannelKey: newChannelKey });
      } catch (error) {
        console.error('Error removing member from chat:', error);
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
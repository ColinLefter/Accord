import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/DbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { messageId, channelKey } = req.body;
    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const chatsCollection = db.collection("Chats");

      // Find the chat document using the channelKey
      const chatDocument = await chatsCollection.findOne({ channelKey: channelKey });

      if (!chatDocument) {
        return res.status(404).json({ message: 'Chat not found' });
      }

      // Filter out the message to be deleted
      const updatedMessageHistory = chatDocument.messageHistory.filter((message: { id: string; }) => message.id !== messageId);

      // Update the chat document with the new message history
      await chatsCollection.updateOne(
        { channelKey: channelKey }, // Use the SHA-256 hash of the chat participants to find the chat document to update
        { $set: { messageHistory: updatedMessageHistory } } // The updated message history has one less message--the one that the user just deleted :D
      );

      res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
      console.error('Failed to delete message:', error);
      return res.status(500).json({ error: 'Error deleting message' });
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

import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * Handles the POST request to update or create the message history in the database.
 * It either updates the message history for a specific chat channel or creates a
 * new channel document if it does not exist.
 *
 * @param req - The incoming Next.js API request object, containing the channelKey and messageHistory.
 * @param res - The outgoing Next.js API response object used to send back the result.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { channelKey, messageHistory, owner, memberIDs } = req.body; // Include owner and members in the request body
    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const chatsCollection = db.collection("Chats");

      /*
        Update the message history or insert a new document if it does not exist
        If a document with the specified channelKey exists, MongoDB updates the messageHistory field of that document.
        If no document matches the channelKey, MongoDB creates a new document using the fields provided in $setOnInsert and $set.
        It sets owner and memberList only upon creation and updates messageHistory.

        $setOnInsert: { owner: owner, memberList: members }: This operation sets the owner and memberList fields only when a new document is being inserted (i.e., when the chat does not already exist in the collection).
        If the document is being updated (i.e., it already exists), these fields will not be altered.

        $set: { messageHistory: messageHistory }: This operation updates the messageHistory field every time, regardless of whether the document is new or existing.
        In a new document, it sets this field. In an existing document, it updates this field.
      */
      await chatsCollection.updateOne(
        { channelKey: channelKey },
        {
          $setOnInsert: { owner: owner, memberIDs: memberIDs }, // IMPORTANT: This field is only set upon creation of a new document
          $set: { messageHistory: messageHistory } // IMPORTANT: This field is updated or created in the document whether it is new or existing
        },
        { upsert: true }  // IMPORTANT: This option creates a new document if no document matches the query. New chats between users would cause this to trigger
      );
      

      res.status(200).json({ message: 'Message history updated or created successfully' });
    } catch (error) {
      console.error('Failed to update or create message history:', error);
      return res.status(500).json({ error: 'Error updating or creating message history' });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    // Inform the client about the allowed method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
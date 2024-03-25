import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';
import { currentUser } from '@clerk/nextjs';

let client: MongoClient | null = null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = await currentUser();

  // Immediately handle the case where user is null.
  // There is a possibility that we will always get this error, in which case we need to pass the user as a parameter to the function from the client-side.
  // That is because we cannot use useEffect on the server-side as that is a client-side hook, but if we can pass it from the client-side, that solves the problem.
  if (!user) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  if (req.method === 'POST') {
    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');

      const serversCollection = db.collection("ServersOfUsers");
      // Here, you can safely use user.username because you've already checked if user is null.
      const listOfServerIDs = await serversCollection.findOne({ userName: user.username });
      console.log(listOfServerIDs);
      if (listOfServerIDs) {
        return res.status(200).json({ listOfServerIDs: listOfServerIDs.serverIDList });
      } else {
        return res.status(404).json({ error: 'User servers not found' });
      }
    } catch (error) {
      console.error('Error accessing the database:', error);
      return res.status(500).json({ message: 'Internal server error' });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
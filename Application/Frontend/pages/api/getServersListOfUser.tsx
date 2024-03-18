import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

// const client = new MongoClient("mongodb+srv://tobyn:QY8jZcEhoNBzdGOu@accord-systems.umbugbv.mongodb.net/?retryWrites=true&w=majority&appName=Accord-Systems", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
let client: MongoClient | null = null;
async function connectToDatabase() {
  try {
    const client = new MongoClient(getMongoDbUri());
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('Accord');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { serverName, serverID, serverDesc } = req.body;

    try {
      // const db = await connectToDatabase();
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');

      const serversCollection = db.collection("ServersOfUsers");
      const listOfServerIDs = await serversCollection.findOne({userName: "user1"}) // IMPORTANT: The findOne method returns a promise, so we need to await the resolution of the promise first
      console.log(listOfServerIDs)
      if (listOfServerIDs) {
        return res.status(200).json({ listOfServerIDs: listOfServerIDs?.serverIDList});
      } else {
        return res.status(500).json({ error: 'Internal server error' });
      }
    } catch (error) {
      console.error('Error adding tab:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
    finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
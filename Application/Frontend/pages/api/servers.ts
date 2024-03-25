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

      const serversCollection = db.collection("Servers");
      await serversCollection.insertOne({ serverName: serverName , serverID: serverID, serverDesc: serverDesc });
      res.status(201).json({ message: 'Tab added successfully' });
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

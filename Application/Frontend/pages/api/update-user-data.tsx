import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * Handles the POST request for updating user data, validating the user credentials against the database.
 * Responds with a success message and status code 200 if the credentials are valid, or an error
 * message and status code 401 for invalid credentials, and 500 for any internal server errors.
 *
 * @param req - The incoming Next.js API request object, containing the username and password.
 * @param res - The outgoing Next.js API response object used to send back the result.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      firstName,
      lastName,
      username,
      email,
      phone,
      createdAt
    } = req.body; // Intaking the data that has been sent from the client-side

    let client: MongoClient | null = null; // We need to assign something to the client so TypeScript is aware that it can be null if the connection fails

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');

      const accountsCollection = db.collection("Accounts");

      const filter = { email: email}; // We are actually filtering by email, not username, since our provider guarantees that everyone has unique emails

      const updateDoc = {
        $set: {
          firstName: firstName,
          lastName: lastName,
          username: username,
          email: email,
          phone: phone,
          createdAt: createdAt
        },
      };

      const result = await accountsCollection.updateOne(filter, updateDoc);

      if (result.matchedCount != 0) { // i.e. if the user was found
        return res.status(200).json({ error: 'User account data successfully updated!' });
      }
      else {
        return res.status(401).json({ error: 'User account not found' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    // Handle any requests other than POST
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

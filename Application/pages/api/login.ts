import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * Handles the POST request for user login, validating the user credentials against the database.
 * Responds with a success message and status code 200 if the credentials are valid, or an error
 * message and status code 401 for invalid credentials, and 500 for any internal server errors.
 *
 * @param req - The incoming Next.js API request object, containing the username and password.
 * @param res - The outgoing Next.js API response object used to send back the result.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userName, password } = req.body; // Intaking the data that has been sent from the client-side
    let client: MongoClient | null = null; // We need to assign something to the client so TypeScript is aware that it can be null if the connection fails

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');

      const accountsCollection = db.collection("Accounts");
      // Querying the database by the username we received
      const user = await accountsCollection.findOne({ userName: userName }); // IMPORTANT: The findOne method returns a promise, so we need to await the resolution of the promise first

      if (user && user.password === password) {
        return res.status(200).json({ message: 'Login successful' });
      } else {
        if (!user) {
          return res.status(401).json({ error: 'Invalid username' });
        } else {
          return res.status(401).json({ error: 'Invalid password' });
        }
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

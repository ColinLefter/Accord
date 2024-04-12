import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/DbConfig';

/**
 * Handles the POST request for registering users, validating the user credentials against the database.
 * Responds with a success message and status code 200 if the credentials are valid, or an error
 * message and status code 401 for invalid credentials, and 500 for any internal server errors.
 *
 * @param req - The incoming Next.js API request object, containing the userName and password.
 * @param res - The outgoing Next.js API response object used to send back the result.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      id,
      firstName,
      lastName,
      userName,
      email,
      phone,
      createdAt
    } = req.body;

    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');

      const accountsCollection = db.collection("Accounts");

      // First, check if an account with the same 'id' or 'userName' already exists
      const existingAccountById = await accountsCollection.findOne({ id: id });
      const existingAccountByUserName = await accountsCollection.findOne({ userName: userName });

      if (existingAccountById || existingAccountByUserName) {
        // If the account already exists by either id or userName, return a message indicating so
        return res.status(409).json({ message: 'An account with the same ID or username already exists.' });
      }

      // If the account does not exist by either criterion, proceed to create a new account
      await accountsCollection.insertOne({
        id: id,
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        phone: phone,
        createdAt: createdAt,
        friendList: [] // Everyone starts with an empty friends list. They can add friends via the application shell.
      });

      return res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
      console.error('Failed to register user:', error);
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
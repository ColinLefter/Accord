import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * Handles the POST request for user registration, receiving the user's username, and find ONE entry that contains its username
 * Responds with a success message and status code 200 if the credentials are valid, or an error
 * message and status code 401 for invalid credentials, and 500 for any internal server errors.
 *
 * @param req - The incoming Next.js API request object, containing the 
 * @param res - The outgoing Next.js API response object used to send back the result.
 */

  // Reader starts from here
export default async function handler(req: NextApiRequest, res: NextApiResponse) { 
  if (req.method === 'POST') { 
    const { userName } = req.body; // Intaking the data that has been sent from the client-side - only using the username ("user1") for the .findOne method for now
    let client: MongoClient | null = null; // We need to assign something to the client so TypeScript is aware that it can be null if the connection fails 

    try { //creating and establishing connections to the DB
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');

      // Reach into the db, and grab the Accounts table
      const accountsCollection = db.collection("Accounts");
      // Querying the database by the username we received
      const user = await accountsCollection.findOne({ userName: userName }); // IMPORTANT: The findOne method returns a promise, so we need to await the resolution of the promise first
      // now user variable contains these data from the table
      /*
        {
        "_id": {
          "$oid": "65dbc3e37df38ece4025f5ac"
        },
        "userName": "user1",
        "email": "user1@example.com",
        "phoneNumber": "+1 999 888 7654",
        "password": "user1Pass",
        "friendList": [
          "user2",
          "hoc",
          "toby",
          "bao",
          "colin",
          "immanuel"
        ]
        }
      */

      if (user) { // Check if the user existed 
        return res.status(200).json({ friendList: user.friendList}); // Return the array friendList of this user                                                                                                                    // Now the JSON string of above ^ will be sent back to UserSettings
      } else {
        return res.status(401).json({ error: 'Not fetchable' }); // Returns error if not fetchable
      }
    } catch (error) { // Copy paste from this point - just error catching, method detecting and closing the clients - back to UserSettings.tsx in components
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
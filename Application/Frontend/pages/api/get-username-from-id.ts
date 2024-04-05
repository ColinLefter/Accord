import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * API endpoint to retrieve a username for a given user ID.
 * 
 * This endpoint expects a POST request with a body containing a `userID`, which is the ID of a user.
 * It performs a database query to find the corresponding user document for the given ID.
 * If found, it returns an object with the user's `username`.
 * 
 * If the user ID does not correspond to an existing user in the database,
 * the endpoint responds with a 404 error and a message indicating the user was not found.
 * This behavior ensures the client can be aware of any incorrect or outdated IDs.
 * 
 * @param {NextApiRequest} req The incoming Next.js API request object. Expects a POST method and a JSON body containing a `userID`.
 * @param {NextApiResponse} res The outgoing Next.js API response object used to send back the username.
 * 
 * @returns {void} Responds with a JSON object containing `username` for the user found.
 *                 If an error occurs, responds with a relevant HTTP status code and error message.
 * 
 * Usage:
 * POST /api/get-username
 * Body: { "userID": "user_id_1" }
 * 
 * Successful Response:
 * HTTP 200 OK
 * Response body: { "username": "UserOne" }
 * 
 * Error Responses:
 * HTTP 404 Not Found - The user ID does not match any user in the database.
 * HTTP 500 Internal Server Error - An unexpected error occurred during the operation.
 * 
 * Note: This endpoint requires proper authentication and authorization mechanisms to ensure data privacy and security.
 *       Ensure the client making the request is authorized to access the user ID provided.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userID } = req.body; // Expect a single userID in the request body
    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const accountsCollection = db.collection("Accounts");

      // Query the database for the given userID
      const user = await accountsCollection.findOne({ id: userID });


      if (user) {
        // Return the username associated with the userID
        return res.status(200).json({ username: user.userName });
      } else {
        return res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Failed to fetch username:', error);
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
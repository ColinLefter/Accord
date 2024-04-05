import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

/**
 * API endpoint to retrieve username and ID pairs for a list of user IDs.
 * 
 * This endpoint expects a POST request with a body containing a `friendList`, which is an array of user IDs.
 * It iterates over this list, performing a database query for each ID to find the corresponding user document.
 * For each found user, it constructs an object with the user's `id` and `username` and adds it to an array of such objects.
 * This array is then returned as a JSON response, maintaining the order of IDs as provided in the request.
 * 
 * If any user ID in the `friendList` does not correspond to an existing user in the database,
 * the endpoint immediately responds with a 404 error and a message indicating a friend was not found.
 * This behavior ensures the client can be aware of any incorrect or outdated IDs.
 * 
 * @param {NextApiRequest} req The incoming Next.js API request object. Expects a POST method and a JSON body containing a `friendList` array.
 * @param {NextApiResponse} res The outgoing Next.js API response object used to send back the result.
 * 
 * @returns {void} Responds with a JSON array of objects, each containing `id` and `username` for each user found.
 *                 If an error occurs, responds with a relevant HTTP status code and error message.
 * 
 * Usage:
 * POST /api/get-id-username-pairs
 * Body: { "friendList": ["user_id_1", "user_id_2", ...] }
 * 
 * Successful Response:
 * HTTP 200 OK
 * Response body: [{ "id": "user_id_1", "username": "UserOne" }, { "id": "user_id_2", "username": "UserTwo" }, ...]
 * 
 * Error Responses:
 * HTTP 404 Not Found - A user ID in the friendList does not match any user in the database.
 * HTTP 500 Internal Server Error - An unexpected error occurred during the operation.
 * 
 * Note: This endpoint requires proper authentication and authorization mechanisms to ensure data privacy and security.
 *       Ensure the client making the request is authorized to access the list of user IDs provided in the `friendList`.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { friendList } = req.body; // friendList is an array of user IDs
    let client: MongoClient | null = null;

    try {
      client = new MongoClient(getMongoDbUri());
      await client.connect();
      const db = client.db('Accord');
      const accountsCollection = db.collection("Accounts");

      // Initialize an empty array for the id-username pairs
      const idUsernamePairs = [];

      // Iterate over the friendList array
      for (const id of friendList) { // We have to conduct a singulra findOne operation for each ID because the results returned by .find are not deterministic
        // Using findOne for each ID to ensure the order
        const user = await accountsCollection.findOne({ id: id });
        if (user) {
          // Push the id-username pair for each found user
          idUsernamePairs.push({ // for each ID, retrieve the associated username and push that username-id pair to the array to guarantee the order of the data
            id: user.id, // This is the ID associated with the particular friend that is currently being examined
            username: user.userName
          });
        } else {
          return res.status(404).json({ error: 'A friend was not found during the construction of id-username pairs' });
        }
      }

      return res.status(200).json(idUsernamePairs);
    } catch (error) {
      console.error('Failed to fetch id-username pairs:', error);
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

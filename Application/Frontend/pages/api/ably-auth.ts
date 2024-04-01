import { NextApiRequest, NextApiResponse } from 'next';
import Ably from 'ably/promises';
import { currentUser } from '@clerk/nextjs';

/**
 * This API endpoint is designed to facilitate token requests for clients using the Ably Realtime service.
 * It is specifically tailored for clients that need to authenticate with Ably to establish a secure
 * connection for real-time messaging capabilities. This endpoint supports POST requests to generate
 * Ably token requests, ensuring clients can dynamically obtain tokens for authentication without
 * exposing sensitive API keys.

 * The endpoint leverages Ably's server-side SDK to create a token request, encapsulating details such
 * as the `clientId`. The `clientId` is an identifier for the client requesting the token, which, in this
 * case, is hardcoded as 'accord-systems-messaging'. This approach enables a layer of abstraction where
 * the server handles the generation of token requests, thereby enhancing security by keeping the Ably
 * API key confidential and server-side.

 * Upon receiving a POST request, this endpoint interacts with the Ably service to generate a token
 * request. It responds with the token request data if successful, allowing the client to proceed with
 * Ably authentication. In case of an error during the token request generation, it logs the error and
 * responds with a 500 status code, indicating an internal server error.

 * Environment Variables:
 * - `ABLY_API_KEY_PUBLISH_SUBSCRIBE`: The Ably API key with publish and subscribe capabilities. It must
 * be set in the environment variables to authenticate with Ably and generate token requests.

 * Note:
 * This endpoint strictly handles POST requests as it involves the creation of a resource (token request).
 * Any attempts to use other HTTP methods will result in a 405 Method Not Allowed response, with the
 * endpoint indicating that only POST is supported.

 * Usage:
 * Deploy this function as part of your Next.js API routes. Ensure the `ABLY_API_KEY_PUBLISH_SUBSCRIBE`
 * environment variable is set with your Ably API key. Clients should send a POST request to this endpoint
 * to receive token request data for Ably authentication.

 * @param {NextApiRequest} req The Next.js API request object.
 * @param {NextApiResponse} res The Next.js API response object.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = await currentUser();

  if (req.method === 'POST') {
    const ably = new Ably.Rest.Promise({ key: process.env.ABLY_API_KEY_PUBLISH_SUBSCRIBE });

    if (user === null) {
      res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const tokenRequestData = await ably.auth.createTokenRequest({ clientId: user?.id }); // We are creating a token request for the client
      res.status(200).json(tokenRequestData);
    } catch (error) {
      console.error('Ably token request error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // Only allow POST requests to this endpoint
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
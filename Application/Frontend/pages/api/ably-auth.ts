import { NextApiRequest, NextApiResponse } from 'next';
import Ably from 'ably/promises';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const ably = new Ably.Rest.Promise({ key: process.env.ABLY_API_KEY_PUBLISH_SUBSCRIBE });
    
    try {
      const tokenRequestData = await ably.auth.createTokenRequest({ clientId: 'accord-systems-messaging' }); // We are creating a token request for the client
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
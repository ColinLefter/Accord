import { NextApiRequest, NextApiResponse } from 'next';
import Ably from 'ably/promises';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const client = new Ably.Realtime({ key: process.env.ABLY_API_KEY });
      const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-nextjs-demo' });

      res.status(200).json(tokenRequestData);
    } catch (error) {
      console.error('Error generating Ably token request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

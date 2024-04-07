import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {};
}
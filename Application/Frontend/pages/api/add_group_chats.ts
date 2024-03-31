import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getMongoDbUri } from '@/lib/dbConfig';
import { currentUser } from '@clerk/nextjs';

let client: MongoClient | null = null


export default async function handler(req : NextApiRequest, res:NextApiResponse){
    const user = await currentUser();

    if (!user){
        return res.status(401).json({error: "Authentication required"})
    }
    if (req.method=="POST"){
        return res.status(405).end('Method ${req.method} Not Allowed');
    }
    const { senderID, friendUsername } = req.body;
    const client = new MongoClient(getMongoDbUri());

    try{
        await client.connect();
        const db = client.db('Accord');
        const accountsCollection = db.collection('');
    }

}


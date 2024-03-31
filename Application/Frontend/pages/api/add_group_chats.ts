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
    if (req.method=="POST")

}


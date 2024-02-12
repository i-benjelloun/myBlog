import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (
      !email?.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = { email, name, message };

    const url =
      'mongodb+srv://i-benj:123Soleil@cluster1.bxtia.mongodb.net/?retryWrites=true&w=majority';

    let client;
    try {
      client = await MongoClient.connect(url);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db('myBlog');

    try {
      await db.collection('messages').insertOne(newMessage);
    } catch (error) {
      await client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    await client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', data: newMessage });
  }
}

export default handler;

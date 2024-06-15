import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '@clerk/nextjs/server';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = auth();

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.coins <= 0) {
      return res.status(403).json({ error: 'Insufficient coins' });
    }

    await prisma.user.update({
      where: { id: userId },
      data: { coins: { decrement: 1 } },
    });

    return res.status(200).json({ message: 'API call successful', coinsLeft: user.coins - 1 });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

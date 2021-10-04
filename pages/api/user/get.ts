import { getSession } from 'next-auth/client';
import { PrismaClient } from '@prisma/client';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-jdenticon-sprites';
import { NextApiRequest } from 'next';

const prisma = new PrismaClient();

export const getUser = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  let user = null;

  if (session?.user?.email) {
    user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { name: true, email: true, image: true },
    });

    if (user?.email && !user.image) {
      const image = createAvatar(style, {
        seed: user.email,
        dataUri: true,
      });
      user = await prisma.user.update({
        where: { email: user.email },
        data: { image },
      });
    }
  }

  return user;
};

export default async (req, res) => {
  res.send(await getUser(req));
};

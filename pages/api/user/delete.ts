import { PrismaClient } from '@prisma/client';
import { getUser } from './get';
import { NextApiResponse } from 'next';
import { IToast } from '../../../src/functions/dom';

const prisma = new PrismaClient();

export default async (req, res: NextApiResponse<IToast>) => {
  let user;

  try {
    user = await getUser(req);

    await prisma.user.delete({
      where: {
        email: user.email,
      },
    });
  } catch (e) {
    console.log('Delete user', e, req.body);
    return res.status(500).send({
      message: 'Error deleting user. Please try again later!',
      variant: 'error',
    });
  }

  return res.status(200).send({
    message: 'Your account has been deleted successfully',
    variant: 'success',
  });
};

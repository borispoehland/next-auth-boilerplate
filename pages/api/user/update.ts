import { PrismaClient } from '@prisma/client';
import { getUser } from './get';
import { NextApiResponse } from 'next';
import { IToast } from '../../../src/functions/dom';

const prisma = new PrismaClient();

export default async (req, res: NextApiResponse<IToast>) => {
  let user;

  const { field, label, newValue, oldValue } = req.body;

  try {
    user = await getUser(req);

    await prisma.user.update({
      where: {
        email: user.email,
      },
      data: {
        [field]: newValue,
      },
    });
  } catch (e) {
    console.log('Update user', e, req.body);
    return res.status(500).send({
      message: 'Error updating user. Please try again later!',
      variant: 'error',
    });
  }

  return res.status(200).send({
    message: `Successfully updated ${label.toLowerCase()} from ${oldValue} to ${newValue}.`,
    variant: 'success',
  });
};

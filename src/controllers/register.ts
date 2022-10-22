import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { createUser } from '../services/register';

export const registerUserController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await createUser({ username, password });
    res.status(201).send({ user: instanceToPlain(user) });
  } catch (err) {
    res.status(400).send({ err });
  }
};

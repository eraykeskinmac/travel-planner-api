import { Request, Response } from 'express';

export const signupController = (req: Request, res: Response) => {
  console.log('signupController');

  res.send(200);
};

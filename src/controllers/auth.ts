import { Request, Response } from 'express';

export const authLoginController = (req: Request, res: Response) => {
  res.send(200);
};

export const authStatusController = (req: Request, res: Response) => {
  req.user ? res.send(req.user) : res.sendStatus(401);
};

import { NextFunction, Request, Response } from 'express';

export const ValidateAuth = (req: Request, res: Response, next: NextFunction) => {
  req.user ? next() : res.status(401).json({ message: 'Unauthorized' });
};

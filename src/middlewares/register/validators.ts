import { NextFunction, Request, Response } from 'express';
import { registerUserSchema } from '../../utils/yup-schemas';

export const validateRegisterUser = (req: Request, res: Response, next: NextFunction) => {
  registerUserSchema
    .validate({ body: req.body })
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).send({ err });
    });
};

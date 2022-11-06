import { Request, Response } from 'express';
import { User } from '../database/entities';
import { createPlanService } from '../services/plan';
import { getPlansService } from './../services/plan';
import { CreatePlanParams } from './../utils/types/index';

export const createPlanController = async (req: Request, res: Response) => {
  const creator = req.user as User;
  const createPlanPayload = req.body as CreatePlanParams;
  try {
    const plan = await createPlanService({ ...createPlanPayload, creator });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

export const getPlansController = async (req: Request, res: Response) => {
  const user = req.user as User;
  try {
    const plans = await getPlansService({ userId: user.id });
    res.send(plans);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

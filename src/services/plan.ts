import { Plan } from '../database/entities';
import { CreatePlanParams, GetPlansParams } from '../utils/types';
import { PlanRespository } from './../database/repositories/index';

export const createPlanService = (params: CreatePlanParams) => {
  const plan = PlanRespository.create({});
  return PlanRespository.save(plan);
};

export const getPlansService = ({ userId }: GetPlansParams): Promise<Plan[]> => {
  return PlanRespository.find({
    where: {user: {id: userId}}
  });
};

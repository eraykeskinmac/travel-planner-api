import { Plan } from '../database/entities';
import { CreatePlanParams, GetPlansParams } from '../utils/types';
import { PlanRespository, UserRepository } from './../database/repositories/index';
import { findUser } from './user';

export const createPlanService = async (params: CreatePlanParams) => {
  const user = await findUser({ id: params.creator.id }, { relations: ['plans'] });
  if (!user) throw new Error('User not found');

  const newPlan = PlanRespository.create({ ...params });
  const plan = await PlanRespository.save(newPlan);
  user.plans = [...user.plans, plan];
  await UserRepository.save(user);
  return plan;
};

export const getPlansService = ({ userId }: GetPlansParams): Promise<Plan[]> => {
  return PlanRespository.createQueryBuilder('plans')
    .leftJoinAndSelect('plans.users', 'user')
    .where('users.id IN (:users)', { users: [userId] })
    .leftJoinAndSelect('plans.users', 'users')
    .leftJoinAndSelect('plans.creator', "creator")
    .getMany();
};

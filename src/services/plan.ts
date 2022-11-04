import { CreatePlanParams } from "../utils/types";
import { PlanRespository } from './../database/repositories/index';

export const createPlanService = (params: CreatePlanParams) => {
    const plan = PlanRespository.create({})
    return PlanRespository.save(plan)
}
import { PlanRespository } from './../database/repositories/index';
import { CreatePlanParams } from "../utils/types";

export const createPlanService = (params: CreatePlanParams) => {
    const plan = PlanRespository.create({})
}
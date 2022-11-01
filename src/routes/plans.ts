import { Router } from "express";
import { ValidateAuth } from "../middlewares/auth";
import { validateCreatePlan } from "../middlewares/plans/validators";
import { createPlanController } from './../controllers/plans';

const router = Router()

router.use(ValidateAuth)

router.post('/', validateCreatePlan, createPlanController)

export default router;
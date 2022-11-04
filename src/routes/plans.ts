import { Router } from 'express';
import { ValidateAuth } from '../middlewares/auth';
import { validateCreatePlan } from '../middlewares/plans/validators';
import { createPlanController, getPlansController } from './../controllers/plans';

const router = Router();

router.use(ValidateAuth);

router.post('/', validateCreatePlan, createPlanController);
router.get('/', getPlansController);

export default router;

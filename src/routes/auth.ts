import { Router } from 'express';
import { signupController } from '../controllers/auth';

const router = Router();

router.post('/signup', signupController);

export default router;

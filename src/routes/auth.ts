import { Router } from 'express';
import { authLoginController, authStatusController } from './../controllers/auth';

const router = Router();

router.post('/login', authLoginController);
router.post('/status', authStatusController);

export default router;

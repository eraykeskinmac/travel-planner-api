import { Router } from 'express';
import authRoutes from './auth';
import registerRoutes from './register';

const router = Router();

router.use('/auth', authRoutes);
router.use('/register', registerRoutes);

export default router;

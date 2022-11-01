import { Router } from 'express';
import authRoutes from './auth';
import planRoutes from './plans';
import registerRoutes from './register';

const router = Router();

router.use('/auth', authRoutes);
router.use('/register', registerRoutes);
router.use('/plans', planRoutes);

export default router;

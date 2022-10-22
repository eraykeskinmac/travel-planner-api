import { Router } from 'express';
import registerRoutes from './register';

const router = Router();

router.use('/register', registerRoutes);

export default router;
